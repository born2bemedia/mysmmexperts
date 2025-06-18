'use client';

import Image from 'next/image';
import Link from 'next/link';

import { BurgerMenu } from './burger-menu';

export const Header = () => {
  return (
    <header className="top-0 z-50 flex items-center justify-between px-[165px] py-8 max-md:sticky max-md:px-5 max-md:py-4">
      <Image src="/full-logo.svg" alt="logo" width={130} height={28} />
      <section className="flex items-center gap-16 max-md:hidden">
        <Link href="#">Наші послуги</Link>
        <Link href="#">Про нас</Link>
        <Link href="#">Як ми працюємо</Link>
        <Link href="#">Контакти</Link>
      </section>
      <BurgerMenu />
    </header>
  );
};
