'use client';

import classNames from 'classnames';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Dialog } from '@headlessui/react';

import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className="fixed top-0 w-full z-30 bg-primary-950/90"
      aria-label="Menu Bar"
    >
      <nav className="px-12 lg:px-0 h-[90px] container mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Bona Petit</span>
            <span>Logo here</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={classNames(
              'text-sm transition-all duration-200 font-semibold leading-6',
              {
                ' text-primary-300': pathname === '/',
              }
            )}
          >
            Página Inícial
          </Link>
          <Link
            href="/sobre-nos"
            className={classNames(
              'text-sm transition-all duration-200 font-semibold leading-6',
              {
                ' text-primary-300': pathname === '/sobre-nos',
              }
            )}
          >
            Sobre Nós
          </Link>
          <Link
            href="/produtos"
            className={classNames(
              'text-sm transition-all duration-200 font-semibold leading-6',
              {
                ' text-primary-300': pathname === '/produtos',
              }
            )}
          >
            Produtos
          </Link>
          <Link
            href="/cursos"
            className={classNames(
              'text-sm transition-all duration-200 font-semibold leading-6',
              {
                ' text-primary-300': pathname === '/cursos',
              }
            )}
          >
            Cursos
          </Link>
          <Link
            href="/fale-conosco"
            className={classNames(
              'text-sm transition-all duration-200 font-semibold leading-6',
              {
                ' text-primary-300': pathname === '/fale-conosco',
              }
            )}
          >
            Fale Conosco
          </Link>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 relative">
              <ShoppingCartIcon width={24} />
              <span className="absolute w-4 h-4 bg-primary-600 rounded-full flex items-center justify-center text-[10px] -right-2 -top-2">
                0
              </span>
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed z-[120] inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-950 text-primary-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Bona Petit</span>
              <div>Logo aqui</div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar Menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-primary-200/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className={classNames(
                    '-mx-3 block transition-all duration-200 rounded-lg px-3 py-2 text-base font-semibold leading-7',
                    {
                      ' text-primary-300': pathname === '/',
                    }
                  )}
                >
                  Página Inícial
                </Link>
                <Link
                  href="/sobre-nos"
                  className={classNames(
                    '-mx-3 block transition-all duration-200 rounded-lg px-3 py-2 text-base font-semibold leading-7',
                    {
                      ' text-primary-300': pathname === '/sobre-nos',
                    }
                  )}
                >
                  Sobre Nós
                </Link>
                <Link
                  href="/produtos"
                  className={classNames(
                    '-mx-3 block transition-all duration-200 rounded-lg px-3 py-2 text-base font-semibold leading-7',
                    {
                      ' text-primary-300': pathname === '/produtos',
                    }
                  )}
                >
                  Produtos
                </Link>
                <Link
                  href="/cursos"
                  className={classNames(
                    '-mx-3 block transition-all duration-200 rounded-lg px-3 py-2 text-base font-semibold leading-7',
                    {
                      ' text-primary-300': pathname === '/cursos',
                    }
                  )}
                >
                  Cursos
                </Link>
                <Link
                  href="/fale-conosco"
                  className={classNames(
                    '-mx-3 block transition-all duration-200 rounded-lg px-3 py-2 text-base font-semibold leading-7',
                    {
                      ' text-primary-300': pathname === '/fale-conosco',
                    }
                  )}
                >
                  Fale Conosco
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                >
                  <ShoppingCartIcon width={24} />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Menu;