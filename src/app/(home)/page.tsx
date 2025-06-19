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
  title: 'Професійний SMM-супровід для бізнесу | SMM Experts',
  description:
    'Замовляйте просунутий SMM для вашого бренду. Стратегія, контент, таргет, аналітика — результат з першого місяця. Довіртесь нашим експертам.',
  openGraph: {
    title: 'Професійний SMM-супровід для бізнесу | SMM Experts',
    description:
      'Замовляйте просунутий SMM для вашого бренду. Стратегія, контент, таргет, аналітика — результат з першого місяця. Довіртесь нашим експертам.',
    images: 'https://mysmmexperts.com/images/meta.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Професійний SMM-супровід для бізнесу | SMM Experts',
    description:
      'Замовляйте просунутий SMM для вашого бренду. Стратегія, контент, таргет, аналітика — результат з першого місяця. Довіртесь нашим експертам.',
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
