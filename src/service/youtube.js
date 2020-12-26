import axios from "axios";

export default class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  mostPopular = async () => {
    const response = await this.youtube.get("videos/", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
        regionCode: "kr",
      },
    });

    return response.data.items;
  };

  searchResult = async (query) => {
    const response = await this.youtube.get("search/", {
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
  };
}
