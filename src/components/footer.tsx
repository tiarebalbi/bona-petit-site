import classNames from 'classnames';

import { Playfair_Display } from 'next/font/google';

import Newsletter from '@/components/newsletter';

import style from './footer.module.css';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const Footer = () => (
  <footer className={style.main}>
    <div className={style.footerContainer}>
      <div className={style.faleConosco}>
        <div>Fale Conosco</div>
        <div>Form</div>
      </div>
      <div className={style.parceiros} />
      <div className={style.overlay} />
    </div>
    <div className="divide-y divide-primary-900">
      <div className="bg-primary-950 w-full text-primary-100 py-[60px]">
        <div className="container mx-auto max-w-7xl h-full grid grid-cols-1 lg:grid-cols-3 px-12 lg:px-0 lg:gap-6 space-y-12 lg:space-y-0">
          <div>
            <h1 className={classNames(playfairDisplay.className, style.title)}>
              Sobre Nós
            </h1>
            <p className="prose-md text-primary-100">
              Bona Petit é a escolha de primeira linha para doces requintados e
              inovadores em São José dos Campos. Fundada e comandada por um chef
              excepcional, a Bona Petit destaca-se pela sua apaixonada abordagem
              à confeitaria, combinando técnicas tradicionais com inovações
              modernas. Através do nosso revolucionário Método Milenar de
              Confeitaria e da nossa plataforma de confeitaria online, a BP
              Class, estamos comprometidos em compartilhar nossa paixão e
              conhecimento com os amantes de doces ao redor do mundo. Bem-vindo
              à <strong className="text-primary-300">Bona Petit</strong>, onde
              cada doce é uma obra de arte.
            </p>
          </div>
          <div>
            <h1 className={classNames(playfairDisplay.className, style.title)}>
              Informações de Contato
            </h1>
            <ul className="list-disc list-inside space-y-8">
              <li>
                Avenida São João, 2200, Shopping Colinas, São José dos Campos,
                SP.
              </li>
              <li>
                Aquarius Open Mall, Av. Comendador Vicente de Paulo Penido, 373,
                Parque Residencial Aquarius | São José dos Campos, SP
              </li>
            </ul>
          </div>
          <div>
            <h1 className={classNames(playfairDisplay.className, style.title)}>
              Cadastra-se
            </h1>
            <p className="prose-md">
              Quer ser o primeiro a saber quando lançamos uma nova receita, um
              método de confeitaria ou atualizações na plataforma? Inscreva-se
              agora e enviaremos a você uma notificação por e-mail. Fique à
              frente e descubra as novidades da Bona Petit antes de todos!
            </p>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="bg-primary-950 w-full h-[80px] text-primary-500 divide-y divide-primary-200">
        <div className="container mx-auto max-w-7xl flex items-center h-full">
          Todos os direitos reservados.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;