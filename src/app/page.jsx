import Banner from "@/components/Homepage/Banner";
import TopratedCourses from "@/components/Homepage/TopratedCourses";
import StudyTips from "@/components/Homepage/StudyTips";


export default async function Home() {
  const res = await fetch("https://skill-sphere-steel.vercel.app/data.json");
  const courses = await res.json();
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <TopratedCourses courses={courses} />
      <StudyTips />
    </div>
  );
}
