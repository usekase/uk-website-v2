import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import CareersHero from "@/components/sections/CareersHero";
import CareersContent from "@/components/sections/CareersContent";
import CareersListings from "@/components/sections/CareersListings";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />
      <main>
        <CareersHero />
        <CareersContent />
        <CareersListings />
      </main>
      <UsekaseFooter />
    </div>
  );
}
