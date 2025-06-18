'use client';

import type { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/styles';

import { Text } from './text';

export const TextField = ({
  className,
  required,
  value,
  hint,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & { hint?: string }) => {
  return (
    <label
      className={cn(
        'relative w-full rounded-4xl border border-[#E0E0FF] bg-white px-6 py-[15px]',
        className,
      )}
    >
      <input
        className="w-full bg-transparent outline-none"
        required={required}
        value={value}
        {...args}
      />
      {hint && (
        <Text
          size="sm"
          color="danger"
          className="absolute -bottom-[20px] left-[10px]"
        >
          {hint}
        </Text>
      )}
    </label>
  );
};
