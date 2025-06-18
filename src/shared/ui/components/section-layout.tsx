'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/styles';

export const SectionLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={cn(
      'border-primary ml-[247px] border-l py-20 pr-[165px] pl-3 max-md:ml-5 max-md:py-[60px] max-md:pr-5',
      className,
    )}
  >
    {children}
  </section>
);
