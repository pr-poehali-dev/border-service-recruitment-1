import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const SVOBenefits = () => {
  return (
    <section id="svo" className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white" variant="default">
            Специальные условия
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Для участников СВО
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Пограничная служба ФСБ приветствует участников специальной военной операции. Для вас — особые условия поступления и дополнительные льготы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          <Card className="border-primary/40 hover-scale group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 pulse-glow">
                  <Icon name="Medal" className="text-primary-foreground" size={32} />
                </div>
                <div>
                  <CardTitle className="text-2xl">Упрощенное поступление</CardTitle>
                  <CardDescription className="text-base">Приоритет при отборе кандидатов</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Зачисление вне конкурса при соответствии базовым требованиям",
                  "Освобождение от части физических нормативов",
                  "Ускоренное прохождение проверок безопасности",
                  "Сокращенные сроки рассмотрения документов"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-secondary/40 hover-scale group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0 pulse-glow">
                  <Icon name="TrendingUp" className="text-primary-foreground" size={32} />
                </div>
                <div>
                  <CardTitle className="text-2xl">Повышенный оклад</CardTitle>
                  <CardDescription className="text-base">Дополнительные выплаты</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Стартовый оклад от 100 000 рублей",
                  "Надбавка за боевой опыт до 50%",
                  "Единовременная выплата при поступлении",
                  "Зачет срока службы в СВО в выслугу лет"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Icon name="CheckCircle2" className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {[
            {
              icon: "Home",
              title: "Жилье в первую очередь",
              description: "Приоритет в получении служебного жилья и военной ипотеки до 8 млн ₽"
            },
            {
              icon: "Heart",
              title: "Реабилитация",
              description: "Программы восстановления здоровья в лучших санаториях МО и ФСБ"
            },
            {
              icon: "Users",
              title: "Поддержка семьи",
              description: "Расширенный соцпакет для членов семьи, компенсации и путевки"
            }
          ].map((item, index) => (
            <Card key={index} className="text-center hover-scale group border-primary/20">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform pulse-glow">
                  <Icon name={item.icon as any} className="text-primary" size={28} />
                </div>
                <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-primary/30">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center pulse-glow">
                  <Icon name="Shield" className="text-primary-foreground" size={40} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">Ваш опыт — наша сила</h4>
                <p className="text-muted-foreground mb-4">
                  Боевой опыт участников СВО высоко ценится в пограничной службе. Мы предлагаем достойное продолжение военной карьеры с гарантированной стабильностью и социальной защитой.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="gap-2"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Icon name="FileText" size={20} />
                    Подать заявку
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="gap-2"
                    onClick={() => {
                      const phone = '+79080019059';
                      const message = 'Здравствуйте! Я участник СВО, хотел бы узнать подробнее об условиях поступления в пограничную службу ФСБ.';
                      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                      const telegramUrl = `https://t.me/unshakeble_justice?text=${encodeURIComponent(message)}`;
                      if (isMobile) {
                        window.location.href = telegramUrl;
                      } else {
                        window.open(telegramUrl, '_blank');
                      }
                    }}
                  >
                    <Icon name="MessageCircle" size={20} />
                    Задать вопрос
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SVOBenefits;
