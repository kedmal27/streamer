import { VideoTypes } from "@/hooks/useVideos";
import { VideoCard } from "./VideoCard";

type VideoListProps = { videoList: VideoTypes[] };

export const VideoList = ({ videoList }: VideoListProps) => {
  return (
    <ul className="videoList">
      {videoList.map((video, i) => (
        <VideoCard video={video} key={i} />
      ))}
    </ul>
  );
};
