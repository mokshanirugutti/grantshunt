import axios from 'axios';

export async function fetchGrantById(grantId: number) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/grants/${grantId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching grant data:', error);
    throw error;
  }
} 