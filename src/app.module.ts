import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { cryptoSchema } from './schema/crypto.schema';
import { providerSchema } from './schema/provider.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://riadhRCH:Transformers123@cryptodb.gaoctto.mongodb.net',
    ),
    MongooseModule.forFeature([
      { name: 'crypto', schema: cryptoSchema },
      { name: 'provider', schema: providerSchema }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
