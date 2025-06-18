'use client';

import Image from 'next/image';
import Link from 'next/link';

export const InstUrl = () => (
  <Link href="https://www.instagram.com/">
    <Image
      src="/images/insta.png"
      alt="inst"
      width={64}
      height={64}
      unoptimized
    />
  </Link>
);
