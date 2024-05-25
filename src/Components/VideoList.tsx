import { VideoTypes } from "@/hooks/useVideos";
import { VideoCard } from "./VideoCard";

type VideoListProps = {
  videoList: VideoTypes[];
  setVideo: React.Dispatch<React.SetStateAction<string>>;
};

export const VideoList = ({ videoList, setVideo }: VideoListProps) => {
  return (
    <ul className="videoList">
      {videoList.map((video, i) => (
        <VideoCard video={video} key={i} setVideo={setVideo} />
      ))}
    </ul>
  );
};
