"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const TopratedCourses = ({ courses }) => {
  const topRatedCourses = courses
    .filter((course) => Number(course.rating) >= 4.8)
    .slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <section className="w-full bg-[#E1E2ED]/50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600">
            Top-Rated Programs
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            Carefully curated courses to accelerate your career.
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {topRatedCourses.map((course) => (
            <motion.article
              key={course.id}
              variants={cardVariants}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={200}
                  height={100}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm">
                  {course.category}
                </span>
              </div>

              <div className="flex h-full flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {course.description?.length > 100
                      ? `${course.description.slice(0, 100)}...`
                      : course.description}
                  </p>

                  <div className="mt-5 border-t border-slate-200 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="wrap text-xl font-bold uppercase text-[#191B23]">
                        $ {course.price}
                      </p>
                      <button
                        aria-label={`Explore ${course.title}`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-sky-600 transition-colors duration-300 hover:bg-sky-50"
                      >
                        <AiOutlineArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopratedCourses;


