import type { Metadata } from 'next';

import { Hero, PolicyContent } from './components';

export const metadata: Metadata = {
  title: 'Політика конфіденційності',
  openGraph: {
    title: 'Політика конфіденційності',
    images: 'https://mysmmexperts.com/images/meta.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Політика конфіденційності',
    images: ['https://mysmmexperts.com/images/meta.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Hero />
      <PolicyContent />
    </main>
  );
}
