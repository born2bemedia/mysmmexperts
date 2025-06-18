'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { SectionLayout } from '@/shared/ui/components/section-layout';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const services = [
  {
    title: 'Створення та оформлення профілів у соцмережах',
    imgUrl: '/images/services/create-socials.svg',
  },
  {
    title: 'Розробка індивідуальної SMM-стратегії',
    imgUrl: '/images/services/smm.svg',
  },
  {
    title: 'Написання та візуальне оформлення контенту',
    imgUrl: '/images/services/content.svg',
  },
  {
    title: 'Таргетована реклама у Facebook/Instagram',
    imgUrl: '/images/services/ad.svg',
  },
  {
    title: 'Рекламні кампанії в LinkedIn та TikTok',
    imgUrl: '/images/services/ad-socials.svg',
  },
  {
    title: 'Аналітика та оптимізація рекламних кампаній',
    imgUrl: '/images/services/analytics.svg',
  },
];

export const Services = () => {
  return (
    <SectionLayout>
      <FadeIn className="flex flex-col gap-10">
        <Title as="h2">Наші послуги</Title>
        <section className="grid grid-cols-3 gap-9 max-lg:grid-cols-1">
          {services.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
      </FadeIn>
    </SectionLayout>
  );
};

const Card = ({ title, imgUrl }: { title: string; imgUrl: string }) => (
  <article className="relative flex max-h-[334px] flex-col items-center gap-[26px] rounded-4xl bg-[#F6F6F6] p-8">
    <div className="absolute top-[7%] left-1/2 z-0 h-[121px] w-[121px] -translate-x-1/2 bg-[#6F6FF9] opacity-60 blur-[75px]" />
    <Image
      className="z-0 h-full max-h-[211px] w-[189px]"
      src={imgUrl}
      alt={title}
      width={189}
      height={100}
    />
    <Text>{title}</Text>
  </article>
);
