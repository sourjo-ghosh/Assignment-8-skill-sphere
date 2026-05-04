import Image from "next/image";
import React from "react";

const CoursesPage = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const courseData = await res.json();
  
  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="w-11/12 mx-auto py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Catalog</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Discover our comprehensive selection of professional courses designed
          to accelerate your career in a low-stimulus, highly focused
          environment.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="w-11/12 mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courseData.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Course Content */}
              <div className="p-5">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {course.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* View Details Button */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;

// {
//     "id": 1,
//     "title": "Complete Web Development Bootcamp",
//     "instructor": {
//         "name": "John Doe",
//         "avatar": "https://i.pravatar.cc/150?img=1",
//         "bio": "Full-stack developer with 10+ years experience"
//     },
//     "duration": "20 hours",
//     "rating": 4.8,
//     "level": "Beginner",
//     "price": 49,
//     "discountPrice": 29,
//     "description": "Learn full-stack web development from scratch.",
//     "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     "category": "Development"
// }
