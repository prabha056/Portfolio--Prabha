import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'Full-stack MERN application with payment integration and admin dashboard',
    github: 'https://github.com/johndoe/ecommerce',
    live: 'https://ecommerce-demo.com',
    code: 'https://github.com/johndoe/ecommerce'
  },
  {
    id: 2,
    name: 'Task Management App',
    description: 'React-based productivity app with drag-and-drop functionality',
    github: 'https://github.com/johndoe/taskmanager',
    live: 'https://taskmanager-demo.com',
    code: 'https://github.com/johndoe/taskmanager'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'Real-time weather app using OpenWeather API with location services',
    github: 'https://github.com/johndoe/weather',
    live: 'https://weather-demo.com',
    code: 'https://github.com/johndoe/weather'
  },
  {
    id: 4,
    name: 'Social Media Clone',
    description: 'Instagram-like app with photo sharing and real-time chat features',
    github: 'https://github.com/johndoe/social',
    live: 'https://social-demo.com',
    code: 'https://github.com/johndoe/social'
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Responsive portfolio built with React and modern animations',
    github: 'https://github.com/johndoe/portfolio',
    live: 'https://johndoe-portfolio.com',
    code: 'https://github.com/johndoe/portfolio'
  },
  {
    id: 6,
    name: 'Blog Platform',
    description: 'Content management system with markdown support and SEO optimization',
    github: 'https://github.com/johndoe/blog',
    live: 'https://blog-demo.com',
    code: 'https://github.com/johndoe/blog'
  }
];

const Projects = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flip-card h-80">
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front of card */}
                  <div className="flip-card-front absolute inset-0 bg-card rounded-xl p-8 card-shadow flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Code size={32} className="text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back absolute inset-0 bg-gradient-primary rounded-xl p-6 card-shadow flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-primary-foreground mb-4">
                      {project.name}
                    </h4>
                    <p className="text-primary-foreground/90 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full bg-secondary/20 text-primary-foreground border-primary-foreground/20 hover:bg-secondary/30"
                        onClick={() => handleLinkClick(project.github)}
                      >
                        <Github size={16} className="mr-2" />
                        GitHub Repo
                      </Button>
                      
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full bg-secondary/20 text-primary-foreground border-primary-foreground/20 hover:bg-secondary/30"
                        onClick={() => handleLinkClick(project.code)}
                      >
                        <Code size={16} className="mr-2" />
                        View Code
                      </Button>
                      
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full bg-secondary/20 text-primary-foreground border-primary-foreground/20 hover:bg-secondary/30"
                        onClick={() => handleLinkClick(project.live)}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Visit Site
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;