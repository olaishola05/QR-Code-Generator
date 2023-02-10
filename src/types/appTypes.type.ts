type color = {
  dark: string;
  light: string;
};

export type QrcodeOptions = {
  width: number;
  color: color;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  margin: number;
};
