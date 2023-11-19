import { ApiProperty } from "@nestjs/swagger";


export class CryptoDataDto {

    @ApiProperty()
    readonly cartID: string;

    @ApiProperty()
    readonly age: number;

    @ApiProperty()
    readonly breed: string;
  }
