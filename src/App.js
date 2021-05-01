import './App.css';
import React, {useRef, useEffect} from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import {loveGesture} from "./gestures/LoveGesture";
import {helloGesture} from "./gestures/HelloGesture";
import {thanksGesture} from "./gestures/ThankYouGesture";
import {yesGesture} from "./gestures/YesGesture";
import {noGesture} from "./gestures/NoGesture";
import {repeatGesture} from "./gestures/RepeatGesture";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  //Loading in the Handpose model
  const getHandpose = async () => {
    const loadHandpose = await handpose.load();
    //console.log("HP model loaded");
    setInterval(() => {
      detectHand(loadHandpose);
    }, 10);
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
          
          //Detecting gestures and configuring custom gestures
          if(hand.length > 0){
              const GE = new fp.GestureEstimator([
                                                  fp.Gestures.ThumbsUpGesture,
                                                  loveGesture,
                                                  helloGesture,
                                                  thanksGesture,
                                                  yesGesture,
                                                  noGesture,
                                                  repeatGesture
                                                ]);

              //Setting up the gesture estimation
              const gesture = await GE.estimate(hand[0].landmarks, 8);

              //Gesture should have high confidence in detection
              if(gesture.gestures !== undefined && gesture.gestures.length > 0){
                  console.log(gesture.gestures);

                  //Grabbing the confidence of each suggested gesture
                  /* const confidence = gesture.gestures.map(
                    (prediction) => prediction.confidence
                  ); */
              }
          }
          //Drawing the hand net
          const ctx = canvasRef.current.getContext("2d");
          drawHand(hand, ctx);
          }
        } 

  getHandpose();
  useEffect(()=>{getHandpose()},[]);

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
