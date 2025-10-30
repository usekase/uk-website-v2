import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import Hero from "@/components/sections/Hero";
import ProblemSolutionEnhanced from "@/components/sections/ProblemSolutionEnhanced";
import BOTModelEnhanced from "@/components/sections/BOTModelEnhanced";
import KIBOTEngineEnhanced from "@/components/sections/KIBOTEngineEnhanced";
import SectorsEnhanced from "@/components/sections/SectorsEnhanced";
import FlywheelFunding from "@/components/sections/FlywheelFunding";
import TestimonialsEnhanced from "@/components/sections/TestimonialsEnhanced";
import FinalCTA from "@/components/sections/FinalCTA";

export default function UsekaseHome() {
  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />
      <main>
        <Hero />
        <ProblemSolutionEnhanced />
        <BOTModelEnhanced />
        <SectorsEnhanced />
        <KIBOTEngineEnhanced />
        <FlywheelFunding />
        <TestimonialsEnhanced />
        <FinalCTA />
      </main>
      <UsekaseFooter />
    </div>
  );
}
