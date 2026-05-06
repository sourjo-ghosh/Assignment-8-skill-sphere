"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const CoursePageComponents = ({ courseData }) => {
  //   const courses = courseData;
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value); // Update state on every keystroke
  };
  const courses = useMemo(() => {
    return courseData.filter((course) =>
      course.title?.toLowerCase().includes(searchValue?.toLowerCase() ?? ""),
    );
  }, [courseData, searchValue]);
  return (
    <div>
      <div className="w-11/12 mx-auto mb-5">
        {/* Search input */}
        <input
          value={searchValue}
          onChange={handleChange}
          type="text"
          placeholder="Search Course"
          className="w-60 h-10 border-2 rounded-2xl p-1 text-lg border-[#2563EB] outline-none"
        />
      </div>
      {/* Courses Grid */}
      <div className="w-11/12 mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
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
                  <Link href={`/courses/${course.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePageComponents;
