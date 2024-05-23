import { useRef, useState, useEffect } from "react";
import videojs from "video.js";

export const VideoPlayer = (props: any) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (videoNode.current) {
      const _player: any = videojs(videoNode.current, props);
      setPlayer(_player);
      // return () => {
      //   if (player !== null) {
      //     player.dispose();
      //   }
      // };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
};
