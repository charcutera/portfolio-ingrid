export type CategoryType = "all" | "ux-ui" | "graphic-design" | "video";

export const CATEGORY_LABELS: Record<CategoryType, string> = {
  all: "All Works",
  "ux-ui": "UX / UI",
  "graphic-design": "Graphic Design",
  video: "Video & Photography",
};

export const CATEGORY_SUBTITLES: Record<Exclude<CategoryType, "all">, string> = {
  "ux-ui": "Mobile app prototyping, user research, wireframing, and interactive digital product experiences.",
  "graphic-design": "Corporate brand identities, editorial layouts, poster series, and visual communication systems.",
  video: "Narrative short films, cinematic video editing, color grading, and artistic photography exploration.",
};

export interface MediaAsset {
  type: "image" | "video";
  url: string;
  caption?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16" | "3/4" | "4/5";
}

/* ─── Case Study Sections ──────────────────────────────────────────────────── */

export interface ChallengeSection {
  problemStatement: string;
  goal: string;
  role: string;
}

export interface ResearchSection {
  overview: string;
  insights?: string[];
  mediaAssets?: MediaAsset[];
}

export interface ConceptSection {
  overview: string;
  process?: string;
  mediaAssets?: MediaAsset[];
}

export interface PrototypingSection {
  title?: string;
  eyebrow?: string;
  overview: string;
  mediaAssets?: MediaAsset[];
}

export interface RefinementSection {
  title?: string;
  eyebrow?: string;
  overview: string;
  changes?: string[];
  mediaAssets?: MediaAsset[];
  /** Groups of images rendered as separate rows — each group can have its own column count */
  mediaAssetGroups?: MediaAsset[][];
  /** Interactive flipbook / magazine pages */
  magazinePages?: string[];
}

export interface ResultsSection {
  conclusion?: string;
  resultsText?: string;
  learningsText?: string;
  results?: string[];
  learnings?: string[];
}

export interface CaseStudy {
  challenge: ChallengeSection;
  research?: ResearchSection;
  concept?: ConceptSection;
  prototyping?: PrototypingSection;
  refinement?: RefinementSection;
  results: ResultsSection;
}

/* ─── Project ──────────────────────────────────────────────────────────────── */

export interface ProjectDocument {
  name: string;
  url: string;
  label: string;
  language?: string;
}

export interface Project {
  id: string;
  title: string;
  category: "ux-ui" | "graphic-design" | "video";
  shortDescription: string;
  fullDescription?: string;
  coverImage: string;
  coverAspectRatio?: "16/9" | "wide";
  year: string;
  client?: string;
  timeframe?: string;          // e.g. "Jan – Apr 2025"
  productionTime?: string;     // e.g. "3 months"
  tags: string[];
  mediaAssets: MediaAsset[];
  externalUrl?: string;
  youtubeUrl?: string;         // YouTube video URL for video projects
  documentUrl?: string;        // e.g. "/projects/five-stars/five_stars_document.pdf"
  documentName?: string;       // e.g. "FiveStarsDocument-CAT.pdf"
  documents?: ProjectDocument[];
  deliverablesEyebrow?: string | null;
  deliverablesTitle?: string;
  deliverablesDescription?: string;
  featured?: boolean;
  caseStudy?: CaseStudy;       // Optional — only featured projects need this
  highlights?: string[];       // Key bullet points / design notes for showcase projects
}

export interface PhotoItem {
  id: string;
  title: string;
  url: string;
  aspectRatio: "16/9" | "4/3" | "1/1" | "9/16" | "3/4" | "4/5";
  category?: string;
  year?: string;
  location?: string;
}
