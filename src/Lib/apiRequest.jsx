import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://alokikapiiii.onrender.com/.com/api", // Replace with your production API URL
  withCredentials: true, // If you need to send cookies
});

export default apiRequest;
