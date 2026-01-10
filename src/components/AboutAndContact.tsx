import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AboutAndContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent, messenger?: 'telegram' | 'whatsapp' | 'vk') => {
    e.preventDefault();
    
    const message = `🆕 Новая заявка\n\n👤 ФИО: ${formData.fullName}\n📧 Email: ${formData.email}\n📱 Телефон: ${formData.phone}\n📝 Доп. информация: ${formData.message || 'Не указана'}`;
    const contactPhone = "+79080019059";
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let url = '';
    
    switch(messenger) {
      case 'whatsapp':
        url = `https://wa.me/${contactPhone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        break;
      case 'vk':
        url = `https://vk.me/public227810851?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        break;
      case 'telegram':
      default:
        url = `https://t.me/unshakeble_justice?text=${encodeURIComponent(message)}`;
        if (isMobile) {
          window.location.href = url;
        } else {
          window.open(url, '_blank');
        }
        break;
    }
    
    alert("Спасибо за вашу заявку! Вы будете перенаправлены в мессенджер.");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <>
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

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-center">Отправить заявку через:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button 
                        type="button"
                        size="lg" 
                        className="gap-2 bg-[#0088cc] hover:bg-[#0077b5]"
                        onClick={(e) => handleSubmit(e, 'telegram')}
                      >
                        <Icon name="Send" size={20} />
                        Telegram
                      </Button>
                      
                      <Button 
                        type="button"
                        size="lg" 
                        className="gap-2 bg-[#25D366] hover:bg-[#20BA5A]"
                        onClick={(e) => handleSubmit(e, 'whatsapp')}
                      >
                        <Icon name="MessageCircle" size={20} />
                        WhatsApp
                      </Button>
                      
                      <Button 
                        type="button"
                        size="lg" 
                        className="gap-2 bg-[#0077FF] hover:bg-[#0066DD]"
                        onClick={(e) => handleSubmit(e, 'vk')}
                      >
                        <Icon name="Send" size={20} />
                        VK
                      </Button>
                    </div>
                  </div>

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
                        <p className="text-sm text-muted-foreground">+7-908-001-90-59</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <p className="text-sm text-muted-foreground">maxlevichev7@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-sm">Адрес</p>
                        <p className="text-sm text-muted-foreground">г. Курган, 7-й микрорайон, д. 8</p>
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
                    <h4 className="font-bold">Пограничное управление</h4>
                    <p className="text-xs text-muted-foreground">по Курганской и Тюменской областям</p>
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
                  <li><a href="https://fsb.ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Официальный сайт ФСБ</a></li>
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

            <Separator className="my-8" />

            <div className="flex justify-center items-center gap-3 text-xs text-muted-foreground/70">
              <span>Разработано</span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-colors">
                <img 
                  src="https://cdn.poehali.dev/projects/fb753728-63bf-457d-8564-d0ddb13a616f/files/71d3fc54-2ff8-4cc6-868e-3af8aad7b0d7.jpg" 
                  alt="levimax logo" 
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  levimax
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutAndContact;