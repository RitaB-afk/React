import Box from "@mui/joy/Box";
import "./App.css";
import { Menu } from "./components/Menu";
import Video from "./components/Video";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("deer");
  const videos = {
    deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
  };
  const videoName = Object.keys(videos);

  const handleRadioChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "stretch",
          gap: 4,
          flexWrap: "wrap",
          p: 20,
          m: 0,
        }}
      >
        <Menu videoName={videoName} handleRadioChange={handleRadioChange} />
        <Video videoUrl={videos[value]}></Video>
      </Box>
    </div>
  );
}

export default App;
