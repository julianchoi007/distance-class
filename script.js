/* global createCanvas, colorMode, random, HSB, width, height, background, ellipse, mouseX, mouseY, text, 
fill, rect, keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, collideRectCircle, noStroke,
HSL, windowWidth, windowHeight, line, sqrt, round, color */

let backgroundColor, circlePosition, rectPosition;

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;

  // This variable contains a JSON object
  circlePosition = {
    x: 100,
    y: 100
  };

  rectPosition = {
    x: 130,
    y: 140
  };
}

function draw() {
  background(backgroundColor);
  ellipse(circlePosition.x, circlePosition.y, 20, 20);
  rect(rectPosition.x, rectPosition.y, 20, 20);
  line(circlePosition.x, circlePosition.y, rectPosition.x, rectPosition.y);
  
  let distanceCircleRect = computeDistance(circlePosition, rectPosition);
  text(`The circle and rectangle are ${round(distanceCircleRect)} units apart`, 20, 20)
  
  let mousePosition = {
    "x": mouseX,
    "y": mouseY
  }
  
  let distanceCircleMouse = computeDistance(circlePosition, mousePosition);
  let categoryMessage = computeCategoryOfDistance(circlePosition, mousePosition);
  text(`The circle and mouse are ${round(distanceCircleMouse)} units apart; ${categoryMessage}`, 20, 40)
  
}

function computeCategoryOfDistance(point1, point2){
  
  let exactDistance = computeDistance(point1, point2);
  if(exactDistance > 200){
    backgroundColor = color(240, 10, 100);
    return "You're cold"
  }else if(exactDistance > 50){
    backgroundColor = color(120,10,100);
    return "Getting warmer"
  }else{
    backgroundColor = color(0,10,100);
    return "Red hot!"
  }
  
}

function computeDistance(point1, point2){
  let deltaX = point1.x - point2.x;
  let deltaY = point1.y - point2.y;
  let distance = sqrt((deltaX ** 2) + (deltaY ** 2));
  return distance; // Returns a number 
}

function mousePressed() {
  circlePosition.x = random(width);
  circlePosition.y = random(height);
}
