import type { Metadata } from 'next';

import {
  AboutUs,
  Advantages,
  ContactUs,
  Hero,
  HowWeWork,
  Reviews,
  Services,
} from './components';

export const metadata: Metadata = {
  title: 'Комплексне просування бренду у соцмережах',
  description:
    'Створюємо контент, запускаємо рекламу і будуємо стратегії для вашого бренду у Facebook, Instagram, LinkedIn та TikTok.',
  openGraph: {
    title: 'Комплексне просування бренду у соцмережах',
    description:
      'Створюємо контент, запускаємо рекламу і будуємо стратегії для вашого бренду у Facebook, Instagram, LinkedIn та TikTok.',
    images: 'https://mysmmexperts.com/images/meta.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Комплексне просування бренду у соцмережах',
    description:
      'Створюємо контент, запускаємо рекламу і будуємо стратегії для вашого бренду у Facebook, Instagram, LinkedIn та TikTok.',
    images: ['https://mysmmexperts.com/images/meta.png'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Advantages />
      <HowWeWork />
      <Reviews />
      <ContactUs />
    </main>
  );
}
