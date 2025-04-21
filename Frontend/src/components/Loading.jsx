export const LoadingAnimation = () => {
  return (
    <div className="relative w-12 h-12">
      {/* Center core */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

      {/* Orbiting balls */}
      <div className="absolute w-full h-full animate-spin-slow">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-pink-500 rounded-full animate-bounce-crazy delay-100"></div>
        <div className="absolute right-0 top-1/2 w-3 h-3 bg-lime-400 rounded-full animate-bounce-crazy delay-200"></div>
        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full animate-bounce-crazy delay-300"></div>
        <div className="absolute left-0 top-1/2 w-3 h-3 bg-yellow-300 rounded-full animate-bounce-crazy delay-500"></div>
      </div>
    </div>
  );
};

export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border-4 border-gray-300 border-t-blue-600 animate-spin"></div>
        <span className="absolute text-xs text-gray-500 animate-pulse">Loading...</span>
      </div>
    </div>
  );
};

