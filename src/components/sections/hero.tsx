'use client';

import { Lang } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroProps {
  lang: Lang;
  content: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
}

export function Hero({ lang, content }: HeroProps) {
  const handleSendEmail = () => {
    const email = "jorgeahenriqueznovoa@gmail.com";
    const subject = "Consulta desde tu sitio web";
    const body = "Hola Jorge,\\n\\nMe gustaría ponerme en contacto contigo para discutir ...\\n\\nSaludos,\\n[Tu Nombre]";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="introduccion" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <div className="flex justify-center mb-6">
          <img src="/yo.png" alt="Jorge Henriquez" className="w-24 md:w-36 lg:w-40 rounded-full" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {content.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          {content.subtitle}
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          {content.description}
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Button size="lg" onClick={handleSendEmail}>
            {content.cta}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
