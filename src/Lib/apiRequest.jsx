import axios from "axios";

// Dynamically set the baseURL based on the environment
const apiRequest = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://alokikapiiii.onrender.com/api/"
      : "http://localhost:3000/api",
  withCredentials: true, // If you need to send cookies
});

export default apiRequest;
