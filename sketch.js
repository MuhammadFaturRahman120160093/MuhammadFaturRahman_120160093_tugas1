function setup() {
  // put setup code here
  createCanvas(500,400);
  angleMode(DEGREES)
}

function draw() {
  // put drawing code here
  background(0);

  translate(130, 200);
  line(130, -200, 130, 200)
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  //arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  //arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

 // FileList(255);
 // noStroke();
 // Text(hr + ':' + mn + ':' + sc, 10, 200);

  push();
  strokeCap(ROUND);
  stroke(255, 100, 150);
  line(-10, 250,-100,250);
  pop();

  push();
  strokeCap(ROUND);
  stroke(150, 100, 255);
  line(-10, 250, -70, 220);
  pop();

  push();
  strokeCap(ROUND);
  stroke(150, 255, 100);
  line(-10, 250, -10, 220);
  pop();

}