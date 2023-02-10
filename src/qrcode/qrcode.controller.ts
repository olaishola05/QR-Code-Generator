import { GenerateQrcodeResponseDto } from './dto/create-qrcode.dto';
import { Controller, Get } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { GenerateQrcodeDto } from './dto/create-qrcode.dto';
@Controller('api/qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) { }

  @Get()
  async create() {
    const createQrcodeDto = new GenerateQrcodeDto();
    createQrcodeDto.url = 'https://boldo-uiproject.vercel.app/';
    const code = new GenerateQrcodeResponseDto();
    code.message = 'QR Code Generated Successfully';
    try {
      const res = await this.qrcodeService.generateQrCodesPeriodically(
        createQrcodeDto.url,
      );
      code.data = res;
    } catch (error) {
      code.message = 'Error Generating QR Code';
      code.data = error.message;
    }
    return code;
  }
}
