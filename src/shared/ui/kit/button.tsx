'use client';

import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/styles';

export const Button = ({
  className,
  children,
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      'bg-primary border-primary hover:text-text flex w-max cursor-pointer items-center gap-1 rounded-full border py-1 pr-5 pl-1 text-base text-white transition duration-300 ease-in-out hover:bg-transparent',
      className,
    )}
    {...args}
  >
    {children}
  </button>
);
