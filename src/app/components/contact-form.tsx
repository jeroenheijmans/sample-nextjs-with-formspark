'use client';

import { useState } from 'react';
import { useFormspark } from '../lib/use-formspark';

export default function ContactForm() {
  const [submit, isLoading] = useFormspark({ formId: 'YOUR_FORM_ID_HERE' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    try {
      event.preventDefault();
      setError('');
      setSuccess('');
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const formDataEntries = Object.fromEntries(formData.entries());
      const response = await submit(formDataEntries);
      console.log(response); // Typically parrots the submission back to us
      form.reset();
      setSuccess(
        `🎉 Hurray! Your request was submitted successfully at ${new Date().toISOString().substring(11, 19)}. Thank you for getting in touch, we'll get back to you soon!`
      );
    } catch (error) {
      setError(`${error}`);
    }
  }

  return (
    <div className='px-4'>
      <div
        className={`rounded bg-gray-400/25 py-4 ${isLoading ? 'pointer-events-none opacity-50' : ''}`}
      >
        <h2 className='px-4 text-xl font-bold'>Contact Form Example</h2>
        <p className='px-4'>
          Below is an typical (bespoke) Contact Form. It is extremely vanilla
          but could easily be replaced by a more extensive form tool.
        </p>
        <div className='m-4'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <label>
              <p className='mb-1 pl-1 text-sm font-bold'>Your name*</p>
              <input
                name='contact_name'
                type='text'
                className='border-gray w-full rounded border bg-white px-2 py-2 md:w-96'
                required
              />
            </label>
            <div>
              <label>
                <p className='mb-1 pl-1 text-sm font-bold'>Email address*</p>
                <input
                  name='contact_email'
                  type='email'
                  className='border-gray w-full rounded border bg-white px-2 py-2 md:w-96'
                  required
                />
              </label>
              <p className='mt-1 pl-1 text-sm opacity-80'>
                We need this to be able to get back to you.
              </p>
            </div>
            <div>
              <label>
                <p className='mb-1 pl-1 text-sm font-bold'>Subject</p>
                <select
                  name='subject'
                  className='border-gray w-full rounded border bg-white px-2 py-2 md:w-96'
                >
                  <option value=''>No specific subject</option>
                  <option value='about-formspark'>
                    About Formspark itself
                  </option>
                  <option value='about-nextjs-integration'>
                    About NextJS integration
                  </option>
                  <option value='about-source-code'>
                    About the source code
                  </option>
                  <option value='about-something-else'>
                    About something else...
                  </option>
                </select>
              </label>
              <p className='mt-1 pl-1 text-sm opacity-80'>
                Optional. But if you categorize your request we might be able to
                help faster.
              </p>
            </div>
            <label>
              <p className='mb-1 pl-1 text-sm font-bold'>
                Your question or comment*
              </p>
              <textarea
                name='remark_or_question'
                className='border-gray h-[10rem] w-full rounded border bg-white px-2 py-2'
                required
              ></textarea>
            </label>
            <p>Filled out all the details? Then you are good to go!</p>
            {error && (
              <div>
                <p className='text-rose-700'>
                  Sorry! Something went wrong while submitting your details.
                  Please try again or get in touch via other contact options.
                </p>
                <p className='mt-2 text-xs text-rose-700'>
                  Technical details: {error}
                </p>
              </div>
            )}
            {success && (
              <div>
                <p className='font-bold text-emerald-700'>{success}</p>
              </div>
            )}
            <p>
              <button
                name='submit_button'
                value='submit'
                className='group rounded bg-sky-700 px-8 py-2 font-bold text-white hover:bg-sky-600 hover:drop-shadow-lg'
              >
                <span className='group-hover:animate-pulse'>Submit</span>
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
