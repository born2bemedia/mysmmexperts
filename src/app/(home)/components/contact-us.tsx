'use client';

import { ContactForm } from '@/features/contac-form/ui/form';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { SectionLayout } from '@/shared/ui/components/section-layout';
import { Title } from '@/shared/ui/kit/title';

export const ContactUs = () => {
  return (
    <SectionLayout>
      <FadeIn className="flex flex-col gap-10 rounded-4xl bg-[#F6F6F6] p-10 max-lg:py-[50px]">
        <Title as="h2" size="2xl" className="text-center">
          Давайте обговоримо ваш проект вже сьогодні
        </Title>
        <ContactForm />
      </FadeIn>
    </SectionLayout>
  );
};
