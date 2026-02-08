'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lang } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiPython,
  SiStreamlit,
  SiDotnet,
  SiDocker,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from 'react-icons/si';
import { FaCode, FaDatabase, FaChartBar } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

interface ProjectsProps {
  lang: Lang;
  content: {
    title: string;
    items: Project[];
  };
}

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'React': SiReact,
  'Django': SiDjango,
  'PostgreSQL': SiPostgresql,
  'Python': SiPython,
  'OpenCV': SiPython,
  'PowerBI': FaChartBar,
  'Pandas': SiPython,
  'Excel': FaDatabase,
  'SQL': SiPostgresql,
  'Streamlit': SiStreamlit,
  'Seaborn': SiPython,
  'Matplotlib': SiPython,
  'Numpy': SiPython,
  'TypeScript': SiTypescript,
  'Tailwind': SiTailwindcss,
  'Firebase': SiFirebase,
  'ASP.NET Core 8': SiDotnet,
  '.NET 8': SiDotnet,
  'Docker': SiDocker,
  'JWT': SiDotnet,
  'C#': FaCode,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'JavaScript': SiJavascript,
  'SendGrid API': FaCode,
  'In-Memory Caching': FaDatabase,
  'Domain-Driven Design': FaCode,
  'Patrón Repositorio': FaCode,
  'Inyección de Dependencias': FaCode,
  'Clean Architecture': FaCode,
  'Rackspace': FaDatabase,
};

const techColors: Record<string, string> = {
  'React': 'text-cyan-400',
  'Django': 'text-green-700',
  'PostgreSQL': 'text-blue-700',
  'Python': 'text-blue-500',
  'PowerBI': 'text-yellow-600',
  'Streamlit': 'text-red-500',
  'TypeScript': 'text-blue-600',
  'Tailwind': 'text-cyan-500',
  'Firebase': 'text-orange-500',
  'ASP.NET Core 8': 'text-purple-600',
  '.NET 8': 'text-purple-600',
  'Docker': 'text-blue-500',
  'C#': 'text-purple-700',
  'HTML': 'text-orange-600',
  'CSS': 'text-blue-600',
  'JavaScript': 'text-yellow-500',
};

const levelLabels = {
  beginner: { es: 'Principiante', en: 'Beginner', color: 'bg-green-500/10 text-green-700 dark:text-green-400' },
  intermediate: { es: 'Intermedio', en: 'Intermediate', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400' },
  advanced: { es: 'Avanzado', en: 'Advanced', color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400' },
};

function ProjectCard({ project, index, lang }: { project: Project; index: number; lang: Lang }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = project.description.length > 150;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow group">
        <CardHeader>
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex -space-x-2">
              {project.techStack.slice(0, 3).map((tech, idx) => {
                const Icon = techIcons[tech];
                const colorClass = techColors[tech] || 'text-primary';
                
                return Icon ? (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full bg-background border-2 border-card flex items-center justify-center"
                  >
                    <Icon className={`w-6 h-6 ${colorClass}`} />
                  </div>
                ) : null;
              })}
            </div>
            {project.level && (
              <Badge className={`${levelLabels[project.level].color} text-xs`}>
                {levelLabels[project.level][lang]}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {shouldTruncate && !isExpanded
              ? `${project.description.slice(0, 150)}...`
              : project.description}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 text-primary hover:underline inline-flex items-center gap-1 text-xs font-medium"
              >
                {isExpanded ? (
                  <>
                    {lang === 'es' ? 'Ver menos' : 'Read less'}
                    <ChevronUp className="h-3 w-3" />
                  </>
                ) : (
                  <>
                    {lang === 'es' ? 'Ver más' : 'Read more'}
                    <ChevronDown className="h-3 w-3" />
                  </>
                )}
              </button>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button size="sm" variant="outline" asChild className="flex-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          {project.demoUrl && (
            <Button size="sm" asChild className="flex-1">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function Projects({ lang, content }: ProjectsProps) {
  // Sort projects by level: advanced -> intermediate -> beginner
  const levelOrder = { advanced: 0, intermediate: 1, beginner: 2 };
  const sortedProjects = [...content.items].sort((a, b) => {
    const levelA = a.level ? levelOrder[a.level] : 999;
    const levelB = b.level ? levelOrder[b.level] : 999;
    return levelA - levelB;
  });

  return (
    <section id="proyectos" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {content.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
