
import { Newsletter } from '../types';

export const persistenceService = {
  saveNewsletter: async (newsletter: Newsletter): Promise<void> => {
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsletter),
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
    } catch (error) {
      console.error('Failed to save to backend, falling back to localStorage', error);
      localStorage.setItem(`nl_${newsletter.id}`, JSON.stringify(newsletter));
    }
  },

  getNewsletterById: async (id: string): Promise<Newsletter | null> => {
    try {
      const response = await fetch(`/api/newsletter?id=${id}`);
      if (response.ok) return await response.json();
    } catch (error) {
      console.error('API fetch failed, checking localStorage', error);
    }
    
    const local = localStorage.getItem(`nl_${id}`);
    return local ? JSON.parse(local) : null;
  }
};
