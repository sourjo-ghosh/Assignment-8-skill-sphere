// import { Loader } from '@gravity-ui/icons';

import { BiLoader } from "react-icons/bi";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Animated Loader */}
        <div className="mb-8">
          <BiLoader size={40} className="text-blue-600 animate-spin" />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading</h2>
        <p className="text-gray-600 text-center">
          Preparing your learning experience...
        </p>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
