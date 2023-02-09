import { Injectable } from '@nestjs/common';
import { GenerateQrcodeDto } from './dto/create-qrcode.dto';
import * as qrcode from 'qrcode';

@Injectable()
export class QrcodeService {
  async create() {
    const createQrcodeDto = new GenerateQrcodeDto();
    createQrcodeDto.url = `${process.env.QRCODE_URL}`;
    console.log(`${process.env.QRCODE_URL}`);

    try {
      const res = await qrcode.toDataURL(createQrcodeDto.url);
      return res;
    } catch (error) {
      return error.message;
    }
  }
}
