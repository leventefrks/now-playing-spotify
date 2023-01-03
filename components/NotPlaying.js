import { BsSpotify } from 'react-icons/bs';

const NotPlaying = () => {
  return (
    <h1 className="flex flex-col items-center gap-4 text-center text-2xl text-gray-100">
      <BsSpotify className="h-10 w-10 text-green-400" />
      <span className="font-light text-gray-50">
        I&apos;`m probably out there in the woods{' '}
        <strong className="text-3xl">running</strong> or{' '}
        <strong className="text-3xl">sleeping.</strong>😴
      </span>
    </h1>
  );
};

export default NotPlaying;
