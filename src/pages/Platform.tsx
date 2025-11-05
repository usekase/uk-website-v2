import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import PlatformHero from "@/components/sections/PlatformHero";
import KIBOTEngineEnhanced from "@/components/sections/KIBOTEngineEnhanced";
import KeystoneSolutions from "@/components/sections/KeystoneSolutions";
import PlatformCTA from "@/components/sections/PlatformCTA";

export default function Platform() {
  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />
      <main>
        <PlatformHero />
        <KIBOTEngineEnhanced />
        <KeystoneSolutions />
        <PlatformCTA />
      </main>
      <UsekaseFooter />
    </div>
  );
}
