import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({
  video: { snippet },
  video: {
    snippet: { thumbnails },
  },
  video,
  onVideoClick,
  display,
}) => {
  const displayType = display === "grid" ? styles.grid : styles.list;

  const regex = /-/g;
  const date = snippet.publishedAt.split("T")[0].replace(regex, ". ");

  return (
    <li
      className={`${styles.item} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <img
        className={styles.thumbnail}
        src={thumbnails.medium.url}
        alt="video thumbnail"
        title={snippet.title}
      />
      <div className={styles.body}>
        <h2 className={styles.title}>{snippet.title}</h2>
        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        <p className={styles.publishedAt}>{date}</p>
      </div>
    </li>
  );
};

export default VideoItem;
