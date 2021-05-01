import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

//Creating a gesture description
export const yesGesture = new GestureDescription("Yes");

//Defining fingers and their direction
//For thumb finger
yesGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);//passing the confidence of 1

//For index finger
yesGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);

//For middle finger
yesGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);

//For ring finger
yesGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);

//For pinky finger
yesGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);

