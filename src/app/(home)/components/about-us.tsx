'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { SectionLayout } from '@/shared/ui/components/section-layout';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const AboutUs = () => {
  return (
    <SectionLayout id="about-us">
      <FadeIn className="flex items-center gap-[30px] max-md:flex-col max-md:gap-5">
        <section className="flex w-1/2 flex-col gap-4 max-md:w-full">
          <Title as="h2">Про нас</Title>
          <Text>
            Ми впевнені, що за кожним успішним брендом стоїть правильна
            стратегія.
            <br />
            Наша команда допомагає бізнесу звучати голосніше у світі соцмереж,
            створюючи контент, що приносить не просто охоплення, а реальні
            результати.
            <br />
            Ми ведемо акаунти так, щоб формувати довіру і довгострокові
            відносини з клієнтами — чесно, системно й на результат. Допомагаємо
            розповісти історію бренду так, щоб його помічали, розуміли й обирали
            серед тисяч інших.
          </Text>
        </section>
        <Image
          className="h-[447px] w-1/2 rounded-4xl object-cover max-md:w-full"
          src="/images/1.jpg"
          alt="about us"
          width={500}
          height={447}
          unoptimized
        />
      </FadeIn>
    </SectionLayout>
  );
};
