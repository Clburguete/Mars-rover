function start(){
  var instructions = prompt("Move the rover!", "r/l to rotate, f/b to move forwards/backwards");
  var length;
  var cols,rows = 10;

  var myGrid = new Array(rows);
  for (i = 0; i < rows; i++)
    myGrid[i] = new Array(cols);



  var myRover = {
    position: [0,0],
    direction: 'N'
  };
}
start();

function rotate(myRover) {
  if(instructions.charAt(length)== "r"){
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
  }}else if (instructions.charAt(length)=="l") {

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

}

function move(myRover) {
  if (instructions.charAt(length) == "f") {
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
  }else if (instructions.charAt(length) == "b") {
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
}}


for(length = 0; length < instructions.length; length ++){
  switch (instructions.charAt(length)){
    case "f":
      move(myRover);
      break;
    case "b":
      move(myRover);
      break;
    case "r":
      rotate(myRover);
      break;
    case "l":
      rotate(myRover);
      break;
    default:
      text("Instructions couldn't be read propoerly!");
  }
  if (myRover.position[0] == rows){
    myRover.position[0] = 0;
  } else if (myRover.position[1] == cols) {
    myRover.position[1] = 0;
  }
}

console.log(myRover.position);


//goForward(myRover);
