import { QrcodeOptions } from '../types/appTypes.type';
import { Injectable, Logger } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Injectable()
export class QrcodeService {
  private readonly logger = new Logger(QrcodeService.name);

  async generateQrCode(data: string): Promise<string> {
    const opts: QrcodeOptions = {
      errorCorrectionLevel: 'H',
      width: 300,
      margin: 4,
      color: {
        dark: '#010599FF',
        light: '#FFBF60FF',
      },
    };
    try {
      const url = await qrcode.toDataURL(data, opts);
      return url;
    } catch (error) {
      throw new Error(`Failed to generate QR code: ${error.message}`);
    }
  }

  generateQrCodesPeriodically(data: string) {
    setInterval(async () => {
      try {
        await this.generateQrCode(data);
      } catch (error) {
        this.logger.error(`Failed to generate QR code: ${error}`);
      }
    }, 10000);

    return this.generateQrCode(data);
  }
}
