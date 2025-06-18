'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/styles';

export const Chip = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      'text-text relative w-max rounded-full border border-black bg-transparent px-4 py-2.5 text-base',
      className,
    )}
  >
    {children}
  </span>
);
