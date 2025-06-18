'use client';

import type { TextareaHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/styles';

export const TextArea = ({
  className,
  required,
  value,
  ...args
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <label
      className={cn(
        'h-[132px] rounded-4xl border border-[#E0E0FF] bg-white px-6 py-5',
        className,
      )}
    >
      <textarea
        className="h-full w-full resize-none bg-transparent outline-none"
        required={required}
        value={value}
        {...args}
      />
    </label>
  );
};
