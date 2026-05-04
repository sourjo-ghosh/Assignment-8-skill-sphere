"use client"

import Image from 'next/image';
import React, { useState } from 'react';

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
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-3'>Expert Instructors</h2>
                    <p className='text-lg text-gray-600'>Learn directly from industry leaders and renowned academics.</p>
                </div>

                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {instructors.map((instructor) => (
                        <div 
                            key={instructor.id}
                            onMouseEnter={() => setHoveredId(instructor.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`bg-white rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${
                                hoveredId === instructor.id 
                                    ? 'shadow-2xl -translate-y-2' 
                                    : 'shadow-lg'
                            }`}
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;