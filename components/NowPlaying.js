import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import Link from 'next/link';
import Image from 'next/image';
import { BsSpotify } from 'react-icons/bs';
import NotPlaying from './NotPlaying';
import Loader from './Loader';
import Visualizer from './Visualizer';
import Error from './Error';

const NowPlaying = () => {
  const { data: track, error, isLoading } = useSWR('/api/now-playing', fetcher);

  if (error) return <Error text="currently playing track" />;
  if (isLoading) return <Loader />;

  const { isPlaying, url, artist, title, albumImageUrl } = track;

  return isPlaying ? (
    <div className="mt-4 flex flex-col items-center">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 flex flex-col items-center"
      >
        <BsSpotify className="mb-4 h-10 w-10 text-green-500" />

        <div className="mb-3 flex items-baseline gap-4 leading-relaxed">
          <h1 className="text-md font-light">
            I&apos;m currently listening to
          </h1>
          <Visualizer />
        </div>

        <Image
          src={albumImageUrl}
          width={96}
          height={96}
          placeholder="blur"
          className="h-[250px] w-[250px]"
          alt={title}
          blurDataURL={albumImageUrl}
        />
        <div className="mt-3 flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold text-gray-200">
            {title}
          </h2>
          <h3 className="text-md text-gray-400">{artist}</h3>
        </div>
      </Link>
    </div>
  ) : (
    <NotPlaying />
  );
};

export default NowPlaying;
