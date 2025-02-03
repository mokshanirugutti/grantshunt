import axios from 'axios';

export async function fetchGrantsData() {
  const URL = import.meta.env.VITE_API_URL;
  try {
    
    const response = await axios.get(`${URL}/grants/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching grants data:', error);
    throw error;
  }
}

