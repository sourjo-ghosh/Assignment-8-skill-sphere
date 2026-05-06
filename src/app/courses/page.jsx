
import CoursePageComponents from "@/components/CoursePageComponents";


const CoursesPage = async () => {
  
    const baseUrl = process.env.BETTER_AUTH_URL || "";
  const res = await fetch(`${baseUrl}/data.json`);
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
      <CoursePageComponents courseData={courseData}/>
      
    </div>
  );
};

export default CoursesPage;
