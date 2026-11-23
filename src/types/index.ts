export interface ImpactStory {
  headline: string;
  gap: string;
  action: string;
  result: string;
}

export interface ProjectItem {
  id: string;
  company: string;
  project: string;
  visibility: string;
  url: string | null;
  location: string;
  startDate: string;
  endDate: string;
  role: string;
  shortDescription: string;
  impactStory?: ImpactStory;
  highlights?: string[];
  parallelNote?: string;
  longDescription: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  technologies: string[];
  features?: string[];
  projectImage: string;
  projectLogo: string | null;
  isPersonal: boolean;
  showcaseOrder: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  emphasized?: boolean;
  skills: string[];
}
