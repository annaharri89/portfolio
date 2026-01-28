export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  ENDPOINTS: {
    ALTCHA_CHALLENGE: '/api/altcha/challenge',
    CONTACT: '/api/contact',
  },
} as const
