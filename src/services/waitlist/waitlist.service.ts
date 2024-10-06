import api from "../api";
import { JOIN_WAITLIST } from "./waitlist.endpoint";

interface WaitlistData {
  email: string;
}

export const joinWaitlist = async (data: WaitlistData) => {
  try {
    const response = await api.post(JOIN_WAITLIST, data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error && (error as any).response) {
      const serverError = error as any;
      throw new Error(serverError.response?.data?.message || "Error joining waitlist");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
