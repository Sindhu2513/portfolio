import axios from "axios";

// Base URL of your backend
const API = axios.create({
  baseURL: "http://localhost:8080/api",
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