import { Head } from 'next/document';
import Image from 'next/image';

import image from '../../public/logo-black.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Head>
        <title>Bona Petit - Site em Manutenção</title>
      </Head>
      <Image src={image} alt="Bona Petit" className="w-1/3" />
      <h1 className="text-[48px] font-medium mb-4">Site em manutenção</h1>
      <p className="text-gray-950/80 w-1/3 text-center">
        Desculpe-nos pelo transtorno, o site está em manutenção no momento, mas
        estará de volta em breve.
      </p>
    </main>
  );
}
