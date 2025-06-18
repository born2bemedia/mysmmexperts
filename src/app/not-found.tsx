import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export default function NotFound() {
  return (
    <main className="relative mx-[165px] my-10 flex h-[667px] flex-col justify-center gap-8 overflow-hidden rounded-4xl pt-[100px] pb-[108px] max-md:mx-5 max-md:px-3">
      <section className="mx-auto max-md:flex max-md:flex-col max-md:items-center">
        <Image
          className="max-md:w-[273px]"
          src="/images/404.svg"
          alt="404"
          width={559}
          height={303}
        />
        <div className="flex w-[493px] flex-col items-center gap-4 text-center max-md:w-full">
          <Title>Сторінку не знайдено</Title>
          <Text>
            Ми не змогли знайти цю сторінку.Можливо, її перемістили або
            видалили.Повернутися на головну сторінку (+посилання)
          </Text>
        </div>
      </section>
      <div className="absolute -top-[140%] -left-[50%] h-[976px] w-[976px] rounded-full bg-[#FF9019] blur-[350px]" />
      <div className="absolute -top-[120%] -right-[50%] h-[976px] w-[976px] rounded-full bg-[#FF75C7] blur-[350px]" />
      <div className="absolute -bottom-[160%] -left-[20%] h-[1080px] w-[1056px] rounded-full bg-[#6F6FF9] blur-[350px]" />
    </main>
  );
}
