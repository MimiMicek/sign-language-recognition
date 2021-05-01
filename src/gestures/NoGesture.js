import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

//Creating a gesture description
export const noGesture = new GestureDescription("No");

//Defining fingers and their direction
//For thumb finger
noGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);//passing the confidence of 1

//For index finger
noGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);

//For middle finger
noGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);

//For ring finger
noGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);

//For pinky finger
noGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);

