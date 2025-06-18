'use client';

import Image from 'next/image';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { CloseIcon } from '@/shared/ui/icons/close';
import { CompleteIcon } from '@/shared/ui/icons/complete';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYouDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/55 backdrop-blur-sm" />
        <Content
          className="animate-contentShow fixed top-[50vh] left-[50vw] z-[999] w-[428px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden focus:outline-none max-md:mx-auto max-md:w-[96%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="relative flex flex-col items-center gap-8 py-[68px]">
              <CompleteIcon />
              <section className="z-10 flex flex-col items-center gap-4 text-center">
                <Title>Дякуємо!</Title>
                <Text>Ми зв&apos;яжемося з вами найближчим часом.</Text>
              </section>
              <Image
                className="z-0"
                src="/images/bg-thanks.png"
                alt="complete"
                unoptimized
                fill
              />
            </section>
          </Description>
          <Close className="absolute top-6 right-6 cursor-pointer">
            <CloseIcon />
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};
