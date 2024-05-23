import { VideoTypes } from "@/hooks/useVideos";
import { PlayButton } from "./PlayButton";

export const VideoCard = ({ video }: { video: VideoTypes }) => {
  return (
    <li className="videoCard">
      <strong className="videoTitle">{video.title}</strong>
      <PlayButton />
    </li>
  );
};
