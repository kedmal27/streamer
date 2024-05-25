export const PlayButton = ({
  setVideo,
  videoSource,
}: {
  setVideo: React.Dispatch<React.SetStateAction<string>>;
  videoSource: string;
}) => {
  return (
    <button
      className="playButton"
      onClick={() => {
        setVideo(videoSource);
      }}
    ></button>
  );
};
