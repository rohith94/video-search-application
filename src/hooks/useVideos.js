import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //will run function only once
    searchVideo(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const searchVideo = async (searchString) => {
    console.log(searchString);

    const response = await youtube.get("/search", {
      params: {
        q: searchString,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, searchVideo];
};
export default useVideos;
