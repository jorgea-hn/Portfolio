export type Language = 'en' | 'es';
export type Lang = Language; // Alias for convenience

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string; // Optional
  level?: 'beginner' | 'intermediate' | 'advanced';
  image?: string; // Path to image (we'll use placeholders or generate them later)
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    items: Project[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  nav: {
    home: string;
    projects: string;
    skills: string;
    contact: string;
  };
  footer: {
    copyright: string;
    role: string;
  }
}
