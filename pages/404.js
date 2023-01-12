import Head from 'next/head';
import Link from 'next/link';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Now playing Spotify - Page not found</title>
        <meta name="description" content="What Am I Listening on Spotify?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${roboto.className} flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-gray-800 px-3 text-3xl font-light text-gray-100 md:px-0`}
      >
        <span>
          Oops, something went <strong>wrong</strong>.
        </span>
        <Link href="/" className="text-sm font-bold text-green-500">
          Go back!
        </Link>
      </main>
    </>
  );
}
