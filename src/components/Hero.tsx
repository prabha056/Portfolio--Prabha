import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/developer-hero.png';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">John Doe</span>
              </h1>
              <div className="h-20 flex items-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-accent transition-smooth">
                  {titles[currentTitle]}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Passionate about creating beautiful, functional web applications 
                that solve real-world problems. Let's build something amazing together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:john@example.com' }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-3 rounded-lg bg-card hover:bg-secondary transition-smooth card-shadow hover:card-shadow-large animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon size={24} className="text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Developer illustration" 
                className="w-full max-w-lg h-auto animate-float"
              />
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-primary rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;