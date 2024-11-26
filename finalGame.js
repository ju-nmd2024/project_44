function setup() {
  createCanvas(500, 500);
  background(190);
}

//rectangle 
let positionrect = { x: 0, y: 100, z: 200 };
let rectmax = { x: 400 };
let rectmin = { x: 0 };

//ball 
let ballradius = 5;
let positionball = { x: 100, y: 100 };
let ballspeed = { x: 5, y: 5 };

//paddle
function bottomStick() {
  fill(0);
  rect(positionrect.x, positionrect.y + 350, 100, 20);
}

//ball
function ball() {
  fill(0);
  ellipse(positionball.x, positionball.y, ballradius * 2);
}

function draw() {
  frameRate(60);
  background(190);

  
  bottomStick();
  ball();

  
  positionball.x += ballspeed.x; //ball horizontal speed
  positionball.y += ballspeed.y; //ball vertical speed

  // paddle movement
  if (keyIsDown(65)) {
    positionrect.x -= 15; //left
  }
  if (keyIsDown(68)) {
    positionrect.x += 15; //right
  }

  // Right paddle limit
  if (positionrect.x >= rectmax.x) {
    positionrect.x = 400;
  }
  // Left paddle limit
  if (positionrect.x <= rectmin.x) {
    positionrect.x = 0;
  }

  //border for ball
  if (
    positionball.x - ballradius <= 0 ||
    positionball.x + ballradius >= 500
  ) {
    ballspeed.x *= -1; // change the direction 
  }

  if (positionball.y - ballradius <= 0) {
    ballspeed.y *= -1; // change the directon when 
  }

  // ball paddle interaction 
  if (
    positionball.y + ballradius >= positionrect.y + 350 && //paddle top
    positionball.x >= positionrect.x && //left edge
    positionball.x <= positionrect.x + 100 //right edge
  ) {
    ballspeed.y *= -1; //reverse
    // for angle 
    let offset = (positionball.x - (positionrect.x + 50)) / 50; //normalize -1 to 1
    ballspeed.x += offset * 2;
  }
}
