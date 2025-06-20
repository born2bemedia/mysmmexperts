'use server';

import { google } from 'googleapis';

import { contactFormBody } from '@/features/email-letters/components/contact-form-body';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_REFRESH_TOKEN,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeEmailBody } from '@/shared/lib/utils/email';

import type { ContactSchema } from '../model/schema';

export async function sendContactForm({
  email,
  phone,
  fullName,
  message,
}: ContactSchema) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const adminBody = makeEmailBody({
      to: EMAIL_USER,
      from: EMAIL_USER,
      subject:
        '=?utf-8?B?' +
        Buffer.from(
          "Нове повідомлення з форми зворотнього зв'язку | mysmmexperts.com",
        ).toString('base64') +
        '?=',
      message: `<p><b>Ім'я:</b> ${fullName}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Телефон:</b> ${phone}</p>
       <p><b>Повідомлення:</b> ${message}</p>`,
    });

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: adminBody,
      },
    });

    const userBody = makeEmailBody({
      to: email,
      from: EMAIL_USER,
      subject:
        '=?utf-8?B?' +
        Buffer.from('Дякуємо за звернення!').toString('base64') +
        '?=',
      message: contactFormBody({ username: fullName }),
    });

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: userBody },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to send email. Status: ${res.status}`);
    }

    return { data: res.data, status: res.statusText };
  } catch (err: unknown) {
    console.error('Error order product:', err);

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Unknown error occurred.');
  }
}
