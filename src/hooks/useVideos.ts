import axios from "axios";

export type Video = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  path?: string;
};

const URL = "https://df8a-77-71-159-208.ngrok-free.app";

export const useVideos = () => {
  const fetchVideo = async (path: string) => {
    const result = await axios.get(`${URL}/${path}`);
    return result.data;
  };

  const fetchVideos = async () => {
    const result = await axios.get(`${URL}/videos`);
    return result.data;
  };

  return { fetchVideo, fetchVideos };
};
