import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Icon name="Shield" className="text-primary-foreground" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Пограничное управление</h1>
            <p className="text-sm text-muted-foreground">по Курганской и Тюменской областям</p>
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
  );
};

export default Header;