'use client';

import { ThreeLinesIcon } from '@/shared/ui/icons/three-lines';

export const BurgerMenu = () => {
  return (
    <section>
      <div className="hidden h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#F6F6F6] max-md:flex">
        <ThreeLinesIcon />
      </div>
    </section>
  );
};
