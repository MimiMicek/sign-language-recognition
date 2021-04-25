//Finger points
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};

//Joint colours dictionary
const style = {
    0: { colour: "yellow", size: 13 },
    1: { colour: "green", size: 5 },
    2: { colour: "green", size: 10 },
    3: { colour: "green", size: 5 },
    4: { colour: "green", size: 5 },
    5: { colour: "purple", size: 10 },
    6: { colour: "purple", size: 5 },
    7: { colour: "purple", size: 5 },
    8: { colour: "purple", size: 5 },
    9: { colour: "blue", size: 10 },
    10: { colour: "blue", size: 5 },
    11: { colour: "blue", size: 5 },
    12: { colour: "blue", size: 5 },
    13: { colour: "red", size: 10 },
    14: { colour: "red", size: 5 },
    15: { colour: "red", size: 5 },
    16: { colour: "red", size: 5 },
    17: { colour: "orange", size: 10 },
    18: { colour: "orange", size: 5 },
    19: { colour: "orange", size: 5 },
    20: { colour: "orange", size: 5 },
};
  
//Creating points in the hand
export const drawHand = (predictions, ctx) => {
    if(predictions.length > 0){
        predictions.forEach((prediction) => {
            const markers = prediction.markers;
            
            for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
                    let finger = Object.keys(fingerJoints)[j];
                    //Looping through pairs of joints
                    for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
                    // Get pairs of joints
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondJointIndex = fingerJoints[finger][k + 1];
            
                    // Draw path
                    ctx.beginPath();
                    ctx.moveTo(
                        markers[firstJointIndex][0],
                        markers[firstJointIndex][1]
                    );
                    ctx.lineTo(
                        markers[secondJointIndex][0],
                        markers[secondJointIndex][1]
                    );
                    ctx.strokeStyle = "plum";
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
              }

            //Looping through & drawing the markers
            for (let i = 0; i < markers.length; i++) {
                //Getting the x & y points
                const x = markers[i][0];
                const y = markers[i][1];
                //Start drawing
                ctx.beginPath();
                ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);
        
                //Set colour of dots
                ctx.fillStyle = style[i]["colour"];
                ctx.fill();
              }
        });
    }
}