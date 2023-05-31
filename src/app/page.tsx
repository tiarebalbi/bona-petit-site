import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bona Petit: Página Inícial',
  description:
    'Descubra a Bona Petit, casa dos doces mais requintados e inovadores de São José dos Campos, comandada pelo chef e fundador, um mestre na arte da confeitaria. Embarque na sua jornada culinária, explore o revolucionário Método Milenar de Confeitaria e descubra a BP Class, nossa plataforma de confeitaria online que educa milhares de alunos ao redor do mundo. Independentemente de onde você esteja na sua aventura culinária, estamos aqui para apoiá-lo. Bem-vindo à Bona Petit, onde a confeitaria encontra a paixão e a inovação.',
};

export default async function Home() {
  'use server';

  return <main className="py-[60px]">Hi there Demo</main>;
}
