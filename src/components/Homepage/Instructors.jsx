"use client"

import Image from 'next/image';
import React, { useState } from 'react';import { motion } from 'framer-motion';
const Instructors = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const instructors = [
        {
            id: 1,
            name: 'Dr. Sarah Jenkins',
            role: 'Finance Mentor',
            image: 'https://i.pravatar.cc/150?img=1',
            description: 'Former Lead Engineer at TechCorp. Passionate about making complex algorithms accessible and intuitive for all learners.'
        },
        {
            id: 2,
            name: 'Prof. Marcus Thorne',
            role: 'Technology',
            image: 'https://i.pravatar.cc/150?img=10',
            description: 'Over 20 years of executive consulting experience. Specializes in actionable frameworks for modern corporate leadership.'
        },
        {
            id: 3,
            name: 'Elena Rodriguez',
            role: 'UX Design',
            image: 'https://i.pravatar.cc/150?img=7',
            description: 'Award-winning product designer. Focuses on user-centric methodologies and minimalist aesthetic principles.'
        }
    ];

    return (
        <div className='w-full bg-white py-16'>
            {/* Blue Top Border */}
            <div className='h-1 mb-12'></div>
            
            <div className='max-w-6xl mx-auto px-6'>
                {/* Header Section */}
                <motion.div 
                  className='text-center mb-12'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                    <h2 className='text-4xl font-bold text-gray-900 mb-3'>Expert Instructors</h2>
                    <p className='text-lg text-gray-600'>Learn directly from industry leaders and renowned academics.</p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div 
                  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                >
                    {instructors.map((instructor) => (
                        <motion.div 
                            key={instructor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            onMouseEnter={() => setHoveredId(instructor.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                            className='bg-white rounded-lg p-8 text-center transition-all duration-300 cursor-pointer shadow-lg'
                        >
                            {/* Image Container */}
                            <div className='mb-6 flex justify-center'>
                                <div className='relative'>
                                    <Image 
                                        src={instructor.image} 
                                        alt={instructor.name}
                                        width={140}
                                        height={140}
                                        className='rounded-full border-4 border-blue-50 object-cover'
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className='text-xl font-bold text-gray-900 mb-2'>
                                {instructor.name}
                            </h3>

                            {/* Role Badge */}
                            <div className='mb-4'>
                                <span className='inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold'>
                                    {instructor.role}
                                </span>
                            </div>

                            {/* Description */}
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                {instructor.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Instructors;