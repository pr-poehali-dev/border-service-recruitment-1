import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroAndStats = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Основной фоновый градиент */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 -z-10" />
        
        {/* Анимированные круги */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Сетка */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb,59,130,246),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb,59,130,246),0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] -z-10" />
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
      <section className="py-16 bg-card/50 backdrop-blur relative overflow-hidden">
        {/* Фоновые элементы для статистики */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 -z-10" />
        <div className="absolute -top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "Users", value: "25 000+", label: "Военнослужащих" },
              { icon: "Wallet", value: "80 000 ₽", label: "Средняя зарплата" },
              { icon: "TrendingUp", value: "До 85%", label: "Пенсия от оклада" },
              { icon: "Home", value: "6,5 млн ₽", label: "Военная ипотека" }
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