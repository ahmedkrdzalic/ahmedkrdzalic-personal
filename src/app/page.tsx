import Experience from "@/components/HomePage/Experience";
import Header from "@/components/HomePage/Header";
import Intro from "@/components/HomePage/Intro";
import Projects from "@/components/HomePage/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden px-5 ">
      <Header />
      <div className="w-full max-w-4xl ">
        <Intro />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
