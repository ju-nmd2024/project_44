function setup() {
  createCanvas(500, 500);
  background(190);
}

let pop11 = false;
let pop12 = false;
let pop13 = false;
let pop14 = false;
let pop15 = false;
let pop16 = false;
let pop17 = false;
let pop18 = false;
let pop19 = false;
let pop20 = false;

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

let kutu = { a: 0, b: 100 };

//top rect 11
function toprect11() {
  fill(255, 128, 0);
  rect(kutu.a, kutu.b - 100, 50, 20);
}
//top rect 12
function toprect12() {
  fill(255, 128, 0);
  rect(kutu.a + 50, kutu.b - 100, 50, 20);
}
//top rect 13
function toprect13() {
  fill(255, 128, 0);
  rect(kutu.a + 100, kutu.b - 100, 50, 20);
}
//top rect 14
function toprect14() {
  fill(255, 128, 0);
  rect(kutu.a + 150, kutu.b - 100, 50, 20);
}
//top rect 15
function toprect15() {
  fill(255, 128, 0);
  rect(kutu.a + 200, kutu.b - 100, 50, 20);
}
//top rect 16
function toprect16() {
  fill(255, 128, 0);
  rect(kutu.a + 250, kutu.b - 100, 50, 20);
}
//top rect 17
function toprect17() {
  fill(255, 128, 0);
  rect(kutu.a + 300, kutu.b - 100, 50, 20);
} //top rect 18
function toprect18() {
  fill(255, 128, 0);
  rect(kutu.a + 350, kutu.b - 100, 50, 20);
}
function toprect19() {
  fill(255, 128, 0);
  rect(kutu.a + 400, kutu.b - 100, 50, 20);
}
function toprect20() {
  fill(255, 128, 0);
  rect(kutu.a + 450, kutu.b - 100, 50, 20);
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
  if (positionball.x - ballradius <= 0 || positionball.x + ballradius >= 500) {
    ballspeed.x *= -1; // change the direction
  }

  if (positionball.y - ballradius <= 0 || positionball.y - ballradius >= 480) {
    ballspeed.y *= -1; // change the direction
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

  // Draw and detect collisions with top rectangles
  if (!pop11) {
    toprect11();
    if (
      positionball.x >= kutu.a &&
      positionball.x <= kutu.a + 50 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop11 = true;
      ballspeed.y *= -1;
    }
  }

  if (!pop12) {
    toprect12();
    if (
      positionball.x >= kutu.a + 50 &&
      positionball.x <= kutu.a + 100 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop12 = true;
      ballspeed.y *= -1;
    }
  }

  if (!pop13) {
    toprect13();
    if (
      positionball.x >= kutu.a + 100 &&
      positionball.x <= kutu.a + 150 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop13 = true;
      ballspeed.y *= -1;
    }
  }
  if (!pop14) {
    toprect14();
    if (
      positionball.x >= kutu.a + 150 &&
      positionball.x <= kutu.a + 200 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop14 = true;
      ballspeed.y *= -1;
    }
  }
  if (!pop15) {
    toprect15();
    if (
      positionball.x >= kutu.a + 200 &&
      positionball.x <= kutu.a + 250 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop15 = true;
      ballspeed.y *= -1;
    }
  }
  if (!pop16) {
    toprect16();
    if (
      positionball.x >= kutu.a + 250 &&
      positionball.x <= kutu.a + 300 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop16 = true;
      ballspeed.y *= -1;
    }
  }
  if (!pop17) {
    toprect17();
    if (
      positionball.x >= kutu.a + 300 &&
      positionball.x <= kutu.a + 350 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop17 = true;
      ballspeed.y *= -1;
    }
  }
  if (!pop18) {
    toprect18();
    if (
      positionball.x >= kutu.a + 350 &&
      positionball.x <= kutu.a + 400 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop18 = true;
      ballspeed.y *= -1;
    }
  }
  if (!pop19) {
    toprect19();
    if (
      positionball.x >= kutu.a + 400 &&
      positionball.x <= kutu.a + 450 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop19 = true;
      ballspeed.y *= -1;
    }
  }
  if (!pop20) {
    toprect20();
    if (
      positionball.x >= kutu.a + 450 &&
      positionball.x <= kutu.a + 500 &&
      positionball.y - ballradius <= kutu.b - 80
    ) {
      pop20 = true;
      ballspeed.y *= -1;
    }
  }
}
