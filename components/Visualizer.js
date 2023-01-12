const Visualizer = () => {
  return (
    <div className="flex h-4">
      <span className="mr-1 h-full w-1 origin-bottom animate-visualizer bg-green-500" />
      <span className="mr-1 h-full w-1 origin-bottom animate-visualizer bg-green-500 animation-delay-22" />
      <span className="h-full w-1 origin-bottom animate-visualizer bg-green-500 animation-delay-37" />
    </div>
  );
};

export default Visualizer;
