import Link from 'next/link';
import ContactForm from './components/contact-form';
import Image from 'next/image';
import Paris from '../../public/paris.jpg';

export default function Home() {
  return (
    <>
      <div className='px-4'>
        <h1 className='mt-8 text-4xl font-bold'>
          NextJS with Formspark Sample
        </h1>
        <p className='my-8'>
          This application showcases how Formspark could work inside a NextJS
          application. Different pages will have different examples of forms
          created with
          <Link
            className='ml-1 text-sky-600 underline hover:text-sky-800'
            href='https://formspark.io/'
            target='_blank'
          >
            Formspark
          </Link>
          , a paid SAAS platform for creating forms on the fly.
        </p>
      </div>
      <ContactForm />
      <div className='px-4'>
        <p className='my-8'>
          Below a form can be more text from a page, just like this. It is
          merely meant to demonstrate that the form is embedded in the page, not
          inserted at the end. It will also look a lot more realistic if there
          is content surrounding the form.
        </p>
        <p className='my-8'>
          Here iss a nice picture of Paris to liven up the page.
        </p>
        <Image
          className='rounded border shadow-xl'
          src={Paris}
          alt='Lake amidst heath and grass'
        />
        <p className='my-8'>Followed by some more text.</p>
      </div>
    </>
  );
}
