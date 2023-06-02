import { Analytics } from '@vercel/analytics/react';
import 'server-only';

import React, { lazy } from 'react';

import { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import Menu from '@/components/menu';

import { preload } from '@/lib/user-feedback';

import './globals.css';
import style from './styles.module.css';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

const Footer = lazy(() => import('@/components/footer').then());

interface RootLayoutProps {
  children: React.ReactNode;
  banner: React.ReactNode;
}

export const metadata: Metadata = {
  themeColor: '#2c221c',
  twitter: {
    title: 'Descubra a Arte da Confeitaria com a Bona Petit!',
    description:
      'Explore o delicioso mundo da Bona Petit! Descubra doces requintados criados com o revolucionário Método Milenar de Confeitaria. Cada doce é uma viagem ao coração da tradição e inovação em confeitaria. Venha saborear a arte da confeitaria conosco!',
  },
  openGraph: {
    locale: 'pt_BR',
    type: 'website',
    title: 'Descubra a Arte da Confeitaria com a Bona Petit!',
    description:
      'Explore o delicioso mundo da Bona Petit! Descubra doces requintados criados com o revolucionário Método Milenar de Confeitaria. Cada doce é uma viagem ao coração da tradição e inovação em confeitaria. Venha saborear a arte da confeitaria conosco!',
  },
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
  metadataBase: new URL('https://bona-petit.com'),
  alternates: {
    canonical: '/',
  },
};

export default async function RootLayout({
  children,
  banner,
}: RootLayoutProps) {
  // Initializing user feedbacks
  preload();
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
