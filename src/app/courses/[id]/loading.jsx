export default function CourseLoading() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section Skeleton */}
      <div className="w-11/12 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            {/* Category Badges Skeleton */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            </div>

            {/* Title Skeleton */}
            <div className="mb-4 space-y-3">
              <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-12 w-5/6 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2 mb-6">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Instructor Skeleton */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="flex-1">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Image Skeleton */}
          <div className="bg-gray-200 rounded-2xl h-64 lg:h-80 animate-pulse"></div>
        </div>
      </div>

      {/* Pricing Section Skeleton */}
      <div className="w-11/12 mx-auto py-8 border-y border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Course */}
          <div className="md:col-span-2">
            <div className="h-8 w-40 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Pricing Card Skeleton */}
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 h-fit animate-pulse">
            <div className="space-y-4">
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Outcomes Skeleton */}
      <div className="w-11/12 mx-auto py-16">
        <div className="h-8 w-40 bg-gray-200 rounded mb-8 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-100 border border-gray-200 rounded-lg p-6 animate-pulse">
              <div className="h-10 w-10 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Skeleton */}
      <div className="w-11/12 mx-auto py-16 border-t border-gray-200 pb-20">
        <div className="h-8 w-32 bg-gray-200 rounded mb-8 animate-pulse"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-gray-100 border border-gray-200 rounded-lg p-6 animate-pulse">
              <div className="flex justify-between">
                <div className="flex-1">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 w-64 bg-gray-200 rounded"></div>
                </div>
                <div className="text-right">
                  <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
