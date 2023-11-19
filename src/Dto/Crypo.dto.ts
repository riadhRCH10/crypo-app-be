import { ApiProperty } from "@nestjs/swagger";


export class CryptoDataDto {
    @ApiProperty()
    providerID: string;

    @ApiProperty()
    providerSecret : string;

    @ApiProperty()
    currencyObject: any;
  }
