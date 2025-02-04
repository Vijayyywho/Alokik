import axios from "axios";

// Dynamically set the baseURL based on the environment
const apiRequest = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://alokikapiiii.onrender.com/api/"
      : "http://localhost:3000/api",
  withCredentials: true, // Allow cookies to be sent with the request
});

export default apiRequest;
