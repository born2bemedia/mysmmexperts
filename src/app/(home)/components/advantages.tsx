'use client';

import type { JSX } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { SectionLayout } from '@/shared/ui/components/section-layout';
import { AnalyticsIcon } from '@/shared/ui/icons/analytics';
import { CaseIcon } from '@/shared/ui/icons/case';
import { LaptopIcon } from '@/shared/ui/icons/laptop';
import { ProfileIcon } from '@/shared/ui/icons/profile';
import { SocialsIcon } from '@/shared/ui/icons/socials';
import { StrategyIcon } from '@/shared/ui/icons/strategy';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    title:
      'Оформляємо профіль так, щоб одразу було видно ваш стиль, цінності й професійність.',
    icon: ProfileIcon,
  },
  {
    title:
      'Пишемо стратегію під конкретні цілі вашого бізнесу, а не за загальними шаблонами.',
    icon: StrategyIcon,
  },
  {
    title:
      'Створюємо контент, який чіпляє погляд і говорить мовою вашої аудиторії.',
    icon: LaptopIcon,
  },
  {
    title:
      'Запускаємо рекламу так, щоб ваші оголошення бачили саме ті, кому вони потрібні.',
    icon: SocialsIcon,
  },
  {
    title:
      'Підбираємо формат і меседж для кожної платформи, щоб отримати максимальну віддачу.',
    icon: CaseIcon,
  },
  {
    title:
      'Регулярно аналізуємо результати й коригуємо кампанії для кращої ефективності.',
    icon: AnalyticsIcon,
  },
];

export const Advantages = () => {
  return (
    <SectionLayout>
      <FadeIn className="flex flex-col gap-[66px]">
        <Title as="h2">Переваги</Title>
        <section className="grid grid-cols-3 gap-x-[26px] gap-y-[52px] max-lg:grid-cols-1">
          {items.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
      </FadeIn>
    </SectionLayout>
  );
};

const Card = ({
  title,
  icon: Icon,
}: {
  title: string;
  icon: () => JSX.Element;
}) => (
  <article className="relative flex items-center justify-center rounded-4xl bg-[#F6F6F6] px-9 py-12">
    <div className="absolute -top-[18%] left-1/2 -translate-x-1/2">
      <Icon />
    </div>
    <Text>{title}</Text>
  </article>
);
