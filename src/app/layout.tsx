import { Analytics } from '@vercel/analytics/react';

import React from 'react';

import { Nunito_Sans } from 'next/font/google';

import { Footer, Menu } from '@/app/_components';

import './globals.css';
import style from './styles.module.css';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
  banner: React.ReactNode;
}

export default function RootLayout({ children, banner }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <header className={style.header}>
          <Menu />
          <div className={style.banner}>{banner}</div>
        </header>
        <main className={style.main}>{children}</main>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
