import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

//Creating a gesture description
export const loveGesture = new GestureDescription("I love you");

//Defining fingers and their direction
//For thumb finger
loveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);//passing the confidence of 1
loveGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.50);
loveGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.50);

//For index finger
loveGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);//passing the confidence of 1

//For middle finger
loveGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, .75);//passing the confidence of 1

//For ring finger
loveGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, .75);//passing the confidence of 1

//For pinky finger
loveGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);//passing the confidence of 1
