var instructions = " ";
var length;

var myGrid = new Array(10);
for (i = 0; i < 10; i++)
  myGrid[i] = new Array(10);



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
  }

}

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
    }


}

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
    case "f":
      rotateLeft(myRover);
      break;
  }
}



//goForward(myRover);
