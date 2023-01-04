import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import Image from 'next/image';
import Link from 'next/link';

const TopTracks = () => {
  const { data, error, isLoading } = useSWR('/api/tracks', fetcher);

  if (error)
    return (
      <div className="text-xs text-red-300">
        Failed to load favorite tracks...
      </div>
    );
  if (isLoading) return <div className="text-xs">Loading...</div>;

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
      <h3 className="mb-3 font-bold text-green-400">My top tracks</h3>
      <ul className="flex items-center gap-4">{trackList}</ul>
    </div>
  );
};

export default TopTracks;
