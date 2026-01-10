import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const SalaryCalculator = () => {
  const [rank, setRank] = useState<'soldier' | 'sergeant' | 'officer'>('soldier');
  const [years, setYears] = useState(0);
  const [isSVO, setIsSVO] = useState(false);
  const [hasFamily, setHasFamily] = useState(false);

  const baseOklads = {
    soldier: 35000,
    sergeant: 45000,
    officer: 60000
  };

  const baseOklad = baseOklads[rank];
  
  const experienceBonus = Math.min(years * 0.1, 0.4);
  
  const svoBonus = isSVO ? 0.5 : 0;
  
  const familyBonus = hasFamily ? 0.15 : 0;
  
  const positionBonus = 0.3;
  
  const totalOklad = baseOklad * (1 + experienceBonus + svoBonus + familyBonus + positionBonus);
  
  const yearlyBonus = totalOklad * 3;
  
  const monthlyTotal = totalOklad;
  const yearlyTotal = monthlyTotal * 12 + yearlyBonus;

  return (
    <section id="calculator" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">Расчет дохода</Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор зарплаты</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте свой потенциальный доход в пограничной службе с учетом надбавок и выслуги лет
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover-scale border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" className="text-primary" size={24} />
                  Параметры расчета
                </CardTitle>
                <CardDescription>Укажите ваши данные для расчета</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Звание</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'soldier', label: 'Рядовой', icon: 'User' },
                      { value: 'sergeant', label: 'Сержант', icon: 'Star' },
                      { value: 'officer', label: 'Офицер', icon: 'Award' }
                    ].map((item) => (
                      <button
                        key={item.value}
                        onClick={() => setRank(item.value as any)}
                        className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                          rank === item.value
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Icon name={item.icon as any} size={24} className={rank === item.value ? 'text-primary' : 'text-muted-foreground'} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-semibold">
                    Выслуга лет: <span className="text-primary">{years} {years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}</span>
                  </Label>
                  <Slider
                    value={[years]}
                    onValueChange={(value) => setYears(value[0])}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0 лет</span>
                    <span>15 лет</span>
                    <span>30 лет</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label className="text-base font-semibold">Дополнительные условия</Label>
                  
                  <div
                    onClick={() => setIsSVO(!isSVO)}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      isSVO ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isSVO ? 'bg-primary' : 'bg-muted'
                      }`}>
                        <Icon name={isSVO ? "CheckCircle2" : "Circle"} size={20} className={isSVO ? 'text-primary-foreground' : 'text-muted-foreground'} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Участник СВО</p>
                        <p className="text-xs text-muted-foreground">Надбавка +50% к окладу</p>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => setHasFamily(!hasFamily)}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      hasFamily ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        hasFamily ? 'bg-primary' : 'bg-muted'
                      }`}>
                        <Icon name={hasFamily ? "CheckCircle2" : "Circle"} size={20} className={hasFamily ? 'text-primary-foreground' : 'text-muted-foreground'} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Наличие семьи</p>
                        <p className="text-xs text-muted-foreground">Надбавка +15% к окладу</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Icon name="Wallet" className="text-primary" size={28} />
                    Расчет дохода
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground">Базовый оклад</span>
                      <span className="font-semibold">{baseOklad.toLocaleString()} ₽</span>
                    </div>

                    {experienceBonus > 0 && (
                      <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                        <span className="text-sm text-muted-foreground">За выслугу ({(experienceBonus * 100).toFixed(0)}%)</span>
                        <span className="font-semibold text-green-600">+{(baseOklad * experienceBonus).toLocaleString()} ₽</span>
                      </div>
                    )}

                    {svoBonus > 0 && (
                      <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                        <span className="text-sm text-muted-foreground">Участник СВО (+50%)</span>
                        <span className="font-semibold text-green-600">+{(baseOklad * svoBonus).toLocaleString()} ₽</span>
                      </div>
                    )}

                    {familyBonus > 0 && (
                      <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                        <span className="text-sm text-muted-foreground">Семейная (+15%)</span>
                        <span className="font-semibold text-green-600">+{(baseOklad * familyBonus).toLocaleString()} ₽</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground">Должностная (+30%)</span>
                      <span className="font-semibold text-green-600">+{(baseOklad * positionBonus).toLocaleString()} ₽</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold">Итого в месяц</span>
                      <span className="text-2xl font-bold text-primary">{Math.round(monthlyTotal).toLocaleString()} ₽</span>
                    </div>
                    <p className="text-xs text-muted-foreground">До вычета налогов (НДФЛ 13%)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm">На руки (после НДФЛ 13%)</span>
                      <span className="font-bold">{Math.round(monthlyTotal * 0.87).toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm">Годовая премия (3 оклада)</span>
                      <span className="font-bold text-green-600">+{Math.round(yearlyBonus).toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-secondary/20 to-accent/20">
                      <span className="font-semibold">Годовой доход</span>
                      <span className="text-xl font-bold text-secondary">{Math.round(yearlyTotal * 0.87).toLocaleString()} ₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/40 bg-accent/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>
                        <strong className="text-foreground">Примечание:</strong> Расчет является приблизительным и может варьироваться в зависимости от региона службы, дополнительных поручений и других факторов.
                      </p>
                      <p>
                        Не учтены дополнительные выплаты: материальная помощь, компенсации за отпуск, премии за выполнение задач особой важности.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: "Home", label: "Жилье", value: "Служебное или ипотека" },
              { icon: "HeartPulse", label: "Медицина", value: "Для семьи бесплатно" },
              { icon: "Plane", label: "Отпуск", value: "45-50 суток + проезд" },
              { icon: "GraduationCap", label: "Обучение", value: "Бесплатное высшее" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover-scale border-primary/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 pulse-glow">
                    <Icon name={item.icon as any} className="text-primary" size={24} />
                  </div>
                  <p className="font-semibold mb-1 text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryCalculator;
