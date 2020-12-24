import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.item}>
      <h1>{snippet.title}</h1>
    </li>
  );
};

export default VideoItem;
