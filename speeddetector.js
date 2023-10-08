// assign the variable 'speedlimit' a value
let speedLimit=70;
// assign the variable 'speed' a value
let speed=80;
// assign the variable 'demeritPointsPer5km' a value
let demeritPointsPer5km=1;
// create a function to detect speed
function speedDetector(speed){
// argument that only numbers should be the speed input
    if (typeof speed !== 'number' || isNaN(speed)){
        return 'Enter a valid number.';
    }
// arguments to the function
    if (speed<=70){
        return 'OK';
    }
// more arguments to the function
    else {
     let Distance=speed-speedLimit;
     let demPoints=Math.floor(Distance/5)*demeritPointsPer5km;
     return `points:${demPoints}`;
    }
}
// calling the function
speedDetector()
let answer=speedDetector(speed)
console.log(answer)