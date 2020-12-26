import "./app.css";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import VideoList from "./components/video_list/video_list";
import Search from "./components/search/search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onSearch = useCallback((query) => {
    youtube
      .searchResult(query) //
      .then((result) => {
        setVideos(result);
        setIsLoading(false);
      });
  });

  useEffect(() => {
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
      {isLoading ? (
        <span className="spinner">Loading...</span>
      ) : (
        <VideoList videos={videos} />
      )}
    </>
  );
}

export default App;
