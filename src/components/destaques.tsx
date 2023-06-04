import classNames from 'classnames';

import HeadingTitle from '@/components/heading-title';

import { playfairDisplay } from '@/utils/fonts';

import style from './destaques.module.css';

const Destaques = () => {
  const data = [
    {
      video: '/video-1.mp4',
      name: 'Nome do Produto 1',
      category: 'Confeitaria',
      description:
        'Lorem nisl miss nestibulum nec odio duru the aucan ula orci varius natoque enatau manis dis arturient monte miss morbine.',
      id: '1',
      style: style.produto1,
    },
    {
      video: '/video-2.mp4',
      name: 'Nome do Produto 2',
      category: 'Confeitaria',
      description:
        'Lorem nisl miss nestibulum nec odio duru the aucan ula orci varius natoque enatau manis dis arturient monte miss morbine.',
      id: '2',
      style: style.produto2,
    },
    {
      video: '/video-3.mp4',
      name: 'Nome do Produto 3',
      category: 'Confeitaria',
      description:
        'Lorem nisl miss nestibulum nec odio duru the aucan ula orci varius natoque enatau manis dis arturient monte miss morbine.',
      id: '3',
      style: style.produto3,
    },
  ];

  return (
    <div id="destaques" className={style.root}>
      <div className="relative min-h-[600px] z-30 container mx-auto max-w-7xl pb-[50px]">
        <HeadingTitle title="Lançamentos" slogan="Nossos Produto" mask="Menu" />
        <div className="grid grid-cols-1 px-12 lg:px-0 lg:grid-cols-3 gap-[50px]">
          {data.map((it) => (
            <div
              key={it.id}
              className={classNames(style.image, it.style, 'group')}
            >
              <div className="group-hover:text-white flex items-center justify-end flex-col text-center p-12 pb-6 relative z-50 h-full">
                <h2 className="hidden group-hover:block uppercase text-primary-200 prose-sm">
                  {it.category}
                </h2>
                <h1
                  className={classNames(
                    playfairDisplay.className,
                    'uppercase text-primary-950 group-hover:text-primary-100 prose-xl pb-2 border-b border-primary-400 mb-2'
                  )}
                >
                  {it.name}
                </h1>
                <p className="hidden group-hover:block prose-sm">
                  {it.description}
                </p>
                <button
                  className={classNames(
                    playfairDisplay.className,
                    'italic text-[#ccb275] text-lg mt-4 hidden group-hover:block'
                  )}
                >
                  Veja Mais
                </button>
              </div>
              <div
                className={classNames(
                  style.mask,
                  'group-hover:bg-primary-950/70'
                )}
              />
              <video
                className="hidden group-hover:block absolute top-0 z-0 bottom-0 left-0 right-0"
                autoPlay
                muted
                loop
                playsInline
                src={it.video}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bg-primary-950 z-10 bottom-0 left-0 right-0 h-[50%] border-b border-y-primary-900 " />
    </div>
  );
};

export default Destaques;
