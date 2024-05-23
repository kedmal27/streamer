import axios from "axios";
import { useEffect, useState } from "react";

export type VideoTypes = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  path: string;
};

const URL = "https://kyrancodes.app";

export const useVideos = () => {
  const [videos, setVideos] = useState<VideoTypes[] | []>([]);

  const fetchVideos = async () => {
    const result = await axios.get<VideoTypes[]>(`${URL}/videos`);
    setVideos(result.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return { videos };
};
