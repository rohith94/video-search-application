import axios from "axios";

export const KEY = "AIzaSyD_xE3bDRsXU4RhvTt8c6qEayxUnLl8ISk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
