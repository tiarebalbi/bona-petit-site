import { Metadata } from 'next';

import ErrorPage from '@/components/error-page';

export const metadata: Metadata = {
  title: 'Bona Petit: Ops! Não encontramos essa página.',
};

const PageNotFound = () => (
  <ErrorPage
    title="Ops! Não encontramos essa página."
    message="Pedimos desculpas, mas a página que você está procurando não existe ou foi movida. Que tal voltar à nossa página inicial e começar de novo?"
    redirectUrl="/"
    btnText="Voltar Página Inícial"
    errorCode={404}
  />
);

export default PageNotFound;
