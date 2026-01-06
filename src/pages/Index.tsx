import Header from "@/components/Header";
import HeroAndStats from "@/components/HeroAndStats";
import CriteriaAndBenefits from "@/components/CriteriaAndBenefits";
import AboutAndContact from "@/components/AboutAndContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <HeroAndStats />
      <CriteriaAndBenefits />
      <AboutAndContact />
    </div>
  );
};

export default Index;
