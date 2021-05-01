import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

//Creating a gesture description
export const helloGesture = new GestureDescription("Hello");

//Defining fingers and their direction
//For thumb finger
helloGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);//passing the confidence of 1
helloGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//For index finger
helloGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
helloGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//For middle finger
helloGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
helloGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//For ring finger
helloGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
helloGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//For pinky finger
helloGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
helloGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
