import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

//Creating a gesture description
export const repeatGesture = new GestureDescription("Repeat");

//Defining fingers and their direction
//For thumb finger
repeatGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);//passing the confidence of 1
repeatGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalRight, 1);
repeatGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalLeft, 1);

//For index finger
repeatGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
repeatGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1);

//For middle finger
repeatGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
repeatGesture.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1);

//For ring finger
repeatGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
repeatGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1);

//For pinky finger
repeatGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
repeatGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1);
