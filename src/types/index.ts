export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string[];
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'AI/ML' | 'Programming'  | 'Cloud' | 'Tools';
  level: number; // 1-5
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface NavLink {
  id: string;
  title: string;
  path: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}