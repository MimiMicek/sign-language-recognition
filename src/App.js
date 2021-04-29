import './App.css';
import React, {useRef, useState, useEffect} from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import {loveGesture} from "./LoveGesture";
//import victory from "./imgs/peace.png";
import thumbs_up from "./imgs/ok.png";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  //Set an emoji/image for detection
  const [emoji, setEmoji] = useState(null);
  const imgs = {thumbs_up:thumbs_up};

  //Loading in the Handpose model
  const getHandpose = async () => {
    const loadHandpose = await handpose.load();
    //console.log("HP model loaded");
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
          //console.log(hand);

          //Detecting gestures and configuring custom gestures
          if(hand.length > 0){
              const GE = new fp.GestureEstimator([
                fp.Gestures.VictoryGesture,
                fp.Gestures.ThumbsUpGesture,
                //loveGesture
              ]);

              //Setting up the gesture estimation
              const gesture = await GE.estimate(hand[0].landmarks, 8);
              console.log(gesture)

              //Gesture should have high confidence in detection
              if(gesture.gestures !== undefined && gesture.gestures.length > 0){
                  console.log(gesture.gestures);

                  //Grabbing the confidence of each suggested gesture
                  const confidence = gesture.gestures.map(
                    (prediction) => prediction.confidence
                  );

                  //Which gesture had the highest confidence
                  const maxConfidence = confidence.indexOf(
                    Math.max.apply(null, confidence)
                  ); 

                  setEmoji(gesture.gestures[maxConfidence].name);
                  console.log(emoji);
              }
          }
          //Drawing the hand net
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
          {emoji !== null ? (
          <img
            src={imgs[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />) : ("")}
      </header>
    </div>
  );
}

export default App;
