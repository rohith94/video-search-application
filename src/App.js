import React, { useEffect, useState } from "react";
import SearchBar from "./component/SearchBar/SearchBar";
import VideoList from "./component/VideoList/VideoList";
import VideoDetail from "./component/VideoDetail/VideoDetail";
import useVideos from "./hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, searchVideos] = useVideos("building"); // Custom hook

  // setSelectedVideo(response.data.items[0]);
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={searchVideos} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(video) => {
                setSelectedVideo(video);
              }}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
