import poster from "../../../assets/video/header_video_poster.webp";
import video from "../../../assets/video/header_video.mp4";
import styles from "./style.module.scss";

export const HeaderVideo = () => {
  return (
    <div className={styles.header_video}>
      <video
        src={video}
        autoPlay={true}
        muted
        loop
        playsInline
        poster={poster}
        preload="metadata"
      ></video>
    </div>
  );
};
