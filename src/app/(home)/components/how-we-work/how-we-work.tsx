'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils/styles';
import { Line } from '@/shared/ui/icons/line';
import { LineMob } from '@/shared/ui/icons/line-mob';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './how-we-work.module.scss';

export const HowWeWork = () => {
  return (
    <div id="how-we-work" className={st.layout}>
      <Title as="h2">Як ми працюємо</Title>
      <section className={st.lineLayout}>
        <div className={st.card}>
          <div className={st.cardNumber}>01</div>
          <div className={cn(st.cardContent, 'rotate-[-1.2deg]')}>
            <Title size="2xl" className="z-10">
              Розробка стратегії та плану дій
            </Title>
            <Text className="z-10">
              Фіксуємо цілі, розкладаємо шлях до них по кроках і чітко
              визначаємо, що і для чого робимо.
            </Text>
            <Image
              className="z-0 rounded-4xl"
              src="/images/bg.png"
              alt="bg"
              unoptimized
              fill
            />
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>03</div>
          <div className={cn(st.cardContent, 'rotate-[-1.2deg]')}>
            <Title size="2xl" className="z-10">
              Підписання договору
            </Title>
            <Text className="z-10">
              Офіційно закріплюємо домовленості, щоб кожен знав свою зону
              відповідальності й строки виконання.
            </Text>
            <Image
              className="z-0 rounded-4xl"
              src="/images/bg.png"
              alt="bg"
              unoptimized
              fill
            />
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>05</div>
          <div className={cn(st.cardContent, 'rotate-[1.2deg]')}>
            <Title size="2xl" className="z-10">
              Аналітика результатів та оптимізація
            </Title>
            <Text className="z-10">
              Перевіряємо цифри, дивимось на реальну поведінку аудиторії і
              постійно шукаємо, де ще можна додати ефективності.
            </Text>
            <Image
              className="z-0 rounded-4xl"
              src="/images/bg.png"
              alt="bg"
              unoptimized
              fill
            />
          </div>
        </div>
        <div className={st.card}></div>
        <div className={st.card}>
          <div className={st.cardNumber}>04</div>
          <div className={cn(st.cardContent, 'rotate-[1.2deg]')}>
            <Title size="2xl" className="z-10 text-center">
              Створення контенту та запуск рекламних кампаній  
            </Title>
            <Text className="z-10">
              Готуємо контент, що працює на вашу репутацію і результат, а
              рекламу запускаємо тільки тоді, коли впевнені в її ефективності.
            </Text>
            <Image
              className="z-0 rounded-4xl"
              src="/images/bg.png"
              alt="bg"
              unoptimized
              fill
            />
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>02</div>
          <div className={cn(st.cardContent, 'rotate-[1.2deg]')}>
            <Title size="2xl" className="z-10">
              Консультація та збір інформації
            </Title>
            <Text className="z-10">
              Говоримо відверто про завдання бізнесу і ставимо правильні
              питання, щоб не витрачати час на зайве.
            </Text>
            <Image
              className="z-0 rounded-4xl"
              src="/images/bg.png"
              alt="bg"
              unoptimized
              fill
            />
          </div>
        </div>
        <Line className={st.line} />
        <LineMob className={st.lineMob} />
      </section>
    </div>
  );
};
