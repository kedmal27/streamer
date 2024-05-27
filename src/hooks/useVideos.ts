import axios from "axios";
import { useEffect, useState } from "react";

export type VideoTypes = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  path: string;
};

const testData = {
  id: "1",
  createdAt: "string",
  updatedAt: "string",
  title: "test_video",
  path: "string",
};

const URL = "https://kyrancodes.app";

export const useVideos = () => {
  const [videos, setVideos] = useState<VideoTypes[] | []>([]);

  const fetchVideos = async () => {
    // While API is down
    // const result = await axios.get<VideoTypes[]>(`${URL}/videos`);
    // setVideos(result.data);
    const result = [testData];
    setVideos(result);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return { videos };
};
