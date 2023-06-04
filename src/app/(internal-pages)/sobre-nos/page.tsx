import React from 'react';

import { Metadata } from 'next';

import style from '@/app/styles.module.css';

import Menu from '@/components/menu';
import SobreNos from '@/components/sobre-nos';

import SobreNosBanner from './_components/sobre-nos-banner';

export const metadata: Metadata = {
  title: 'Bona Petit: Sobre Nós',
};

export const revalidate = false;

export default async function SobreNosPage() {
  'use server';

  return (
    <>
      <header className={style.header}>
        <Menu />
        <div className={style.banner}>
          <SobreNosBanner />
        </div>
      </header>
      <main className={style.main}>
        <SobreNos />
      </main>
    </>
  );
}
