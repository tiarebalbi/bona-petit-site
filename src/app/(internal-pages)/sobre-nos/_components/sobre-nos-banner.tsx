import classNames from 'classnames';

import { playfairDisplay } from '@/utils/fonts';

import style from './sobre-nos-banner.module.css';

const SobreNosBanner = () => (
  <div className={classNames(style.banner)}>
    <div className={style.content}>
      <p
        className={classNames(
          playfairDisplay.className,
          'text-[#C19D60] text-lg lg:text-xl text-center px-4 lg:px-0'
        )}
      >
        Nossa História
      </p>
      <h1
        className={classNames(
          playfairDisplay.className,
          'mb-1 text-primary-50 text-[50px] lg:text-[70px] tracking-tight text-center'
        )}
      >
        A Bona Petit
      </h1>
    </div>
    <div className={style.mask} />
  </div>
);

export default SobreNosBanner;
