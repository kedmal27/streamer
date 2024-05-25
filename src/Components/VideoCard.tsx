import { VideoTypes } from "@/hooks/useVideos";
import { PlayButton } from "./PlayButton";

export const VideoCard = ({
  video,
  setVideo,
}: {
  video: VideoTypes;
  setVideo: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <li className="videoCard">
      <strong className="videoTitle">{video.title}</strong>
      <PlayButton setVideo={setVideo} videoSource={video.path} />
    </li>
  );
};
