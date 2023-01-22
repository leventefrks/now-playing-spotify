import { BsSpotify } from 'react-icons/bs';

const NotPlaying = () => {
  return (
    <h1 className="mb-2 flex flex-col items-center gap-4 text-center text-xl text-gray-100">
      <BsSpotify className="h-10 w-10 text-green-400" />
      <span className="mb-2 font-light text-gray-50">
        I&apos;m probably out there{' '}
        <strong className="text-3xl text-gray-400">running</strong> in the woods
        or <strong className="text-3xl text-gray-400">sleeping</strong> 😴
      </span>
    </h1>
  );
};

export default NotPlaying;
