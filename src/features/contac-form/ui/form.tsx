'use client';

import { useForm } from '@/shared/lib/forms';
import { NextSymbol } from '@/shared/ui/components/next-symbol';
import { Button } from '@/shared/ui/kit/button';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import { contactSchema } from '../model/schema';

export const ContactForm = () => {
  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
    validators: {
      onChange: contactSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      reset();
    },
  });

  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <section className="flex flex-col gap-5">
        <section className="flex items-center gap-5 max-lg:flex-col max-lg:items-start">
          <Field name="fullName">
            {({ name, state, handleBlur, handleChange }) => (
              <TextField
                name={name}
                placeholder="Enter Your Name"
                value={String(state.value)}
                onBlur={handleBlur}
                onChange={e => handleChange(e.target.value)}
                hint={state.meta.errors.map(error => error?.message).join(', ')}
              />
            )}
          </Field>
          <Field name="phone">
            {({ name, state, handleBlur, handleChange }) => (
              <TextField
                name={name}
                placeholder="Enter Your Name"
                value={String(state.value)}
                onBlur={handleBlur}
                onChange={e => handleChange(e.target.value)}
                hint={state.meta.errors.map(error => error?.message).join(', ')}
              />
            )}
          </Field>
          <Field name="email">
            {({ name, state, handleBlur, handleChange }) => {
              console.log(state.meta.errors);
              return (
                <TextField
                  name={name}
                  placeholder="Enter Your Name"
                  value={String(state.value)}
                  onBlur={handleBlur}
                  onChange={e => handleChange(e.target.value)}
                  hint={state.meta.errors
                    .map(error => error?.message)
                    .join(', ')}
                />
              );
            }}
          </Field>
        </section>
        <Field name="message">
          {({ name, state, handleBlur, handleChange }) => (
            <TextArea
              name={name}
              placeholder="Message"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
            />
          )}
        </Field>
      </section>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit} className="mx-auto">
            <NextSymbol />
            {isSubmitting ? 'Відправка...' : 'Відправити запит'}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
