import { Analytics } from '@vercel/analytics/react';

import React from 'react';

import { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import Footer from '@/components/footer';
import Menu from '@/components/menu';

import './globals.css';
import style from './styles.module.css';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
  banner: React.ReactNode;
}

export const metadata: Metadata = {
  themeColor: '#96855d',
  keywords: [
    'Bona Petit',
    'Chef Executivo',
    'Método Milenar de Confeitaria',
    'BP Class',
    'Confeitaria online',
    'Empreendedorismo na confeitaria',
    'Receitas lucrativas',
    'Produção em grande escala de doces',
    'Confeitaria na Itália, Espanha e França',
    'Bona Petit São José dos Campos',
    'Experiência do chef',
    'Ensino de confeitaria',
    'Alcançar objetivos na confeitaria',
    'Educação em confeitaria',
    'Crescimento na confeitaria',
  ],
  robots: {
    index: true,
    follow: true,
  },
};

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
