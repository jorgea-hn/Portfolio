'use client';

import { motion } from 'framer-motion';
import { Lang } from '@/lib/types';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiCanva,
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiTableau,
  SiAmazon,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiPostman,
  SiNextdotjs,
  SiSpring,
  SiGo,
  SiAngular,
  SiVuedotjs,
  SiFastapi,
  SiFlask,
  SiDotnet,
} from 'react-icons/si';
import { FaChartBar, FaFileExcel, FaJava } from 'react-icons/fa';

interface SkillsProps {
  lang: Lang;
  content: {
    title: string;
    categories: {
      title: string;
      skills: string[];
    }[];
  };
}

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Illustrator': SiAdobeillustrator,
  'Photoshop': SiAdobephotoshop,
  'Figma': SiFigma,
  'Canva': SiCanva,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'Python': SiPython,
  'Django': SiDjango,
  'Java': FaJava,
  'Next.js': SiNextdotjs,
  'Spring Boot': SiSpring,
  'Go': SiGo,
  'Angular': SiAngular,
  'Vue': SiVuedotjs,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'C#': SiDotnet,
  '.NET': SiDotnet,
  'Pandas': SiPandas,
  'Numpy': SiNumpy,
  'Matplotlib': SiPlotly,
  'Seaborn': SiPlotly,
  'PowerBI': FaChartBar,
  'Excel': FaFileExcel,
  'Tableau': SiTableau,
  'AWS': SiAmazon,
  'Oracle': SiOracle,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'SQLite': SiSqlite,
  'MongoDB': SiMongodb,
  'Postman': SiPostman,
};

const skillColors: Record<string, string> = {
  'Illustrator': 'text-orange-600',
  'Photoshop': 'text-blue-600',
  'Figma': 'text-purple-600',
  'Canva': 'text-cyan-500',
  'JavaScript': 'text-yellow-500',
  'React': 'text-cyan-400',
  'Python': 'text-blue-500',
  'Django': 'text-green-700',
  'Java': 'text-red-600',
  'Next.js': 'text-black dark:text-white',
  'Spring Boot': 'text-green-600',
  'Go': 'text-cyan-500',
  'Angular': 'text-red-600',
  'Vue': 'text-green-500',
  'FastAPI': 'text-teal-500',
  'Flask': 'text-gray-700',
  'C#': 'text-purple-600',
  '.NET': 'text-purple-600',
  'Pandas': 'text-blue-600',
  'Numpy': 'text-blue-400',
  'Matplotlib': 'text-blue-500',
  'Seaborn': 'text-teal-500',
  'PowerBI': 'text-yellow-600',
  'Excel': 'text-green-600',
  'Tableau': 'text-blue-500',
  'AWS': 'text-orange-500',
  'Oracle': 'text-red-600',
  'MySQL': 'text-blue-600',
  'PostgreSQL': 'text-blue-700',
  'SQLite': 'text-blue-500',
  'MongoDB': 'text-green-600',
  'Postman': 'text-orange-600',
};

export function Skills({ lang, content }: SkillsProps) {
  return (
    <section id="skill" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {content.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {content.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-6 text-center border-b pb-3">
                {category.title}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill];
                  const colorClass = skillColors[skill] || 'text-primary';
                  
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-muted group-hover:scale-110 transition-all duration-200">
                        {Icon ? (
                          <Icon className={`w-8 h-8 ${colorClass}`} />
                        ) : (
                          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                            {skill.charAt(0)}
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
