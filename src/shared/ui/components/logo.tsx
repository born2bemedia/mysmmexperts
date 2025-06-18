'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => (
  <Link href="/">
    <Image src="/full-logo.svg" alt="logo" width={130} height={28} />
  </Link>
);
