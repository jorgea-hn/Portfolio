'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Lang } from '@/lib/types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Lang;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchLanguage = (newLang: Lang) => {
    // Get current hash if any
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    
    // Replace the language segment in the pathname
    const newPathname = pathname.replace(/^\/(en|es)/, `/${newLang}`);
    
    // Use window.location.replace for guaranteed full page reload
    if (typeof window !== 'undefined') {
      window.location.replace(newPathname + hash);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Globe className="h-4 w-4 mr-2" />
          {currentLang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage('es')}>
          🇪🇸 Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('en')}>
          🇬🇧 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
