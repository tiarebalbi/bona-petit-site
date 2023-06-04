import classNames from 'classnames';

import React from 'react';

import { TrophyIcon } from '@heroicons/react/24/outline';

import { playfairDisplay } from '@/utils/fonts';

export interface HeadingTitleProps {
  slogan: string;
  title: string;
  mask: string;
  children?: React.ReactNode;
  theme?: 'dark' | 'light';
}

const HeadingTitle: React.FC<HeadingTitleProps> = ({
  children,
  title,
  mask,
  slogan,
  theme,
}) => (
  <>
    <div className="relative w-full flex-col h-[140px]">
      <div className="absolute z-20 top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col">
        <h2
          className={classNames(
            'uppercase text-sm tracking-wider mb-2 select-none text-center lg:text-left',
            {
              'text-primary': theme === 'light',
              'text-primary-200': theme === 'dark',
            }
          )}
        >
          {slogan}
        </h2>
        <h1
          className={classNames(
            playfairDisplay.className,
            'text-[50px] text-center lg:text-left',
            {
              'text-primary-950': theme === 'light',
              'text-primary-50': theme === 'dark',
            }
          )}
        >
          {title}
        </h1>
      </div>
      <div className="absolute z-10 flex items-center justify-center h-full w-full">
        <h3
          className={classNames(
            playfairDisplay.className,
            'z-10 italic text-[80px] lg:text-[130px] select-none text-center lg:text-left',
            {
              'text-primary-950/5': theme === 'light',
              'text-primary-100/5': theme === 'dark',
            }
          )}
        >
          {mask}
        </h3>
      </div>
    </div>
    <div className="mt-12 lg:mt-0 px-12 lg:px-0 mb-12 w-full flex items-center justify-center relative">
      <div
        className={classNames('px-8 z-30', {
          'bg-primary-50': theme === 'light',
          'bg-primary-950': theme === 'dark',
        })}
      >
        {children}
      </div>
      <div
        className={classNames(
          'container mx-auto max-w-7xl border-t z-10 absolute',
          {
            'border-primary-200/80': theme === 'light',
            'border-y-primary-800': theme === 'dark',
          }
        )}
      />
    </div>
  </>
);

HeadingTitle.defaultProps = {
  children: <TrophyIcon width={24} className="text-primary" />,
  theme: 'light',
};

export default HeadingTitle;
