import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ selected: { snippet }, selected }) => {
  const url = `https://youtube.com/embed/${selected.id}`;

  const regex = /-/g;
  const date = snippet.publishedAt.split("T")[0].replace(regex, ". ");

  return (
    <section className={styles.selected}>
      <div className={styles.container}>
        <iframe
          className={styles.player}
          src={url}
          width="100%"
          height="640"
          frameBorder="0"
          title={selected.id}
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>{snippet.title}</h2>
        <p className={styles.publishedAt}>{date}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.profile}>
          <div className={styles.image}></div>
          <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
        </div>
        <pre className={styles.description}>{snippet.description}</pre>
      </div>
    </section>
  );
};

export default VideoDetail;
