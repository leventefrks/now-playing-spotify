import useSWR from 'swr';
import { useState } from 'react';
import { fetcher } from '../lib/fetcher';
import Image from 'next/image';
import Link from 'next/link';
import Error from './Error';

const TopTracks = () => {
  const { data: tracks, error, isLoading } = useSWR('/api/tracks', fetcher);

  const [isTopTracksVisible, setTopTracksVisible] = useState(false);

  if (error) return <Error text="favorite tracks" />;
  if (!tracks) return;

  const trackList = tracks.map(({ url, title, artist, coverImage }) => (
    <Link
      key={url}
      href={url}
      className="duration-250 mb-2 flex flex-col items-center justify-center text-center transition hover:scale-110"
    >
      <Image
        width={32}
        height={32}
        blur="true"
        className="mb-2 h-[48px] w-[48px]"
        alt={title}
        src={coverImage.url}
      />
      <div className="text-sm text-gray-200">{title}</div>
      <div className="text-xs text-gray-400">{artist}</div>
    </Link>
  ));

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setTopTracksVisible(!isTopTracksVisible)}
        className="mb-3 font-light text-green-500"
      >
        You want to know what my top tracks are?
      </button>

      {isTopTracksVisible && (
        <ul className="flex flex-col items-center gap-12 md:flex-row">
          {trackList}
        </ul>
      )}
    </div>
  );
};

export default TopTracks;
