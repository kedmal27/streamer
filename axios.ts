import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://f913-77-71-159-208.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // This is important if you're dealing with cookies
});

export default axiosInstance;
