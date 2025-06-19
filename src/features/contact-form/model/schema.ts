import { v } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils/phone';

export const contactSchema = v.object({
  fullName: v.pipe(v.string(), v.minLength(2, "Вкажіть ваше ім'я")),
  email: v.pipe(v.string(), v.email('Вкажіть коректну електронну адресу')),
  phone: v.pipe(
    v.string(),
    v.minLength(1, 'Вкажіть коректний номер телефону'),
    v.custom(
      (input: unknown) => isPhoneValid(String(input)),
      'Вкажіть коректний номер телефону',
    ),
  ),
  message: v.pipe(v.string()),
});

export type ContactSchema = v.InferOutput<typeof contactSchema>;
