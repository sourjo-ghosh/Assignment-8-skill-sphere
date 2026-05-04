import Banner from "@/components/Homepage/Banner";
import TopratedCourses from "@/components/Homepage/TopratedCourses";
import StudyTips from "@/components/Homepage/StudyTips";
import Instructors from "@/components/Homepage/Instructors";


export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const courses = await res.json();  
  return (
    <div className="flex flex-col items-center justify-center ">
      <Banner />
      <TopratedCourses courses={courses} />
      <StudyTips />
      <Instructors/>
    </div>
  );
}
