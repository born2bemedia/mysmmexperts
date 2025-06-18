'use client';

import type { ReactNode } from 'react';
import { easeOut, motion, type Variants } from 'framer-motion';

const getVariant = (variant: string, duration = 0.5): Variants => {
  const makeVariant = (
    initial: { opacity: number; x?: number; y?: number },
    final: { opacity: number; x?: number; y?: number },
  ) => ({
    hidden: initial,
    visible: (custom = 0) => ({
      ...final,
      transition: {
        duration,
        delay: custom * duration + 0.3,
        ease: easeOut,
      },
    }),
  });

  switch (variant) {
    case 'top':
      return makeVariant({ opacity: 0, y: -50 }, { opacity: 1, y: 0 });
    case 'bottom':
      return makeVariant({ opacity: 0, y: 12 }, { opacity: 1, y: 0 });
    case 'left':
      return makeVariant({ opacity: 0, x: -50 }, { opacity: 1, x: 0 });
    case 'right':
      return makeVariant({ opacity: 0, x: 50 }, { opacity: 1, x: 0 });
    default:
      return makeVariant({ opacity: 0, y: -50 }, { opacity: 1, y: 0 });
  }
};

export const FadeIn = ({
  children,
  className,
  variant = 'bottom',
  duration = 0.5,
  custom = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: 'top' | 'left' | 'right' | 'bottom';
  duration?: number;
  custom?: number;
}) => {
  const variants = getVariant(variant, duration);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={custom}
    >
      {children}
    </motion.div>
  );
};
