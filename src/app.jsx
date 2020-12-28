import { useEffect, useState, useCallback } from "react";
import VideoList from "./components/video_list/video_list";
import Search from "./components/search/search";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearch = useCallback((query) => {
    setIsLoading(true);
    youtube
      .searchResult(query) //
      .then((result) => {
        setSelectedVideo(null);
        setVideos(result);
        setIsLoading(false);
      });
  }, []);

  const handleVideoClick = useCallback((target) => {
    setSelectedVideo(target);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    youtube
      .mostPopular() //
      .then((result) => {
        setVideos(result);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Search onSearch={onSearch} />
      <section className={styles.content}>
        {isLoading ? (
          <span className={styles.loader}>Loading...</span>
        ) : selectedVideo ? (
          <>
            <VideoDetail selected={selectedVideo} />
            <VideoList
              videos={videos}
              selected={selectedVideo}
              onVideoClick={handleVideoClick}
              display="list"
            />
          </>
        ) : (
          <VideoList
            videos={videos}
            onVideoClick={handleVideoClick}
            display="grid"
          />
        )}
      </section>
    </>
  );
}

export default App;
