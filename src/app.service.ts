import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { cryptoDocument } from './schema/crypto.schema';
import { CryptoDataDto } from './Dto/Crypo.dto';
import { providerDocument } from './schema/provider.schema';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

const samplecurrencyObject = {
  "bitcoin":{"usd":36470,"cny":262975},
  "ethereum":{"usd":1953.82,"cny":14088.43},
  "ripple":{"usd":0.61966,"cny":4.47}
}

@Injectable()
export class AppService {
  constructor(
    @InjectModel('crypto') private cryptoModel: Model<cryptoDocument>,
    @InjectModel('provider') private providerModel: Model<providerDocument>
  ){}

  getCrypto() {
    return this.cryptoModel.find({})
  }

  async postCrypto(body: CryptoDataDto) {
    const { providerID, providerSecret, currencyObject } = body

    if (!providerID || !providerSecret || !currencyObject) {
      throw new HttpException('Invalid request body', HttpStatus.BAD_REQUEST);
    }

    const provider = await this.providerModel.findById(providerID, 'name secret') as Document & { name: string; secret: string; }
    console.log(provider.secret, provider.name, provider)

    if (!provider || provider.secret !== providerSecret) {
      throw new HttpException('Invalid provider credentials', HttpStatus.UNAUTHORIZED);
    }

    try {  
      const cryptoDocuments = this.convertToObjectArray(currencyObject, provider.name);
      console.log(cryptoDocuments)

      await this.cryptoModel.create(cryptoDocuments);

      return { message: 'Successful operation' };

    } catch (error) {
      console.error(error)
      throw new HttpException('An error occurred', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteCrypto() {
    return await this.cryptoModel.deleteMany({})
  }

  //helper function
  convertToObjectArray(data: any, provider_name: string): any[] {
    return Object.entries(data).map(([name, rates]) => {
      const formattedRates = Object.entries(rates).map(([currency, value]) => {
        return {
          currency: currency,
          value: value
        }
      });
  
      return {
        name: name,
        rates:formattedRates,
        provider: provider_name
      }
    });
  }

}
