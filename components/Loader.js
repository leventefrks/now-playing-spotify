import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className="flex items-center gap-3">
      <AiOutlineLoading3Quarters className="h-6 w-6 animate-spin text-gray-200" />
      <span className="text-xl">Loading...</span>
    </div>
  );
};

export default Loader;
