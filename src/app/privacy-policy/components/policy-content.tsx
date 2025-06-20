'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PolicyContent = () => {
  return (
    <section className="mx-auto flex w-[556px] flex-col items-center justify-center gap-6 pt-[60px] pb-[69px] text-center max-md:w-full max-md:px-5 max-md:pt-10">
      <Title>Політика конфіденційності</Title>
      <Text>
        Ми збираємо мінімальні персональні дані (ім&apos;я, телефон, email)
        через контактну форму для обробки запитів клієнтів. Дані не передаються
        третім особам без вашої згоди. Ви маєте право на виправлення або
        видалення інформації, звернувшись за адресою:{' '}
        <Link className="text-[#6F6FF9]" href="mailto:contact@mysmmexperts.com">
          contact@mysmmexperts.com
        </Link>
        .
      </Text>
    </section>
  );
};
