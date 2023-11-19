import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptoSchema, cryptoSchema } from './schema/crypto.schema';
import { ProviderSchema } from './schema/provider.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://riadhRCH:Transformers123@cryptodb.gaoctto.mongodb.net',
    ),
    MongooseModule.forFeature([
      { name: 'crypto', schema: CryptoSchema },
      { name: 'provider', schema: ProviderSchema }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
