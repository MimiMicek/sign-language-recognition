import './App.css';
import React, {useRef} from "react";
import Webcam from "react-webcam";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "./utilities";


function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  //Loading in the Handpose model
  const getHandpose = async () => {
    const loadHandpose = await handpose.load();
    console.log("HP model loaded");
    setInterval(() => {
      detectHand(loadHandpose);
    }, 100);
  }
  
  //Detecting the hand
  const detectHand = async (loadHandpose) => {
      if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null &&
                 webcamRef.current.video.readyState === 4) {
                  //Getting properties
                  const video = webcamRef.current.video;
                  const videoHeight = webcamRef.current.video.videoHeight;
                  const videoWidth = webcamRef.current.video.videoWidth;
                  
                  //Setting video & canvas height and width
                  webcamRef.current.video.height = videoHeight;
                  webcamRef.current.video.width = videoWidth;
                  canvasRef.current.height = videoHeight;
                  canvasRef.current.width = videoWidth;
                  
                  //Detecting hand
                  const hand = await loadHandpose.estimateHands(video);
                  console.log(hand);

                  //Drawing the net
                  const ctx = canvasRef.current.getContext("2d");
                  drawHand(hand, ctx);
                  }
                } 

  getHandpose();

  return (
    <div className="App">
      <header className="App-header">
        {/*Webcam setup*/}
        <Webcam ref={webcamRef}
                style={{
                  position:"absolute",
                  right:0,
                  left:0,
                  marginRight:"auto",
                  marginLeft:"auto",
                  height:480,
                  width:640,
                  textAlign:"center",
                  zIndex:9
                }}>
        </Webcam>
        <canvas ref={canvasRef}
                style={{
                  position:"absolute",
                  right:0,
                  left:0,
                  marginRight:"auto",
                  marginLeft:"auto",
                  height:480,
                  width:640,
                  textAlign:"center",
                  zIndex:9
                }}>
          </canvas>
      </header>
    </div>
  );
}

export default App;
