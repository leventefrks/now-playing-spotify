import useSWR from 'swr';
import { useState } from 'react';
import { fetcher } from '../lib/fetcher';
import Image from 'next/image';
import Link from 'next/link';

const TopTracks = () => {
  const { data, error, isLoading } = useSWR('/api/tracks', fetcher);

  const [isTopTracksVisible, setTopTracksVisible] = useState(false);

  if (error)
    return (
      <div className="text-xs text-red-300">
        Failed to load favorite tracks...
      </div>
    );

  if (!data) return;

  const trackList = data.map(({ url, title, artist, coverImage }) => (
    <Link
      key={url}
      href={url}
      className="mb-2 flex flex-col items-center justify-center text-center"
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
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={() => setTopTracksVisible(!isTopTracksVisible)}
        className="mb-3 font-light text-green-400"
      >
        Are you curious about my top tracks?
      </button>

      {isTopTracksVisible && (
        <ul className="flex flex-col items-center gap-4 md:flex-row">
          {trackList}
        </ul>
      )}
    </div>
  );
};

export default TopTracks;
