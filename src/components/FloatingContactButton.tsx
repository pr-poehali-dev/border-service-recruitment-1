import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contactPhone = "+79080019059";

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Здравствуйте! Хочу узнать о службе в пограничных органах.');
    window.open(`https://wa.me/${contactPhone}?text=${message}`, '_blank');
  };

  const handleTelegram = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const telegramUrl = 'https://t.me/unshakeble_justice';
    if (isMobile) {
      window.location.href = telegramUrl;
    } else {
      window.open(telegramUrl, '_blank');
    }
  };

  const handleVK = () => {
    window.open('https://vk.me/public227810851', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Messenger buttons */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-2 fade-in duration-200">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg gap-2 rounded-full"
            onClick={handleWhatsApp}
          >
            <Icon name="MessageCircle" size={20} />
            WhatsApp
          </Button>
          
          <Button
            size="lg"
            className="bg-[#0088cc] hover:bg-[#0077b5] text-white shadow-lg gap-2 rounded-full"
            onClick={handleTelegram}
          >
            <Icon name="Send" size={20} />
            Telegram
          </Button>
          
          <Button
            size="lg"
            className="bg-[#0077FF] hover:bg-[#0066DD] text-white shadow-lg gap-2 rounded-full"
            onClick={handleVK}
          >
            <Icon name="Send" size={20} />
            VK
          </Button>
        </div>
      )}

      {/* Main toggle button */}
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-xl hover:scale-110 transition-transform bg-primary hover:bg-primary/90"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name={isOpen ? "X" : "MessageSquare"} size={24} />
      </Button>
    </div>
  );
};

export default FloatingContactButton;
