import axios from "axios";
import { useState } from "react";

export type Video = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  path?: string;
};

const URL = "https://f913-77-71-159-208.ngrok-free.app";

export const useVideos = () => {
  const [videos, setVideos] = useState<Video[] | []>([]);

  const fetchVideos = async () => {
    const result = await axios.get<Video[]>(`${URL}/videos`);
    setVideos(result.data);
  };

  fetchVideos();

  return { videos };
};