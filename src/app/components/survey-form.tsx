'use client';

import { useFormspark } from '../lib/use-formspark';

export default function SurveyForm() {
  const [_submit, isLoading] = useFormspark({ formId: 'YOUR_FORM_ID_HERE' });

  return (
    <div className='px-4'>
      <div
        className={`rounded bg-gray-400/25 py-4 ${isLoading ? 'pointer-events-none opacity-50' : ''}`}
      >
        <h2 className='p-4 text-xl font-bold'>Survey Form Example</h2>
        <p className='px-4'>Below is an survey form.</p>
        <div className='m-4'>TODO: Create a sample survey here.</div>
      </div>
    </div>
  );
}
