const Error = ({ text }) => {
  return (
    <div className="mb-4 text-xs text-red-300">Failed to load {text}...</div>
  );
};

export default Error;
