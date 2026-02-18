
import { Newsletter } from '../types';

// In un'app reale, questo sarebbe un database (Prisma, Mongoose, ecc.)
// Qui usiamo una mappa in memoria per simulare il backend
const newsletters = new Map<string, Newsletter>();

export const db = {
  saveNewsletter: async (newsletter: Newsletter): Promise<Newsletter> => {
    const updated = {
      ...newsletter,
      updatedAt: new Date().toISOString()
    };
    newsletters.set(newsletter.id, updated);
    return updated;
  },
  
  getNewsletter: async (id: string): Promise<Newsletter | null> => {
    return newsletters.get(id) || null;
  },
  
  getAll: async (): Promise<Newsletter[]> => {
    return Array.from(newsletters.values());
  }
};
