import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

//Creating a gesture description
export const thanksGesture = new GestureDescription("Thank you");

//Defining fingers and their direction
//For thumb finger
thanksGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);//passing the confidence of 1
thanksGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
thanksGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);

//For index finger
thanksGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
thanksGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
thanksGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);

//For middle finger
thanksGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
thanksGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
thanksGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);

//For ring finger
thanksGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
thanksGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
thanksGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);

//For pinky finger
thanksGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
thanksGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
thanksGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
