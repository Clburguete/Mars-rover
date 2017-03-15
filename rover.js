var instructions = prompt("Move the rover!", "r/l to rotate, f/b to move forwards/backwards");
var length;
var cols = 10;

var myGrid = new Array(cols);
for (i = 0; i < cols; i++)
  myGrid[i] = new Array(cols);



var myRover = {
  position: [0,0],
  direction: 'N'
};


function rotateRight(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.direction = 'E';
      break;
    case 'E':
      myRover.direction = 'S';
      break;
    case 'S':
      myRover.direction = 'W';
      break;
    case 'W':
      myRover.direction = 'N';
      break;
  }

}
function rotateLeft(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.direction = 'W';
      break;
    case 'E':
      myRover.direction = 'N';
      break;
    case 'S':
      myRover.direction = 'E';
      break;
    case 'W':
      myRover.direction = 'S';
      break;
  }

}

function goForward(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]++;
      break;
    case 'E':
      myRover.position[1]++;
      break;
    case 'S':
      myRover.position[0]--;
      break;
    case 'W':
      myRover.position[1]--;
      break;
}}

function goBackward(myRover) {
    switch(myRover.direction) {
      case 'N':
        myRover.position[0]--;
        break;
      case 'E':
        myRover.position[1]--;
        break;
      case 'S':
        myRover.position[0]++;
        break;
      case 'W':
        myRover.position[1]++;
        break;
}}
for(length = 0; length < instructions.length; length ++){
  switch (instructions.charAt(length)){
    case "f":
      goForward(myRover);
      break;
    case "b":
      goBackward(myRover);
      break;
    case "r":
      rotateRight(myRover);
      break;
    case "l":
      rotateLeft(myRover);
      break;
  }
  if (myRover.position[0] == cols){
    myRover.position[0] = 0;
  } else if (myRover.position[1] == cols) {
    myRover.position[1] = 0;
  }
}

console.log(myRover.position);


//goForward(myRover);
