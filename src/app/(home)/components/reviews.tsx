'use client';

import Image from 'next/image';

import { SectionLayout } from '@/shared/ui/components/section-layout';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const reviews = [
  {
    position: 'Власниця магазину handmade прикрас',
    name: 'Анна',
    imgUrl: '/images/reviews/anna.svg',
    review:
      'Отримали крутий контент і приріст підписників уже в перший місяць роботи! Дуже вдячні за професіоналізм!',
  },
  {
    position: 'Директор IT-стартапу',
    name: 'Олексій',
    imgUrl: '/images/reviews/alex.svg',
    review:
      'Професійна команда, яка чітко розуміє цілі бізнесу. Результати перевершили очікування!',
  },
];

export const Reviews = () => {
  return (
    <SectionLayout className="flex flex-col gap-[76px] max-md:gap-[110px]">
      <Title as="h2">Відгуки клієнтів</Title>
      <section className="relative">
        <section className="absolute -top-[30px] z-20 flex w-full gap-[30px] max-md:-top-[90px] max-md:flex-col">
          {reviews.map(item => (
            <ReviewCard key={item.name} {...item} />
          ))}
        </section>
        <div className="h-[194px] w-full rounded-4xl bg-black blur-[2px] max-md:h-[445px]" />
      </section>
    </SectionLayout>
  );
};

const ReviewCard = ({
  position,
  name,
  imgUrl,
  review,
}: {
  position: string;
  name: string;
  imgUrl: string;
  review: string;
}) => (
  <article className="flex flex-1 flex-col gap-6 rounded-4xl bg-[#F6F6F6] p-6">
    <section className="flex gap-3">
      <Image src={imgUrl} alt={name} width={52} height={52} unoptimized />
      <div className="flex flex-col gap-1">
        <Title as="h3" size="base">
          {position}
        </Title>
        <Text size="sm" color="secondary">
          {name}
        </Text>
      </div>
    </section>
    <Divider />
    <Text>{review}</Text>
  </article>
);
