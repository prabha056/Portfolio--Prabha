import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Instagram, Facebook, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    description: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', mobile: '', description: '' });
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:john@example.com', label: 'Gmail' },
    { icon: Instagram, href: 'https://instagram.com/johndoe', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/johndoe', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">john@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Mobile</p>
                    <p className="text-muted-foreground">+91 12345 67890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-lg hover:bg-secondary transition-smooth card-shadow hover:card-shadow-large animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-label={label}
                  >
                    <Icon size={24} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl card-shadow space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-border focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
                  Mobile No
                </label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full border-border focus:border-primary"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  Description *
                </label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border-border focus:border-primary min-h-[120px]"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 John Doe. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;