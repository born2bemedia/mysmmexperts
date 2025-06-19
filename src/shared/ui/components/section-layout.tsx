'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/styles';

export const SectionLayout = ({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section
    id={id}
    className={cn(
      'border-primary ml-[247px] border-l py-20 pr-[165px] pl-3 max-md:ml-5 max-md:py-[60px] max-md:pr-5 max-md:pb-0',
      className,
    )}
  >
    {children}
  </section>
);
