import "./app.css";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import VideoList from "./components/video_list/video_list";
import Search from "./components/search/search";

function App() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const youtube = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: { key: process.env.REACT_APP_YOUTUBE_KEY },
  });

  async function getMostPopular() {
    const response = await youtube.get("videos/", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
        regionCode: "kr",
      },
    });

    return response.data.items;
  }

  async function getSearchResult(query) {
    const response = await youtube.get("search/", {
      params: {
        part: "snippet",
        q: query,
        maxResults: 25,
        type: "video",
      },
    });

    const data = response.data.items;
    const result = data.map((datum) => ({ ...datum, id: datum.id.videoId }));
    return result;
  }

  const onSearch = useCallback((query) => {
    getSearchResult(query).then((result) => {
      setVideos(result);
      setIsLoading(false);
    });
  });

  useEffect(() => {
    getMostPopular().then((result) => {
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
