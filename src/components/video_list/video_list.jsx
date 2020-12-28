import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onVideoClick, display, selected }) => {
  if (!videos) return <p>No result</p>;

  const displayType = display === "grid" ? styles.grid : styles.list;

  return (
    <ul className={`${styles.videos} ${displayType}`}>
      {videos.map((video) => {
        if (selected && selected.id === video.id) {
          return null;
        }
        return (
          <VideoItem
            video={video}
            key={video.id}
            onVideoClick={onVideoClick}
            display={display}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
