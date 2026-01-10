import Header from "@/components/Header";
import HeroAndStats from "@/components/HeroAndStats";
import CriteriaAndBenefits from "@/components/CriteriaAndBenefits";
import SVOBenefits from "@/components/SVOBenefits";
import SalaryCalculator from "@/components/SalaryCalculator";
import SelectionSteps from "@/components/SelectionSteps";
import FAQ from "@/components/FAQ";
import AboutAndContact from "@/components/AboutAndContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted relative overflow-hidden">
      <div 
        className="fixed inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat animate-in fade-in zoom-in duration-1000"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/fb753728-63bf-457d-8564-d0ddb13a616f/files/b38f6ada-41f8-4322-ba45-8855a79722c8.jpg)'
        }}
      />
      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      <div className="relative z-10">
        <Header />
        <HeroAndStats />
        <SVOBenefits />
        <SalaryCalculator />
        <CriteriaAndBenefits />
        <SelectionSteps />
        <FAQ />
        <AboutAndContact />
      </div>
    </div>
  );
};

export default Index;