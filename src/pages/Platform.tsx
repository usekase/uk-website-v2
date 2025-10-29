import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import PlatformHero from "@/components/sections/PlatformHero";
import PlatformCapabilities from "@/components/sections/PlatformCapabilities";
import PlatformValueProps from "@/components/sections/PlatformValueProps";
import PlatformCTA from "@/components/sections/PlatformCTA";

export default function Platform() {
  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />
      <main>
        <PlatformHero />
        <PlatformCapabilities />
        <PlatformValueProps />
        <PlatformCTA />
      </main>
      <UsekaseFooter />
    </div>
  );
}
