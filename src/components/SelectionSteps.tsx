import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SelectionSteps = () => {
  const steps = [
    {
      number: "01",
      icon: "FileText",
      title: "Подача документов",
      description: "Заполнение анкеты и предоставление необходимых документов. Первичная проверка соответствия базовым требованиям.",
      duration: "1-2 недели"
    },
    {
      number: "02",
      icon: "Heart",
      title: "Медосмотр",
      description: "Полное медицинское освидетельствование в военно-врачебной комиссии. Проверка физического состояния здоровья.",
      duration: "2-3 недели"
    },
    {
      number: "03",
      icon: "Brain",
      title: "Психологическое тестирование",
      description: "Оценка психологической устойчивости, личностных качеств и мотивации к службе.",
      duration: "1 неделя"
    },
    {
      number: "04",
      icon: "Dumbbell",
      title: "Физические испытания",
      description: "Сдача нормативов по физической подготовке: бег, подтягивание, плавание, силовые упражнения.",
      duration: "1-2 дня"
    },
    {
      number: "05",
      icon: "ShieldCheck",
      title: "Проверка службой безопасности",
      description: "Углубленная проверка биографии, окружения, наличия судимостей. Беседы с родственниками и знакомыми.",
      duration: "1-2 месяца"
    },
    {
      number: "06",
      title: "Собеседование с комиссией",
      description: "Финальное интервью с представителями кадрового отдела и руководством. Оценка мотивации и профпригодности.",
      duration: "1 день"
    },
    {
      number: "07",
      icon: "Award",
      title: "Принятие решения",
      description: "Рассмотрение всех результатов отбора и вынесение окончательного решения о приеме на службу.",
      duration: "1-2 недели"
    },
    {
      number: "08",
      icon: "GraduationCap",
      title: "Обучение",
      description: "Начальная подготовка в учебном центре ФСБ. Изучение основ службы, законодательства, специальных дисциплин.",
      duration: "3-6 месяцев"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Процесс отбора</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Этапы отбора кандидатов
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный цикл отбора занимает от 2 до 6 месяцев и включает комплексную проверку всех качеств кандидата
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Number badge */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10 border-4 border-background shadow-lg">
                    <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Card */}
                  <Card className={`flex-1 hover-scale ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} ml-24 md:ml-0`}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        {step.icon && (
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon name={step.icon as any} className="text-primary" size={24} />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-xl font-bold">{step.title}</h4>
                            <Badge variant="outline" className="ml-2 whitespace-nowrap">
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Info" className="text-primary-foreground" size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold mb-1">Важная информация</h4>
                    <p className="text-sm text-muted-foreground">
                      Сроки прохождения этапов могут варьироваться в зависимости от региона и текущей загруженности комиссий
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSteps;
