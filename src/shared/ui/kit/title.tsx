'use client';

import type { ElementType, JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';

const titleVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    color: {
      primary: 'text-text',
      secondary: 'text-text-secondary',
    },
    size: {
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-[42px] max-md:text-[30px]',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
    },
    weight: {
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: '4xl',
    weight: 700,
    color: 'primary',
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  className,
  color,
  weight,
  size,
  uppercase = false,
  as = 'h1',
}: {
  children: ReactNode;
  className?: string;
  uppercase?: boolean;
  as?: ElementType;
} & TitleVariants) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        titleVariants({ weight, size, color }),
        uppercase && 'uppercase',
        'leading-[120%]',
        className,
      )}
    >
      {children}
    </Tag>
  );
};
