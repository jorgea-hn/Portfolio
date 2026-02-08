'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '../language-switcher';
import { ModeToggle } from '../mode-toggle';
import { Lang } from '@/lib/types';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface HeaderProps {
  lang: Lang;
  content: {
    home: string;
    projects: string;
    skills: string;
    contact: string;
  };
}

export function Header({ lang, content }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: `/${lang}#introduccion`, label: content.home },
    { href: `/${lang}#proyectos`, label: content.projects },
    { href: `/${lang}#skill`, label: content.skills },
    { href: `/${lang}#contacto`, label: content.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="font-bold text-xl hidden sm:inline-block">Jorge Henríquez</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/jorgea-hn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-henriquez-novoa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <LanguageSwitcher currentLang={lang} />
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher currentLang={lang} />
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t">
              <a
                href="https://github.com/jorgea-hn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jorge-henriquez-novoa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
