'use client';

import classNames from 'classnames';

import { Playfair_Display } from 'next/font/google';

import { PhoneIcon } from '@heroicons/react/24/outline';

import style from './home-banner.module.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
});

const HomePageBanner = () => (
  <div className={classNames(style.banner)}>
    <div className={style.content}>
      <h1
        className={classNames(
          playfairDisplay.className,
          'mb-1 text-primary-50 text-[50px] lg:text-[70px] tracking-tight text-center'
        )}
      >
        Saboreie a Excelência
      </h1>
      <p
        className={classNames(
          playfairDisplay.className,
          'text-[#C19D60] text-lg lg:text-xl mb-8 text-center px-4 lg:px-0'
        )}
      >
        Na Bona Petit, harmonizamos técnicas tradicionais e inovação para criar
        doces requintados e inesquecíveis.
      </p>
      <a href="#" className={style.btn}>
        Explore Nossos Produtos
      </a>
    </div>
    <div className={style.phone}>
      <div className="border border-primary text-white rounded-full p-2">
        <PhoneIcon width={24} />
      </div>
      <div>
        <span className="text-primary-400 uppercase text-[11px]">
          FALE CONOSCO
        </span>
        <a
          target="_blank"
          href="tel://+5512992495995"
          className="text-lg text-white font-medium block"
        >
          +55 12 99249-5995
        </a>
      </div>
    </div>
    <div className={style.mask} />
  </div>
);

export default HomePageBanner;
