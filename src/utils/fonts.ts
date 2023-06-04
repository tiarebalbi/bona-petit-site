import { Nunito_Sans, Playfair_Display } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic', 'normal'],
});

export const nunitoSans = Nunito_Sans({ subsets: ['latin'] });
