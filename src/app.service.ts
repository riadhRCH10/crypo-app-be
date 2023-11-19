import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { cryptoDocument } from './schema/crypto.schema';

@Injectable()
export class AppService {
  constructor(){}
  //@InjectModel('crypto') private cryptoModel: Model<cryptoDocument>
  getCrypto(): string {
    return 'Hello World!';
  }

  postCrypto() {

  }


}
