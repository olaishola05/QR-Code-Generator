import { PartialType } from '@nestjs/mapped-types';
import { GenerateQrcodeDto } from './create-qrcode.dto';

export class UpdateQrcodeDto extends PartialType(GenerateQrcodeDto) { }
