import axios from "axios";

// Base URL of your backend
const API = axios.create({
  baseURL: "https://portfolio-4-3axu.onrender.com/api/contact",
});

// Function to send contact form data
export const sendMessage = async (formData) => {
  try {
    const response = await API.post("/contact", formData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};