import classNames from 'classnames';

import { Playfair_Display } from 'next/font/google';

import style from './sobre-nos.module.css';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const SobreNos = () => {
  return (
    <div className={style.sobreNos} id="sobre-nos">
      <h2 className={style.slogan}>Bona Petit</h2>
      <h1 className={classNames(style.title, playfairDisplay.className)}>
        Sobre Nós
      </h1>
      <div className={style.content}>
        <div className="lg:prose text-primary-600 text-center lg:text-left px-12 lg:px-0">
          <p>
            A Bona Petit não é apenas uma confeitaria; é um emblema de
            excelência na arte de criar doces deliciosos e únicos. Localizada em
            São José dos Campos, nos dedicamos incessantemente à qualidade e
            inovação, trazendo alegria através de cada doce que produzimos.
            Nosso revolucionário Método Milenar de Confeitaria eleva o ofício a
            novos patamares, fusionando técnicas tradicionais com toques
            modernos e criativos.
          </p>
          <p>
            Nossas viagens à Itália, Espanha e França proporcionaram a
            descoberta de receitas irresistíveis, que reproduzimos em grande
            escala sem comprometer a excelência. Cada detalhe é cuidadosamente
            considerado, refletindo-se em cada doce que servimos, uma prova de
            nosso amor e paixão pela confeitaria.
          </p>
        </div>
        <div className="hidden w-full lg:flex flex-row space-x-12 pl-[40px]">
          <div className={classNames(style.imageContainer, style.image1)} />
          <div className={classNames(style.imageContainer, style.image2)} />
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
