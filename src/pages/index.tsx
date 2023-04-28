import Head from 'next/head';
import Image from 'next/image';

import React from 'react';

import image from '../../public/logo-black.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 sm:p-24">
      <Head>
        <title>Bona Petit - Site em Manutenção</title>
      </Head>
      <Image
        src={image}
        alt="Bona Petit"
        className="w-[90vw] md:w-[500px] mb-12"
      />
      <h1 className="text-[48px] font-medium mb-4 text-center">
        Site em manutenção
      </h1>
      <p className="text-gray-950/80 w-[80vw] md:w-2/3 lg:w-1/3 text-center">
        Desculpe-nos pelo transtorno, o site está em manutenção no momento, mas
        estará de volta em breve.
      </p>
    </main>
  );
}
