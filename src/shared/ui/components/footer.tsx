'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Title } from '@/shared/ui/kit/title';

import { Text } from '../kit/text';
import { InstUrl } from './inst-url';

export const Footer = () => {
  return (
    <footer className="relative mx-[165px] flex h-[447px] flex-col gap-[36px] overflow-hidden rounded-4xl px-10 pt-[26px] pb-10 max-md:mx-5 max-md:mt-8 max-md:h-full max-md:px-3.5">
      <section className="z-20 flex items-start justify-between opacity-100 max-md:flex-col max-md:items-start max-md:gap-6 max-md:text-start">
        <section className="flex items-start justify-between">
          <Image src="/full-logo.svg" alt="logo" width={130} height={27} />
        </section>
        <Title
          size="2xl"
          weight={700}
          className="w-[250px] text-center max-md:text-left"
        >
          Працюємо онлайн по всій Україні
        </Title>
        <section className="flex flex-col gap-3">
          <Link
            href="mailto:contact@mysmmexperts.com"
            className="flex flex-col"
          >
            <Text weight={600}>Email</Text>
            <Text>contact@mysmmexperts.com</Text>
          </Link>
          <Link href="tel:+380976930563" className="flex flex-col">
            <Text weight={600}>Телефон</Text>
            <Text>+380976930563</Text>
          </Link>
        </section>
      </section>
      <Title
        size="7xl"
        className="text-center text-[110px] leading-[120%] tracking-[14.3px] max-md:text-left max-md:text-[64px] max-md:tracking-tight"
      >
        My SMM expert
      </Title>
      <section className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-6">
        <InstUrl />
        <Text>
          © {new Date().getFullYear()} SMM expert. Усі права захищено.
        </Text>
      </section>
      <div className="absolute top-[-250%] right-[-50%] z-0 h-[976px] w-[976px] rounded-[976px] bg-[#FF75C7] blur-[350px] max-md:top-[-160%] max-md:right-[-100%]" />
      <div className="bg-primary absolute bottom-[-250%] left-[-20%] z-0 h-[1080px] w-[1056px] rounded-[1080px] blur-[350px] max-md:bottom-[-170%]" />
      <div className="absolute top-[-250%] left-[-70%] z-0 h-[976px] w-[976px] rounded-[976px] bg-[#FF9019] blur-[350px] max-md:top-[-160%]" />
    </footer>
  );
};
