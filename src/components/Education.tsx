import { useRef } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const educationData = [
  {
    id: 1,
    degree: 'B.E Degree',
    institution: 'ABC Engineering College',
    course: 'Computer Science & Engineering',
    year: '2020-2024',
    description: 'Graduated with First Class Honours. Specialized in software development, algorithms, and system design.',
    icon: GraduationCap
  },
  {
    id: 2,
    degree: 'HSC',
    institution: 'XYZ Higher Secondary School',
    course: 'Computer Science Stream',
    year: '2018-2020',
    description: 'Completed with 92% marks. Focused on Mathematics, Physics, Chemistry, and Computer Science.',
    icon: Award
  },
  {
    id: 3,
    degree: 'SSLC',
    institution: 'PQR High School',
    course: 'Secondary Education',
    year: '2017-2018',
    description: 'Completed with 95% marks. Active participant in science exhibitions and coding competitions.',
    icon: Award
  },
  {
    id: 4,
    degree: 'MERN Stack Certification',
    institution: 'Tech Academy Online',
    course: 'Full Stack Web Development',
    year: '2023',
    description: 'Comprehensive certification covering MongoDB, Express.js, React, and Node.js with hands-on projects.',
    icon: Award
  }
];

const Education = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Education Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic path and certifications that shaped my development skills
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="hidden md:flex ml-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="flex-shrink-0 w-80 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flip-card h-64">
                  <div className="flip-card-inner relative w-full h-full">
                    {/* Front of card */}
                    <div className="flip-card-front absolute inset-0 bg-card rounded-xl p-6 card-shadow flex flex-col items-center justify-center text-center">
                      <edu.icon size={48} className="text-primary mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground">{edu.year}</p>
                    </div>

                    {/* Back of card */}
                    <div className="flip-card-back absolute inset-0 bg-gradient-primary rounded-xl p-6 card-shadow flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-primary-foreground mb-2">
                        {edu.institution}
                      </h4>
                      <p className="text-primary-foreground/90 font-medium mb-2">
                        {edu.course}
                      </p>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                      <div className="mt-4 text-primary-foreground/90 font-semibold">
                        {edu.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;