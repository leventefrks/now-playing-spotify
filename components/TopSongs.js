import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';

const TopSongs = () => {
  const { data, error, isLoading } = useSWR('/api/top-songs', fetcher);

  if (error) return <div className="text-xl">Failed to load</div>;

  if (isLoading) return <div className="text-xl">Loading...</div>;

  console.log(data);

  return <div className="flex flex-col items-center">TopSongs</div>;
};

export default TopSongs;
