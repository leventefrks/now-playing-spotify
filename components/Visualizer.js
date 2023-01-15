const Visualizer = () => {
  return (
    <div className="flex h-6 space-x-1">
      <span className="h-full w-1 origin-bottom animate-visualizer bg-green-500" />
      <span className="h-full w-1 origin-bottom animate-visualizer bg-green-500 animation-delay-22" />
      <span className="h-full w-1 origin-bottom animate-visualizer bg-green-500 animation-delay-37" />
      <span className="h-full w-1 origin-bottom animate-visualizer bg-green-500 animation-delay-17" />
    </div>
  );
};

export default Visualizer;
