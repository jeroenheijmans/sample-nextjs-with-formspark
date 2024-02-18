import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/nav-bar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS with Formspark Sample',
  description:
    'Example application showcasing Formspark inside a NextJS application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen flex-col items-center border bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50 text-sky-950'>
          <div className='mx-auto flex w-full max-w-[800px] flex-col p-2 md:p-4 lg:p-8'>
            <NavBar />
            <div className='min-h-48'>{children}</div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
