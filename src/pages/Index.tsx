import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    alert("Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Shield" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Пограничная служба</h1>
              <p className="text-sm text-muted-foreground">ФСБ России</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#criteria" className="text-sm font-medium hover:text-primary transition-colors">Требования</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Льготы</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О службе</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

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
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={28} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section id="criteria" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Требования</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Критерии отбора кандидатов</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Служба в пограничных органах требует высокой подготовки и соответствия строгим критериям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "User",
                title: "Гражданство",
                description: "Гражданин Российской Федерации",
                items: ["Отсутствие двойного гражданства", "Постоянная регистрация", "Нет судимостей"]
              },
              {
                icon: "Calendar",
                title: "Возраст",
                description: "От 18 до 30 лет",
                items: ["Для офицеров до 35 лет", "Призывной возраст", "Физическая подготовка"]
              },
              {
                icon: "GraduationCap",
                title: "Образование",
                description: "Среднее или высшее",
                items: ["Аттестат или диплом", "Военное образование — преимущество", "Знание иностранных языков — плюс"]
              },
              {
                icon: "Heart",
                title: "Здоровье",
                description: "Годность категории А или Б",
                items: ["Медицинское освидетельствование", "Психологическое тестирование", "Отсутствие хронических заболеваний"]
              },
              {
                icon: "Activity",
                title: "Физподготовка",
                description: "Высокий уровень",
                items: ["Нормативы ГТО", "Бег 3 км — до 12:30 мин", "Подтягивание — от 12 раз"]
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Проверка службами",
                items: ["Форма допуска к гостайне", "Проверка родственников", "Собеседование"]
              }
            ].map((criteria, index) => (
              <Card key={index} className="hover-scale cursor-pointer transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={criteria.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{criteria.title}</CardTitle>
                  <CardDescription>{criteria.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {criteria.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Преимущества</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Льготы и социальные гарантии</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Служба в пограничных органах — это не только почетная миссия, но и стабильность для вас и вашей семьи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "Wallet",
                title: "Достойная зарплата",
                items: [
                  "Оклад от 50 000 рублей",
                  "Надбавки за выслугу лет",
                  "Премии и материальная помощь",
                  "13-я зарплата ежегодно"
                ]
              },
              {
                icon: "Home",
                title: "Жилищная программа",
                items: [
                  "Субсидия на покупку жилья",
                  "Служебное жилье на период службы",
                  "Участие в накопительной ипотечной системе",
                  "Компенсация коммунальных услуг"
                ]
              },
              {
                icon: "HeartPulse",
                title: "Медицинское обслуживание",
                items: [
                  "Бесплатное лечение для вас и семьи",
                  "Ведомственные госпитали и санатории",
                  "Путевки в санатории",
                  "Обеспечение лекарствами"
                ]
              },
              {
                icon: "Plane",
                title: "Отпуск и отдых",
                items: [
                  "45 суток основного отпуска",
                  "Бесплатный проезд к месту отдыха",
                  "Дополнительные отпуска",
                  "Компенсация проезда для семьи"
                ]
              },
              {
                icon: "GraduationCap",
                title: "Образование",
                items: [
                  "Бесплатное высшее образование",
                  "Курсы повышения квалификации",
                  "Льготы на обучение детей",
                  "Военные академии"
                ]
              },
              {
                icon: "Trophy",
                title: "Пенсионное обеспечение",
                items: [
                  "Выход на пенсию после 20 лет службы",
                  "До 100% от денежного довольствия",
                  "Увеличенная выслуга лет",
                  "Единовременное пособие при увольнении"
                ]
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover-scale transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon as any} className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">О нас</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Пограничная служба ФСБ России</h3>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Пограничная служба ФСБ России</strong> — федеральный орган исполнительной власти, осуществляющий функции по обеспечению безопасности и защите Государственной границы Российской Федерации.
                  </p>
                  <Separator className="my-6" />
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Icon name="Target" className="text-primary" size={20} />
                        Наши задачи
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2"><Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />Охрана государственной границы</li>
                        <li className="flex gap-2"><Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />Пресечение незаконного оборота через границу</li>
                        <li className="flex gap-2"><Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />Борьба с терроризмом и экстремизмом</li>
                        <li className="flex gap-2"><Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />Защита национальных интересов</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Icon name="Star" className="text-primary" size={20} />
                        Карьерные перспективы
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2"><Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />Быстрый карьерный рост</li>
                        <li className="flex gap-2"><Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />Возможность обучения за границей</li>
                        <li className="flex gap-2"><Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />Участие в международных операциях</li>
                        <li className="flex gap-2"><Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />Престиж и уважение в обществе</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: "Medal", title: "Награды", text: "Государственные награды за особые заслуги" },
                { icon: "Users", title: "Команда", text: "Работа в профессиональном коллективе" },
                { icon: "Globe", title: "География", text: "Служба в разных регионах страны" }
              ].map((item, index) => (
                <Card key={index} className="text-center hover-scale">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">Контакты</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Подать заявку</h3>
              <p className="text-muted-foreground">
                Заполните форму, и мы свяжемся с вами для проведения собеседования
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Полное имя <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="fullName"
                      placeholder="Иванов Иван Иванович"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivanov@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Дополнительная информация
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о себе, образовании, опыте службы..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Icon name="Send" size={20} />
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>

                <Separator className="my-8" />

                <div className="space-y-4">
                  <h4 className="font-semibold text-center mb-4">Контактная информация</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-sm">Телефон</p>
                        <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <p className="text-sm text-muted-foreground">recruit@fsb.gov.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-sm">Адрес</p>
                        <p className="text-sm text-muted-foreground">г. Москва, ул. Лубянка, д. 24</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-sm">Часы работы</p>
                        <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Пограничная служба</h4>
                    <p className="text-xs text-muted-foreground">ФСБ России</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Официальный сайт по набору кандидатов в пограничные органы Федеральной службы безопасности РФ
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Разделы</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#criteria" className="hover:text-primary transition-colors">Требования к кандидатам</a></li>
                  <li><a href="#benefits" className="hover:text-primary transition-colors">Льготы и гарантии</a></li>
                  <li><a href="#about" className="hover:text-primary transition-colors">О пограничной службе</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Полезные ссылки</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Официальный сайт ФСБ</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Вопросы и ответы</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Нормативные документы</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Карьера в ФСБ</a></li>
                </ul>
              </div>
            </div>

            <Separator className="mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2026 Пограничная служба ФСБ России. Все права защищены.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;