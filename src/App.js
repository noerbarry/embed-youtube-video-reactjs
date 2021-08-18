import React from 'react';
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <h3>Salam Sehat<a href="https://www.youtube.com/channel/UCkhWyqtsbGhIzFz9CjG8VLQ"> Tetap Semangat</a></h3>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qB3X94pj_7w&t=13s"
      />
    </div>
  );
}

export default App;
