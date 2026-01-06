import Header from "@/components/Header";
import HeroAndStats from "@/components/HeroAndStats";
import CriteriaAndBenefits from "@/components/CriteriaAndBenefits";
import FAQ from "@/components/FAQ";
import AboutAndContact from "@/components/AboutAndContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted relative">
      <div 
        className="fixed inset-0 z-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/fb753728-63bf-457d-8564-d0ddb13a616f/files/2ebe03f8-a7d1-41bb-996a-f4fce10c1f29.jpg)'
        }}
      />
      <div className="relative z-10">
        <Header />
        <HeroAndStats />
        <CriteriaAndBenefits />
        <FAQ />
        <AboutAndContact />
      </div>
    </div>
  );
};

export default Index;