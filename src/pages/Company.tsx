import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import CompanyHero from "@/components/sections/CompanyHero";
import CompanyMission from "@/components/sections/CompanyMission";
import CompanyTeam from "@/components/sections/CompanyTeam";
import CompanyDifference from "@/components/sections/CompanyDifference";

export default function Company() {
  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />
      <main>
        <CompanyHero />
        <CompanyMission />
        <CompanyTeam />
        <CompanyDifference />
      </main>
      <UsekaseFooter />
    </div>
  );
}
