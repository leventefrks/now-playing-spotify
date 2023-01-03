const Animation = () => {
  return (
    <div class="flex flex-col items-center p-2">
      <div class="loader-dots relative block h-5 w-20">
        <div class="absolute top-0 mt-1 h-1 w-1 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 h-1 w-1 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 h-1 w-1 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 h-1 w-1 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};

export default Animation;
