export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'ai' | 'iot';
}

export interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
} 