import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mt-auto w-full text-sm'>
      <div className='mx-auto mt-8 max-w-[800px]'>
        <div className='flex gap-4 border-t border-t-stone-400/50 py-2'>
          <Link
            className='text-sky-800 underline opacity-50 hover:text-sky-950 hover:opacity-100'
            href='https://github.com/jeroenheijmans/sample-nextjs-with-formspark'
            target='_blank'
          >
            GitHub source
          </Link>
          <span className='opacity-50'>
            Git commit {process.env.GIT_COMMIT_HASH}
          </span>
        </div>
      </div>
    </footer>
  );
}
