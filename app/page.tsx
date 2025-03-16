import HeroGeometric from "@/components/HeroGeometric";
import SkillSection from "@/sections/Skills";
import TapeSection from "@/sections/Tape";
import Projects from "../sections/Projects";

const HomePage = () => {
  return (
    <div className="space-y-24 md:space-y-28 lg:space-y-30">
      <HeroGeometric />
      <Projects />
      <TapeSection />
      <SkillSection />
    </div>
  );
};

export default HomePage;
