// src/config.js
const getApiUrl = () => {
  // Production (Vercel)
  if (import.meta.env.PROD || process.env.NODE_ENV === 'production') {
    // Use Render URL
    return 'https://sales-management-backend.onrender.com';
  }
  // Development (localhost)
  return 'http://localhost:5000';
};

export const API_BASE_URL = getApiUrl();
export const API_URL = `${API_BASE_URL}/api`;

// Debug
console.log('🌍 Environment:', import.meta.env.MODE);
console.log('🌍 API Base URL:', API_BASE_URL);
console.log('🌍 API URL:', API_URL);