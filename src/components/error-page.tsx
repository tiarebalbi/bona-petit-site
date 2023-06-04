import classNames from 'classnames';

import React from 'react';

import Link from 'next/link';

import { playfairDisplay } from '@/utils/fonts';

import style from './error-page.module.css';

export interface ErrorPageProps {
  title: string;
  message: string;
  redirectUrl: string;
  btnText: string;
  errorCode: number;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode,
  btnText,
  message,
  redirectUrl,
  title,
}) => (
  <div id={`error-page-${errorCode}`} className={style.root}>
    <div className={style.details}>
      <h1
        className={classNames(
          playfairDisplay.className,
          'text-[130px] text-primary'
        )}
      >
        {errorCode}
      </h1>
      <h2
        className={classNames(
          playfairDisplay.className,
          'text-[60px] text-white mb-6'
        )}
      >
        {title}
      </h2>
      <p className="container mx-auto max-w-4xl text-center mb-8">{message}</p>
      <Link
        className="px-4 py-2 bg-transparent text-primary hover:border-primary-300 hover:text-primary-300 border-primary border"
        href={redirectUrl}
      >
        {btnText}
      </Link>
    </div>
    <div className={style.mask} />
    <div className={style.backgroundImage} />
  </div>
);

export default ErrorPage;
