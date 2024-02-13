import "./App.css";
import { useState } from "react";
import RecordingComponent from "./Recorder";

function App() {

  //changes the downloaded message from false to true
  //had to make the message a state so when the onDownloadRecording Prop was triggered
  //the state of the message could change
  const [message, onChangeMessage] = useState("User has downloaded recording: false")
  const handleDownloadRecording = () => {
    onChangeMessage("User has downloaded recording: true");
  }
  return (
    <>
      <div>{message}</div>
      <RecordingComponent onDownloadRecording={handleDownloadRecording}/>
    </>
  );
}

export default App;
