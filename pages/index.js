import Head from 'next/head';
import { Inter } from '@next/font/google';
import NowPlaying from '../components/NowPlaying';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Now playing Spotify</title>
        <meta name="description" content="What Am I Listening on Spotify?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full items-center justify-center bg-gray-800 px-5 text-gray-100 md:px-0">
        <NowPlaying />
      </main>
    </>
  );
}
