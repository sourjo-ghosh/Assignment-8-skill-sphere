import Banner from "@/components/Homepage/Banner";
import TopratedCourses from "@/components/Homepage/TopratedCourses";
import StudyTips from "@/components/Homepage/StudyTips";
import Instructors from "@/components/Homepage/Instructors";


export default async function Home() {
  const baseUrl = process.env.BETTER_AUTH_URL || "";
  const res = await fetch(`${baseUrl}/data.json`);
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
