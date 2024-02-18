import { useState } from 'react';

export const useFormspark = ({ formId }: { formId: string }) => {
  const formUrl = `https://submit-form.com/${formId}`;
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (formValues: Record<string, unknown>) => {
    try {
      setIsLoading(true);
      const body = JSON.stringify(formValues);
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body,
      });
      if (!response.ok) {
        const plainResponse = await response.text();
        throw `${response.status}: ${response.statusText || plainResponse}`;
      }
      return await response.json();
    } finally {
      setIsLoading(false);
    }
  };

  return [submit, isLoading] as const;
};
