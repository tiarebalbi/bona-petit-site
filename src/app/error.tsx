'use client';

import { Metadata } from 'next';

import ErrorPage from '@/components/error-page';

export const metadata: Metadata = {
  title: 'Bona Petit: Oh não! Algo deu errado.',
};

const InternalError = () => (
  <ErrorPage
    title="Oh não! Algo deu errado."
    message="Nos desculpe, parece que estamos passando por problemas técnicos no momento. Nossa equipe já está trabalhando para resolver. Por favor, tente novamente mais tarde."
    redirectUrl="/"
    btnText="Voltar Página Inícial"
    errorCode={500}
  />
);

export default InternalError;
