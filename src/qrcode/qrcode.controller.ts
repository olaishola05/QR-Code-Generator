import { GenerateQrcodeResponseDto } from './dto/create-qrcode.dto';
import { Controller, Get } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';

@Controller('api/qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) { }

  @Get()
  async create() {
    const code = new GenerateQrcodeResponseDto();
    code.message = 'QR Code Generated Successfully';
    try {
      const res = await this.qrcodeService.create();
      code.response = res;
    } catch (error) {
      code.message = 'Error Generating QR Code';
      code.response = error.message;
    }
    return code;
  }
}
