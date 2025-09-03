const skillsData = [
  {
    name: 'HTML',
    icon: '🌐',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    name: 'CSS',
    icon: '🎨',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    url: 'https://www.mongodb.com/'
  },
  {
    name: 'React',
    icon: '⚛️',
    url: 'https://react.dev/'
  },
  {
    name: 'Node.js',
    icon: '💚',
    url: 'https://nodejs.org/'
  },
  {
    name: 'Express',
    icon: '🚀',
    url: 'https://expressjs.com/'
  },
  {
    name: 'Next.js',
    icon: '▲',
    url: 'https://nextjs.org/'
  },
  {
    name: 'MySQL',
    icon: '🗃️',
    url: 'https://www.mysql.com/'
  },
  {
    name: 'Python',
    icon: '🐍',
    url: 'https://www.python.org/'
  }
];

const Skills = () => {
  const handleSkillClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="skills" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="group cursor-pointer animate-bounce-slow"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleSkillClick(skill.url)}
            >
              <div className="bg-card rounded-xl p-6 text-center card-shadow hover:card-shadow-large transition-spring hover:scale-110 hover:-translate-y-2">
                <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Click on any skill to visit its official documentation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;