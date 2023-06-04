import React from 'react';

import { Metadata } from 'next';

import style from '@/app/styles.module.css';

import Destaques from '@/components/destaques';
import HomeBanner from '@/components/home-banner';
import Menu from '@/components/menu';
import ProdutosMenu from '@/components/produtos-menu';
import SobreNos from '@/components/sobre-nos';

import { preload } from '@/lib/user-feedback';

export const metadata: Metadata = {
  title: 'Bona Petit: Página Inícial',
};

export const revalidate = 120;

export default async function Home() {
  'use server';

  // Initializing user feedbacks
  preload();

  return (
    <>
      <header className={style.header}>
        <Menu />
        <div className={style.banner}>
          <HomeBanner />
        </div>
      </header>
      <main className={style.main}>
        <Destaques />
        <ProdutosMenu />
        <SobreNos />
      </main>
    </>
  );
}
