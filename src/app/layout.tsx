import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import { GoogleTagManager } from '@next/third-parties/google';

import { cn } from '@/shared/lib/utils/styles';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';

import './globals.css';

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/light.otf',
      weight: '500',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="G-FGJ11NC5J4" />
      </head>
      <body className={cn(helvetica.className, 'antialiased')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
