'use client';

import Link from 'next/link';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { InstUrl } from '@/shared/ui/components/inst-url';
import { OrderBtn } from '@/shared/ui/components/order-btn';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <section className="relative mx-[165px] mt-9 flex h-[671px] flex-col justify-between overflow-hidden rounded-4xl px-10 pt-[181px] pb-10 max-md:mx-5 max-md:mt-8 max-md:px-3.5 max-md:pt-[124px]">
      <FadeIn className="z-20 mx-auto flex w-[70%] flex-col items-center justify-center gap-11 max-md:w-full">
        <section className="flex flex-col items-center justify-between gap-4 text-center">
          <Title size="4xl">
            Створюємо бренд, якому довіряють:
            <br />  залучаємо, прогріваємо, продаємо
          </Title>
          <Text>
            SMM — це не про миттєві продажі, а про довіру, впізнаваність і
            підготовку аудиторії. Клієнти не купують у незнайомців. Ми
            допомагаємо зробити ваш бренд знайомим і бажаним, створюючи довіру,
            яка веде до стабільного прибутку.
          </Text>
        </section>
        <OrderBtn />
      </FadeIn>
      <FadeIn
        duration={1}
        custom={1}
        className="flex items-center justify-between max-md:hidden"
      >
        <Link href="mailto:gykovaon@gmail.com">
          <Chip className="z-20">gykovaon@gmail.com</Chip>
        </Link>
        <InstUrl />
      </FadeIn>
      <div className="absolute top-[-100%] right-[-50%] z-0 h-[976px] w-[976px] rounded-[976px] bg-[#FF75C7] blur-[350px] max-md:right-[100%]" />
      <div className="bg-primary absolute bottom-[-160%] left-[-20%] z-0 h-[1080px] w-[1056px] rounded-[1080px] blur-[350px]" />
      <div className="absolute top-[-150%] left-[-70%] z-0 h-[976px] w-[976px] rounded-[976px] bg-[#FF9019] blur-[350px]" />
    </section>
  );
};
