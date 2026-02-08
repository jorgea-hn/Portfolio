'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  content: {
    copyright: string;
    role: string;
  };
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-10 w-10" />
              <span className="font-bold text-xl">Jorge Henríquez</span>
            </div>
            <p className="text-muted-foreground text-center md:text-left text-sm max-w-xs">
              {content.role}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/jorgea-hn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-henriquez-novoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:jorgeahenriqueznovoa@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">{content.copyright}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
