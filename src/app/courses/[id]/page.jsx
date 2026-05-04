import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiBarChart, BiBrain, BiCheckCircle, BiChevronLeft } from 'react-icons/bi';
import { FaRobot } from 'react-icons/fa';


const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const courses = await res.json(); 
  const course = courses.find(course => course.id == id);

  if (!course) {
    return <div className="text-center py-20">Course not found</div>;
  }

  const learningOutcomes = [
    {
      icon: BiChevronLeft,
      title: "Algorithm Design",
      description: "Build and train predictive models from scratch."
    },
    {
      icon: FaRobot,
      title: "Model Deployment",
      description: "Deploy local models into production-ready APIs."
    },
    {
      icon: BiBarChart,
      title: "Data Processing",
      description: "Clean and structure complex datasets efficiently."
    },
    {
      icon: BiBrain,
      title: "Neural Networks",
      description: "Understand the architecture of deep learning systems."
    }
  ];

  const courseBenefits = [
    "Full lifetime access",
    "45 hours of on-demand video",
    "Certificate of completion",
    "Access on mobile and web"
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="w-11/12 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <button className=" bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4">
                <Link href={'/courses'}>
              Back To All Courses
                </Link>
            </button>
            {/* Category Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                {course.category}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                12 Weeks
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                {course.level}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-6">
              {course.description}
            </p>

            {/* Instructor Info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((num) => (
                  <Image
                    key={num}
                    src={`https://i.pravatar.cc/40?img=${num}`}
                    alt={`Instructor ${num}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    width={50}
                    height={50}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  3,490+ learners enrolled
                </p>
                <p className="text-xs text-gray-600">
                  4.8 ⭐ (2,340 reviews)
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={350}
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Price & Enrollment Section */}
      <div className="w-11/12 mx-auto py-8 border-y border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Course */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About this course</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In an era driven by data, understanding machine learning is no longer optional for technology professionals. This comprehensive program moves beyond theory, focusing on practical implementations using Python and industry-standard frameworks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You will start by solidifying your understanding of linear regression and classification algorithms, progressively advancing to complex neural networks and deep learning architectures. Our unique pedagogical approach ensures cognitive ease, breaking down complex concepts into manageable, interactive modules.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 h-fit">
            <div className="mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ${course.discountPrice}
              </div>
              <div className="text-lg text-gray-500 line-through">
                ${course.price}
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4">
              Enroll Now
            </button>

            <p className="text-sm text-gray-600 text-center mb-6">
              14-day money-back guarantee
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {courseBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <BiCheckCircle size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="w-11/12 mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What you'll learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningOutcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="mb-4 text-blue-600">
                  <IconComponent size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{outcome.title}</h3>
                <p className="text-sm text-gray-600">{outcome.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Instructor Section */}
      <div className="w-11/12 mx-auto py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Instructor</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col md:flex-row gap-8 items-start">
          <Image
            src="https://i.pravatar.cc/150?img=10"
            alt="Instructor"
            width={120}
            height={120}
            className="rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Elena Rostova</h3>
            <p className="text-blue-600 font-semibold mb-4">Lead AI Researcher</p>
            <p className="text-gray-600">
              With 15+ years of experience in machine learning and enterprise AI, Dr. Rostova specializes in training complex neural architectures and implementing production-ready AI systems for enterprise AI. Rostova specializes in training complex neural architectures and implementing production-ready AI systems.
            </p>
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="w-11/12 mx-auto py-16 border-t border-gray-200 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Curriculum</h2>
        <div className="space-y-4">
          {[
            { module: "Module 1", title: "Introduction to Machine Learning", lessons: 8, duration: "2.5 hrs" },
            { module: "Module 2", title: "Supervised Learning & Regression", lessons: 12, duration: "4 hrs" },
            { module: "Module 3", title: "Classification Algorithms", lessons: 10, duration: "3.5 hrs" },
            { module: "Module 4", title: "Neural Networks & Deep Learning", lessons: 15, duration: "5 hrs" },
            { module: "Module 5", title: "Model Deployment & Production", lessons: 9, duration: "3 hrs" }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-600">{item.module}</p>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{item.lessons} lessons</p>
                  <p>{item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;




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