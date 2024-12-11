import axios from "axios";

// Dynamically set the baseURL based on the environment
const apiRequest = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://alokikapiiii.onrender.com/api" // Production API URL
      : "http://localhost:3000/api", // Local development API URL
  withCredentials: true, // If you need to send cookies
});

export default apiRequest;
