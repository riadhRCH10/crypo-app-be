import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Body } from '@nestjs/common';
import { CryptoDataDto } from './Dto/Crypo.dto';
import { Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/crypto")
  @ApiOperation({ summary: 'Get All Crypto Data.' })
	@ApiResponse({ status: 200, description: ' All Crypto Data' })
  getCrypto() {
    return this.appService.getCrypto();
  }

  @Post("/crypto")
  @ApiOperation({ summary: 'Submit Crypto Data' })
  submitCrypto(
    @Body() Body: CryptoDataDto
  ) {
    return this.appService.postCrypto(Body);
  }

  @Delete("/crypto")
  @ApiOperation({ summary: 'Delete All Crypto Data.' })
  deleteCrypto() {
    return this.appService.deleteCrypto()
  }

  @Get()
  getHello() {
    return this.appService.getHello()
  }
}
