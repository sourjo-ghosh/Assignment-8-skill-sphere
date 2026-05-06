"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16">
        {/* Left Content */}
        <motion.div 
          className="flex flex-col justify-center items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8">
            <FaGraduationCap className="text-blue-600 text-lg" />
            <span className="text-sm font-semibold text-blue-600">Elevate Your Learning</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Focus purely on your{" "}
            <span className="text-blue-600">academic growth</span> without the noise.
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-8">
            Experience a minimalist, low-stimulus learning environment designed
            for maximum clarity and cognitive ease. Master new skills with
            industry experts.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
              <Link href="courses">
                Explore Courses
              </Link>
            </button>
            <button className="bg-blue-50 text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 border border-blue-200">
              <Link href="study-plans">
                View Study Plans
              </Link>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/student.png"
            alt="Student learning illustration"
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
