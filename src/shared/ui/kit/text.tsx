'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';

const textVariants = cva('transition duration-300 ease-in-out leading-[150%]', {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    color: {
      primary: 'text-text',
      secondary: 'text-text-secondary',
      danger: 'text-danger',
    },
    weight: {
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 400,
    color: 'primary',
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export const Text = ({
  children,
  className,
  color,
  weight,
  size,
  capitalize = false,
  uppercase = false,
}: {
  children: ReactNode;
  className?: string;
  capitalize?: boolean;
  uppercase?: boolean;
} & TextVariants) => {
  return (
    <p
      className={cn(
        textVariants({ color, weight, size }),
        capitalize && 'capitalize',
        uppercase && 'uppercase',
        className,
      )}
    >
      {children}
    </p>
  );
};
