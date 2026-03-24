import axios from "axios";

const API = "http://localhost:8080/api";

export const getProjects = () => axios.get(`${API}/projects`);

export const sendMessage = (data) => axios.post(`${API}/contact`, data);