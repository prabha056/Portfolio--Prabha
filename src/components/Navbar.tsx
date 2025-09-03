import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-medium'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gradient">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item}
              </button>
            ))}
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth">
              <Download size={18} className="mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-md shadow-large">
            <div className="flex flex-col p-6 space-y-4">
              {['Home', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item}
                </button>
              ))}
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth w-full mt-4">
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;