//Finger points
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};

//Creating points in the hand
export const drawHand = (predictions, ctx) => {
    // Check if we have predictions
    if (predictions.length > 0) {
      // Loop through each prediction
        predictions.forEach((prediction) => {
            //Get markers
            const landmarks = prediction.landmarks;
    
            // Loop through fingers
            for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
            let finger = Object.keys(fingerJoints)[j];

            //Loop through joint pairs
            for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
                //Get joint pairs
                const firstJointIndex = fingerJoints[finger][k];
                const secondJointIndex = fingerJoints[finger][k + 1];
    
                //Draw lines
                ctx.beginPath();
                ctx.moveTo(
                landmarks[firstJointIndex][0],
                landmarks[firstJointIndex][1]
                );
                ctx.lineTo(
                landmarks[secondJointIndex][0],
                landmarks[secondJointIndex][1]
                );
                ctx.strokeStyle = "black";
                ctx.lineWidth = 4;
                ctx.stroke();
            }
            }

            //Looping through & drawing the markers
            for (let i = 0; i < landmarks.length; i++) {
                //Getting the x & y points
                const x = landmarks[i][0];
                const y = landmarks[i][1];
                //Start drawing
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3 * Math.PI);
        
                //Set colour of dots
                ctx.fillStyle = "white";
                ctx.fill();
              }
        });
    }
}