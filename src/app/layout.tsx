import { Analytics } from '@vercel/analytics/react';
import 'server-only';

import React, { lazy } from 'react';

import { Metadata } from 'next';

import { nunitoSans } from '@/utils/fonts';

import './globals.css';

const Footer = lazy(() => import('@/components/footer').then());

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  themeColor: '#2c221c',
  description:
    'Descubra a Bona Petit, casa dos doces mais requintados e inovadores de São José dos Campos, comandada pelo chef e fundador, um mestre na arte da confeitaria. Embarque na sua jornada culinária, explore o revolucionário Método Milenar de Confeitaria e descubra a BP Class, nossa plataforma de confeitaria online que educa milhares de alunos ao redor do mundo. Independentemente de onde você esteja na sua aventura culinária, estamos aqui para apoiá-lo. Bem-vindo à Bona Petit, onde a confeitaria encontra a paixão e a inovação.',
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

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
