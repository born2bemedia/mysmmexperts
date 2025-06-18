'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { InstUrl } from '@/shared/ui/components/inst-url';
import { Logo } from '@/shared/ui/components/logo';
import { OrderBtn } from '@/shared/ui/components/order-btn';
import { CloseIcon } from '@/shared/ui/icons/close';
import { ThreeLinesIcon } from '@/shared/ui/icons/three-lines';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <OpenIcon onClick={() => setOpen(true)} />
      </Trigger>
      <Portal>
        <Content className="fixed bottom-0 left-0 z-[999] h-screen w-screen animate-[menuOpen_0.3s_ease-out_forwards] overflow-y-auto">
          <Title />
          <Description asChild>
            <section className="relative flex h-screen flex-col justify-between px-8 pt-[50px] pb-5">
              <section className="flex flex-col gap-[50px]">
                <section className="flex items-center justify-between">
                  <Logo />
                  <button onClick={() => setOpen(false)}>
                    <CloseIcon />
                  </button>
                </section>
                <section className="flex flex-col gap-8">
                  <Link
                    className="text-xl"
                    href="#services"
                    onClick={() => setOpen(false)}
                  >
                    Наші послуги
                  </Link>
                  <Link
                    className="text-xl"
                    href="#about-us"
                    onClick={() => setOpen(false)}
                  >
                    Про нас
                  </Link>
                  <Link
                    className="text-xl"
                    href="#how-we-work"
                    onClick={() => setOpen(false)}
                  >
                    Як ми працюємо
                  </Link>
                  <Link
                    className="text-xl"
                    href="#contact-us"
                    onClick={() => setOpen(false)}
                  >
                    Контакти
                  </Link>
                </section>
                <Divider />
                <OrderBtn />
              </section>
              <section className="flex items-center justify-between">
                <InstUrl />
                <Link href="mailto:gykovaon@gmail.com">
                  <Text size="sm">gykovaon@gmail.com</Text>
                </Link>
              </section>
              <Image
                src="/images/bg-burger.jpg"
                alt="burger-menu"
                fill
                className="absolute inset-0 -z-10 object-cover"
              />
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const OpenIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    className="hidden h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#F6F6F6] max-md:flex"
    onClick={onClick}
  >
    <ThreeLinesIcon />
  </button>
);
