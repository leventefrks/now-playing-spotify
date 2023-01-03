import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import Link from 'next/link';
import Image from 'next/image';
import { BsSpotify } from 'react-icons/bs';
import NotPlaying from './NotPlaying';
import Animation from './Animation';

const NowPlaying = () => {
  const { data, error, isLoading } = useSWR('/api/now-playing', fetcher);

  if (error) return <div className="text-xl">Failed to load</div>;

  if (isLoading) return <div className="text-xl">Loading...</div>;

  const { songUrl, artist, title, isPlaying, albumImageUrl } = data;

  return data.isPlaying ? (
    <div className="flex flex-col items-center">
      <Link
        href={songUrl}
        className="flex flex-col items-center gap-4 px-4 py-2"
      >
        <BsSpotify className="h-10 w-10 text-green-400" />
        <div className="flex">
          <h1 className="text-md font-light">Currently listening to</h1>
          <Animation />
        </div>
        <Image
          src={albumImageUrl}
          width={96}
          height={96}
          blur="true"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full w-full"
          alt={title}
        />
        <div className="mt-4 flex flex-col items-center">
          <span className="text-center text-3xl font-bold">{title}</span>
          <span className="text-md ">{artist}</span>
        </div>
      </Link>
    </div>
  ) : (
    <NotPlaying />
  );
};

export default NowPlaying;
