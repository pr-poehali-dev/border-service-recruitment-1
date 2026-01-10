import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CriteriaAndBenefits = () => {
  return (
    <>
      {/* Criteria Section */}
      <section id="criteria" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
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
                description: "От 18 до 40 лет",
                items: ["Для офицеров до 45 лет", "После военной службы приоритет", "Контрактники любого возраста"]
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
                items: ["Бег 3 км — до 13:00 мин", "Подтягивание — от 10 раз", "Отжимания — от 40 раз"]
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Проверка службами",
                items: ["Форма допуска к гостайне", "Проверка родственников", "Собеседование"]
              }
            ].map((criteria, index) => (
              <Card key={index} className="hover-scale cursor-pointer transition-all fade-in-up group border-primary/20 hover:border-primary/40" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-glow">
                    <Icon name={criteria.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{criteria.title}</CardTitle>
                  <CardDescription>{criteria.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {criteria.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}>
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
      <section id="benefits" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
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
                  "Оклад от 80 000 рублей (2026)",
                  "Надбавки за выслугу до 40%",
                  "Премии до 3 окладов в год",
                  "Единовременные выплаты"
                ]
              },
              {
                icon: "Home",
                title: "Жилищная программа",
                items: [
                  "Военная ипотека до 6,5 млн ₽",
                  "Служебное жилье с первого дня",
                  "Субсидия до 3,5 млн ₽ после 20 лет",
                  "Компенсация ЖКХ до 100%"
                ]
              },
              {
                icon: "HeartPulse",
                title: "Медицинское обслуживание",
                items: [
                  "ДМС для военнослужащего и семьи",
                  "Ведомственные клиники ФСБ",
                  "Санатории Крыма и Сочи бесплатно",
                  "Бесплатные лекарства и операции"
                ]
              },
              {
                icon: "Plane",
                title: "Отпуск и отдых",
                items: [
                  "45-50 суток отпуска в год",
                  "Оплата проезда к месту отдыха",
                  "Дополнительно +15 суток за выслугу",
                  "Билеты для всей семьи"
                ]
              },
              {
                icon: "GraduationCap",
                title: "Образование",
                items: [
                  "Институт ФСБ — бесплатно",
                  "Стипендия 25-35 тыс. ₽/мес",
                  "Дети — квоты в вузы МВД/ФСБ",
                  "Второе высшее за счет службы"
                ]
              },
              {
                icon: "Trophy",
                title: "Пенсионное обеспечение",
                items: [
                  "Пенсия после 20 лет — 50-85% оклада",
                  "Средняя пенсия 40-60 тыс. ₽",
                  "Выплата 7 окладов при увольнении",
                  "Льготы ветеранам госслужбы"
                ]
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover-scale transition-all fade-in-up group border-primary/20 hover:border-primary/40 overflow-hidden relative" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform pulse-glow">
                      <Icon name={benefit.icon as any} className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}>
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
    </>
  );
};

export default CriteriaAndBenefits;