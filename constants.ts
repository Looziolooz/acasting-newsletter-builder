
import { Newsletter } from './types';

export const COLORS = {
  acastingBlue: '#0057FF',
  acastingBlack: '#111827',
  acastingGray: '#4B5563',
};

export const THEMES = {
  modern: {
    name: 'Modern Blue',
    primaryColor: '#0057FF',
    backgroundColor: '#F3F4F6',
    canvasColor: '#FFFFFF',
    fontFamily: 'Inter, sans-serif'
  },
  nordic: {
    name: 'Nordic Clean',
    primaryColor: '#1E293B',
    backgroundColor: '#F8FAFC',
    canvasColor: '#FFFFFF',
    fontFamily: 'Montserrat, sans-serif'
  },
  midnight: {
    name: 'Midnight',
    primaryColor: '#38BDF8',
    backgroundColor: '#0F172A',
    canvasColor: '#1E293B',
    fontFamily: 'Poppins, sans-serif'
  },
  editorial: {
    name: 'Editorial',
    primaryColor: '#B91C1C',
    backgroundColor: '#FAF9F6',
    canvasColor: '#FFFFFF',
    fontFamily: 'Playfair Display, serif'
  },
  sunset: {
    name: 'Sunset Glow',
    primaryColor: '#F59E0B',
    backgroundColor: '#FFF7ED',
    canvasColor: '#FFFFFF',
    fontFamily: 'Lato, sans-serif'
  },
  forest: {
    name: 'Professional Forest',
    primaryColor: '#059669',
    backgroundColor: '#ECFDF5',
    canvasColor: '#FFFFFF',
    fontFamily: 'Roboto, sans-serif'
  },
  minimal: {
    name: 'Ultra Minimal',
    primaryColor: '#000000',
    backgroundColor: '#FFFFFF',
    canvasColor: '#FFFFFF',
    fontFamily: 'Inter, sans-serif'
  },
  minimalist: {
    name: 'Minimalist Pure',
    primaryColor: '#171717',
    backgroundColor: '#F9FAFB',
    canvasColor: '#FFFFFF',
    fontFamily: 'Inter, sans-serif'
  },
  bold: {
    name: 'Bold Impact',
    primaryColor: '#E11D48',
    backgroundColor: '#0F172A',
    canvasColor: '#1E293B',
    fontFamily: 'Oswald, sans-serif'
  },
  creative: {
    name: 'Creative Pulse',
    primaryColor: '#8B5CF6',
    backgroundColor: '#FAF5FF',
    canvasColor: '#FFFFFF',
    fontFamily: 'Poppins, sans-serif'
  }
};

export const INITIAL_NEWSLETTER: Newsletter = {
  id: 'default-draft',
  title: "New Episode Announcement",
  updatedAt: new Date().toISOString(),
  blocks: [
    {
      id: 'h1',
      type: 'header',
      content: 'New Acasting Episode Alert!',
      style: {
        textAlign: 'center',
        padding: '20px',
        color: '#111827',
        fontSize: '28px',
        fontWeight: '700',
        fontFamily: 'Inter, sans-serif'
      }
    },
    {
      id: 'img1',
      type: 'image',
      src: 'https://picsum.photos/800/400?random=1',
      style: {
        padding: '0px',
        borderRadius: '8px'
      }
    },
    {
      id: 'd1',
      type: 'divider',
      style: {
        marginTop: '20px',
        marginBottom: '20px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#E2E8F0'
      }
    },
    {
      id: 't1',
      type: 'text',
      content: 'We are thrilled to share our latest podcast episode. In this edition, we dive deep into the future of audio content and how creators in Sweden are leading the way.',
      style: {
        padding: '20px',
        textAlign: 'left',
        fontSize: '16px',
        color: '#374151'
      }
    },
    {
      id: 'b1',
      type: 'button',
      content: 'Listen Now',
      href: 'https://acasting.se',
      style: {
        backgroundColor: '#0057FF',
        color: '#FFFFFF',
        padding: '12px 24px',
        borderRadius: '9999px',
        textAlign: 'center',
        fontWeight: '600'
      }
    }
  ],
  theme: THEMES.modern
};
