import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CriteriaAndBenefits = () => {
  return (
    <>
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
    </>
  );
};

export default CriteriaAndBenefits;
