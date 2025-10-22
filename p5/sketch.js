let lcurtainW = 355;
let rcurtainW = 355;

function setup() {
  createCanvas(900, 500);
}

function draw() {
  background(242, 237, 218);
  windows();
  bed();
}

function windows(){
  //let lightBlue = color(242, 253, 255)
 // let darkBlue = color(4, 42, 74)
  
  //let speed = 2000;
 // let p
  
  fill(194, 223, 252);
  stroke(184, 176, 149);
  strokeWeight(6);
  rect(100, 20, 375, 250);
  rect(480, 20, 375, 250);
  fill(255);
  noStroke();
  rect(80, 20, 795, 5);
  
  if(lcurtainW > 70) lcurtainW -= 1;
  if(rcurtainW > 70) rcurtainW -= 1;
  
  fill(252, 194, 227, 200);
  noStroke();
  rect(110, 20, lcurtainW, 245);
  rect(845 - rcurtainW, 20, rcurtainW, 245);
}

function bed(){
  fill(252, 240, 247);
  stroke(252, 194, 227);
  rect(350, 350, 560, 200);


  // diagonal stripes
  stroke(252, 194, 227);
  strokeWeight(6);
  for (let i = 0; i < 30; i++) {
    let offset = i * 20;
    line(400 + offset, 550, 350 + offset, 352);
  }
  line (350, 430,380, 560);
  
  //pillows
 fill(252, 194, 227);
  noStroke();
  beginShape();
  vertex(800, 410);
  vertex(775, 340);
  vertex(875, 340);
  vertex(900, 410);
  endShape(CLOSE);
  
  beginShape();
  vertex(800, 510);
  vertex(775, 440);
  vertex(875, 440);
  vertex(900, 510);
  endShape(CLOSE);
}
