import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import Hero from "@/components/sections/Hero";
import ProblemSolutionEnhanced from "@/components/sections/ProblemSolutionEnhanced";
import BOTModelEnhanced from "@/components/sections/BOTModelEnhanced";
import SectorsEnhanced from "@/components/sections/SectorsEnhanced";
import UKPlatform from "@/components/sections/UKPlatform";
import FinalCTA from "@/components/sections/FinalCTA";

export default function UsekaseHome() {
  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />
      <main>
        <Hero />
        <ProblemSolutionEnhanced />
        <SectorsEnhanced />
        <BOTModelEnhanced />
        <UKPlatform />
        <FinalCTA />
      </main>
      <UsekaseFooter />
    </div>
  );
}
