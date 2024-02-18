'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinkStyle =
  'border-b-2 border-sky-100/20 p-1 text-sky-100 hover:border-sky-100 hover:text-sky-50';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className='flex gap-4 bg-sky-950 px-4 pb-2 pt-1'>
      <Link
        className={`${navLinkStyle} ${pathname === '/' ? 'border-sky-100/100' : ''}`}
        href='/'
      >
        Home
      </Link>
      <Link
        className={`${navLinkStyle} ${pathname === '/survey-form' ? 'border-sky-100/100' : ''}`}
        href='/survey-form'
      >
        Survey Demo
      </Link>
    </nav>
  );
}
