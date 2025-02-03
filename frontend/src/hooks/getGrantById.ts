import axios from 'axios';

export async function fetchGrantById(grantId: number) {
  const URL = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.get(`${URL}/grants/${grantId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching grant data:', error);
    throw error;
  }
} 