'use client';

import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center py-[70px]">
      <Image
        className="z-10"
        src="/images/privacy.svg"
        alt="privacy-man"
        width={189}
        height={240}
      />
      <div className="absolute top-1/2 left-1/2 z-0 h-[157px] w-[157px] -translate-x-1/2 -translate-y-1/2 bg-[#6F6FF9] opacity-60 blur-[75px]" />
    </section>
  );
};
