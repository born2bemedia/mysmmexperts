'use client';

import Link from 'next/link';

import { Button } from '../kit/button';
import { NextSymbol } from './next-symbol';

export const OrderBtn = () => (
  <Link href="#contact-us">
    <Button>
      <NextSymbol />
      Замовити послугу
    </Button>
  </Link>
);
