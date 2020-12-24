import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

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

  useEffect(() => {
    getMostPopular().then((result) => {
      setVideos(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <span className="spinner">Loading...</span>
      ) : (
        <VideoList videos={videos} />
      )}
    </>
  );
}

export default App;
