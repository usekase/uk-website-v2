import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import PlatformHero from "@/components/sections/PlatformHero";
import UKPlatform from "@/components/sections/UKPlatform";
import KeystoneSolutions from "@/components/sections/KeystoneSolutions";
import PlatformCTA from "@/components/sections/PlatformCTA";

export default function Platform() {
  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />
      <main>
        <PlatformHero />
        <UKPlatform />
        <KeystoneSolutions />
        <PlatformCTA />
      </main>
      <UsekaseFooter />
    </div>
  );
}
