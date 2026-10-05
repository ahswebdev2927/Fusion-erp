export interface CourseModule {
  id: string;
  title: string;
  code: string;
  shortDesc: string;
  longDesc: string;
  badge?: string;
  iconName: string;
  topics: string[];
  practicalExercises: string[];
  businessProcess: string;
  outcome: string;
}

export interface TrainingStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  modulesCovered: string[];
  keyOutcome: string;
}

export interface PersonaAudience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  priorKnowledge: string;
  fusionOutcome: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyBackground: string;
  quote: string;
  highlight: string;
  outcome: string;
  initials: string;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "admissions" | "curriculum" | "career" | "practical";
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
}
