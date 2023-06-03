import classNames from 'classnames';

import React from 'react';

import { Playfair_Display } from 'next/font/google';

import { TrophyIcon } from '@heroicons/react/24/outline';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic', 'normal'],
});

export interface HeadingTitleProps {
  children?: React.ReactNode;
  theme?: 'dark' | 'light';
}

const HeadingTitle: React.FC<HeadingTitleProps> = ({ children }) => (
  <>
    <div className="relative w-full flex-col h-[140px]">
      <div className="absolute z-20 top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col">
        <h2 className="text-primary text-sm tracking-wider mb-2 select-none">
          DESTAQUE
        </h2>
        <h1
          className={classNames(
            playfairDisplay.className,
            'text-primary-950 text-[50px]'
          )}
        >
          NOSSOS PRODUTOS
        </h1>
      </div>
      <div className="absolute z-10 flex items-center justify-center h-full w-full">
        <h3
          className={classNames(
            playfairDisplay.className,
            'z-10 italic text-[130px] text-primary-950/5 select-none'
          )}
        >
          Menu
        </h3>
      </div>
    </div>
    <div className="mb-12 w-full flex items-center justify-center relative">
      <div className="bg-primary-50 px-8 z-30">{children}</div>
      <div className=" border-t border-primary-200/80 z-10 absolute w-full" />
    </div>
  </>
);

HeadingTitle.defaultProps = {
  children: <TrophyIcon width={24} className="text-primary" />,
  theme: 'light',
};

export default HeadingTitle;
