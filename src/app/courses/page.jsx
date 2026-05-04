import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoursesPage = async () => {
//   const res = await fetch("http://localhost:3000/data.json");
//   const courseData = await res.json();
  
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
