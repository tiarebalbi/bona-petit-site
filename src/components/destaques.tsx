import classNames from 'classnames';

import HeadingTitle from '@/components/heading-title';

import style from './destaques.module.css';

const Destaques = () => {
  return (
    <div id="destaques" className={style.root}>
      <div className="relative min-h-[600px] z-30 container mx-auto max-w-7xl pb-[50px]">
        <HeadingTitle />
        <div className="grid grid-cols-1 px-12 lg:px-0 lg:grid-cols-3 gap-[50px]">
          <div className={classNames(style.image, style.produto1, 'group')}>
            <div
              className={classNames(
                style.mask,
                'group-hover:bg-primary-950/60'
              )}
            />
          </div>
          <div className={classNames(style.image, style.produto2, 'group')}>
            <div
              className={classNames(
                style.mask,
                'group-hover:bg-primary-950/60'
              )}
            />
          </div>
          <div className={classNames(style.image, style.produto3, 'group')}>
            <div
              className={classNames(
                style.mask,
                'group-hover:bg-primary-950/60'
              )}
            />
          </div>
        </div>
      </div>
      <div className="absolute bg-primary-950 z-10 bottom-0 left-0 right-0 h-[50%] border-b border-y-primary-900 " />
    </div>
  );
};

export default Destaques;
