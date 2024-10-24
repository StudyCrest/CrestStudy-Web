import api from "../api";
import { SUBMIT_ENQUIRY } from "./contact.endpoint";

interface EnquiryData {
  email: string;
  fullName: string;
  subject: string;
  message: string;
}

export const submitEnquiry = async (data: EnquiryData) => {
  try {
    const response = await api.post(SUBMIT_ENQUIRY, data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error && (error as any).response) {
      const serverError = error as any;
      throw new Error(
        serverError.response?.data?.message || "Error submitting enquiry"
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
