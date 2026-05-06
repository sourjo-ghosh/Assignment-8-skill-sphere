import Banner from "@/components/Homepage/Banner";
import TopratedCourses from "@/components/Homepage/TopratedCourses";
import StudyTips from "@/components/Homepage/StudyTips";
import Instructors from "@/components/Homepage/Instructors";

export const metadata = {
  title: "SkillSphere - Learn Professional Skills Online",
  description: "Discover professional courses designed to accelerate your career. Learn from industry experts in a focused, low-stimulus environment.",
  keywords: ["online courses", "professional development", "skill learning", "career advancement"],
  authors: [{ name: "SkillSphere" }],
  openGraph: {
    title: "SkillSphere - Learn Professional Skills Online",
    description: "Discover professional courses designed to accelerate your career.",
    type: "website",
    url: "https://skill-sphere-steel.vercel.app",
  },
};

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
