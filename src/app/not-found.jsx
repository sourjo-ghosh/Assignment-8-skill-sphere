'use client';

import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
// import { Search } from '@gravity-ui/icons';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-6">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! We couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Search Icon */}
        <div className="mb-8 flex justify-center">
          <BiSearch size={64} className="text-gray-400" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Go to Home
          </Link>
          <Link
            href="/courses"
            className="bg-blue-50 text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 border border-blue-200"
          >
            Browse Courses
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Or try these helpful links:</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link href="/courses" className="text-blue-600 hover:underline">
              Courses
            </Link>
            <Link href="/" className="text-blue-600 hover:underline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
