import api from './api';
import API_ENDPOINTS from './endpoints';

interface WaitlistData {
  email: string;
}

export const joinWaitlist = async (data: WaitlistData) => {
  try {
    const response = await api.post(API_ENDPOINTS.WAITLIST, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error joining waitlist');
  }
};
