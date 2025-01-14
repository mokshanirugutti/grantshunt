import axios from 'axios';

export async function fetchGrantsData() {
  try {
    
    const response = await axios.get('http://127.0.0.1:8000/grants/');
    return response.data;
  } catch (error) {
    console.error('Error fetching grants data:', error);
    throw error;
  }
}

