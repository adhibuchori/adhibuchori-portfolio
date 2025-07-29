export type ExperienceType = {
  title: string;
  company: string;
  companyImage: string;
  date: string;
  duration?: string;
  location?: string;
  points: string[];
  skills: string[];
  side: string;
  subExperiences?: {
    title: string;
    date: string;
    location?: string;
    points: string[];
    skills: string[];
  }[];
};
