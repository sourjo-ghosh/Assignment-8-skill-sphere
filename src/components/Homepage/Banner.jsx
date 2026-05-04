import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 gap-10">
      <div className="relative flex flex-col justify-center items-start p-5 min-h-100">
        <p className="absolute top-6 left-5 flex justify-center items-center gap-2 rounded-full px-4 py-2 text-sm bg-[#D5E4F8] font-semibold text-[#004AC6] shadow-sm">
          <FaGraduationCap />
          <span>Elevate Your Learning</span>
        </p>
        <div className="mt-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Focus purely on your{" "}
            <span className="text-[#004AC6]">academic growth</span> without the
            noise.
          </h1>
          <p className="font-medium text-lg text-[#434655] mt-6 leading-relaxed">
            Experience a minimalist, low-stimulus learning environment designed
            for maximum clarity and cognitive ease. Master new skills with
            industry experts.
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="cursor-pointer bg-[#004AC6] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#003a99] transition duration-300">
            <Link href={'courses'}>
            Explore Courses
            </Link>
          </button>
          <button className="cursor-pointer bg-[#D5E4F8] text-[#004AC6] py-3 px-6 rounded-lg hover:bg-[#f0f0f0] transition duration-300">
            <Link href={'study-plans'}>
            View Study Plans
            </Link>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          src="/student.png"
          alt="Student learning illustration"
          width={1200}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
