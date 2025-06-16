
export enum UserType {
  USER = 'user',
  AI = 'ai',
}

export interface Message {
  id: string;
  sender: UserType;
  text: string;
  timestamp: Date;
  sources?: DocumentSource[];
}

export enum DocumentType {
  WEBSITE = 'website',
  PDF = 'pdf',
  INTERNAL = 'internal', // For SIMULATED_KNOWLEDGE_BASE
}

export interface DocumentSource {
  id: string;
  type: DocumentType;
  title: string;
  url?: string; // For website/PDF sources
  snippet?: string; // Content snippet or summary, less relevant for live search results
}

// New interface for the structured response from geminiService
export interface AIResponse {
  text: string;
  sources?: DocumentSource[];
}
