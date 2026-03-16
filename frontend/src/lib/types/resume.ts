export interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  notes?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface ResumeData {
  experience: Experience[];
  education: Education[];
  certifications?: Certification[];
  competitions?: string[];
  communities?: string[];
}
