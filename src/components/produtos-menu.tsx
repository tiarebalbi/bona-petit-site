import classNames from 'classnames';

import Image from 'next/image';

import HeadingTitle from '@/components/heading-title';

import { playfairDisplay } from '@/utils/fonts';

import style from './produtos-menu.module.css';

const ProdutosMenu = () => {
  const menus = [
    'Padaria',
    'Confeitaria',
    'Folhados',
    'Pizza in pala',
    'Macarons',
    'Bebidas',
  ];

  const produto = {
    name: 'PÃO DE CURCUMA COM GORGONZOLA',
    description:
      'Curcuma,(trigo de grano duro), água, sal, levain e queijo gorgonzola. 100% fermentação natural.',
    img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/489074f3-1550-4831-9407-bd18fb89c272/202104011226_y4MQ_.jpeg',
    preco: 23.2,
    id: 1,
  };
  const produtos = [produto, produto, produto, produto, produto, produto];

  return (
    <div className="min-h-[400px] bg-primary-950 w-full py-12 text-primary-200">
      <div className="container mx-auto max-w-7xl">
        <HeadingTitle
          title="Menu"
          slogan="Boulangerie & Pâtisserie"
          mask="Nossos Produto"
          theme="dark"
        />
        <div className="mb-12">
          <ul className="hidden divide-primary/50 divide-x lg:flex items-center justify-center text-lg break-all">
            {menus.map((it) => (
              <li
                key={it}
                className={classNames(
                  'px-4 hover:text-primary-50 cursor-pointer',
                  playfairDisplay.className,
                  {
                    'text-white': false,
                  }
                )}
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 px-12 lg:px-0">
          {produtos.map((it, index) => (
            <div
              className={classNames(style.menuItem, 'group')}
              key={`${it.id}-${index}`}
            >
              <div>
                <div
                  className={classNames(
                    style.image,
                    'ring-offset-primary-950 ring-primary group-hover:ring-offset-primary-100'
                  )}
                >
                  <Image
                    src="/produto-1.jpeg"
                    alt={it.name}
                    className="bg-contain w-24 h-24"
                    fill
                  />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start lg:items-center mb-2 font-medium flex-col lg:flex-row">
                  <div className="text-primary-200 group-hover:text-primary-950">
                    {it.name}
                  </div>
                  <div className="text-primary-50 group-hover:text-primary-700">
                    R$ ${it.preco}
                  </div>
                </div>
                <p className="prose-sm text-primary-50 group-hover:text-primary-700">
                  {it.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="py-4 flex items-center justify-center">
          <a
            className={classNames(
              playfairDisplay.className,
              'text-lg font-medium text-primary-300 hover:text-primary-100 cursor-pointer pb-2 border-b-primary-300 italic text-center'
            )}
          >
            Veja Menu Completo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProdutosMenu;
