const Animation = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <div className="loader-dots relative h-5 w-20">
        <div className="absolute top-0 mt-1 h-1 w-1 rounded-full bg-green-500" />
        <div className="absolute top-0 mt-1 h-1 w-1 rounded-full bg-green-500" />
        <div className="absolute top-0 mt-1 h-1 w-1 rounded-full bg-green-500" />
        <div className="absolute top-0 mt-1 h-1 w-1 rounded-full bg-green-500" />
      </div>
    </div>
  );
};

export default Animation;
