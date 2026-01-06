import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroAndStats = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
              Набор 2026
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Служба на страже границ Родины
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Стань частью элитного подразделения ФСБ России. Защищай государственные интересы, получай достойную зарплату и социальные гарантии.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="FileText" size={20} />
                Подать заявку
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Info" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "Users", value: "15 000+", label: "Военнослужащих" },
              { icon: "Award", value: "20+", label: "Льгот и гарантий" },
              { icon: "TrendingUp", value: "До 100%", label: "Прибавка к пенсии" },
              { icon: "Home", value: "100%", label: "Жилищная программа" }
            ].map((stat, index) => (
              <div key={index} className="text-center fade-in-up float hover-scale cursor-pointer" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Icon name={stat.icon as any} size={28} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAndStats;