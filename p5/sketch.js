let lcurtainW = 355;
let rcurtainW = 355;
let carX = 0;

let curtains;
let darkgrey;
let hair;
let skin;
let shirt;
let floorcolor;
let currentSky;
let rain;

let irisY = 111 ;

let curtainsOpen = false;

let raindrops = [];

function setup() {
  createCanvas(900, 500);
  
  darkgrey = color(168, 163, 166);
  hair = color (61, 37, 2);
  floorcolor = color (133, 121, 102);
  shirt = color(64, 52, 58);
  skin = color (230, 198, 163);
  rain = color (13, 45, 115, 100);
  curtains = color(204, 200, 202, 200);

  for (let i = 0; i < 100; i++) {
    raindrops.push(new Raindrop());
  }
  
}

function draw() {

  if (!curtainsOpen){
    frameRate(60);
    scene1();
    
  } else if (irisY < 115) {
    frameRate(5);
    scene2();
    
  } else if (millis() < 30000) {
    frameRate(60);
    scene3();
    
  } else if (carX === 0 && (leftPupilX > 463 || rightPupilX > 525)) {
    frameRate(5);
    scene4();

  } else if (carX < width) {
    frameRate(20);
    scene5();

  } else if (leftPupilX < 483 || rightPupilX <545){
    frameRate(5);
    scene6();
    
  } else {
    frameRate(60);
    scene7();
  }
}

function scene1(){
  currentSky = color(213, 225, 237);
  background(242, 237, 218);
  windows();
  bed();
  nightstand();
  clock();
  Person1(810, 365);
}

function windows(){
  fill(currentSky);
  stroke(184, 176, 149);
  strokeWeight(6);
  rect(100, 20, 375, 250);
  rect(480, 20, 375, 250);
  
  fill(255);
  noStroke();
  rect(80, 20, 795, 5);
  
  if(lcurtainW > 70) lcurtainW -= 1;
  if(rcurtainW > 70) rcurtainW -= 1;
  
  fill(curtains);//curtains
  noStroke();
  rect(110, 20, lcurtainW, 245);
  rect(845 - rcurtainW, 20, rcurtainW, 245);

  if (lcurtainW <= 70 && rcurtainW <= 70){
    curtainsOpen = true;
  }
}

function bed(){
  fill(255);//sheets
  noStroke();
  rect(350, 350, 550, 150);
  
  fill(255);//duvet
  stroke(darkgrey);
  rect(350, 350, 440, 150);

  stroke(darkgrey);//stripes on bed
  strokeWeight(6);
  for (let x = 350; x <= 800; x += 20) {
    line(x, 350, x, 550);
  }
  
  //pillows
  fill(darkgrey);
  noStroke();
  beginShape();
  vertex(850, 410);
  vertex(825, 340);
  vertex(925, 340);
  vertex(950, 410);
  endShape(CLOSE);
  
  beginShape();
  vertex(850, 510);
  vertex(825, 440);
  vertex(925, 440);
  vertex(950, 510);
  endShape(CLOSE);
}
  

function nightstand(){
  fill(60);//night stand
  rect(100, 340, 200, 160);  
  
  fill(184, 175, 151);//perfume
  stroke (255);
  strokeWeight(2);
  rect(195, 314, 20, 25);

  fill(186, 186, 186);
  noStroke();
  rect(202, 308, 6, 5);
  
  fill(0);//book 1
  rect(230, 330, 50, 10); 
  
  fill(255);
  rect(233, 333, 44, 7);
  
  fill(0);//book 2
  rect(235, 320, 40, 10);
  
  fill(255);
  rect(238, 323, 34, 7);
}

function clock(){
  fill(255);
  stroke(darkgrey);
  strokeWeight(3);
  ellipse (150, 320, 40, 40);//main circle
  fill(darkgrey);
  ellipse(150, 295, 5, 5);//top part
  line(133, 331,128, 340);//outer lines
  line(167, 331, 172, 340);
  
  //clock hands
  push();
  translate(150, 320);
  rotate(frameCount * 0.002);
  line(0, 0, 0, -15);
  rotate(frameCount * 0.001);
  line(0, 0, 0, -10);
  pop(); 
}

function scene2(){
  currentSky = color (125, 132, 138);
  background(floorcolor);

  fill(255);//bed
  noStroke();
  rect(0, 0, 750, 500);
  
  noStroke();//pillows
  fill(darkgrey);
  rect(75, 45, 250, 195);
  rect(400, 45, 250, 195);
  
  fill(shirt);
  ellipse(202, 247, 100, 180);
  
  fill(255);//duvet
  stroke(darkgrey);
  strokeWeight(6);
  rect(0, height / 2, 750, 255);

  for (let y = height / 2; y < height; y += 20) {//stripes on bed
    line(0, y, 750, y);
  }
 
  fill(skin);//face
  noStroke();
  ellipse(199, 126, 65, 80);
 
  fill (207, 178, 147);//eyelid
  noStroke();
  ellipse(178, 110, 15, 15);
  
  fill(255);//eye
  stroke(0);
  strokeWeight(0.5);
  ellipse(177, 113, 15, 10);
  
  
if (irisY < 115) {
  irisY = irisY + 0.1;
}
  
  fill(0);//iris
  noStroke();
  ellipse(173, irisY, 5, 5);
  
  fill(hair);//hair
  beginShape();
  curveVertex(199, 215);
  curveVertex(203, 84);
  curveVertex(250, 106);
  curveVertex(245, 140);
  curveVertex(278, 215);
  curveVertex(199, 215);
  endShape(CLOSE);
}

function Person1(x, y){
 
  fill(hair);
  noStroke();
  beginShape();
  curveVertex(x - 28, y - 10);
  curveVertex(x + 35, y - 8);
  curveVertex(x + 48, y + 12);
  curveVertex(x + 35, y + 32);
  curveVertex(x - 25, y + 35);
  curveVertex(x - 30, y + 20);
  curveVertex(x - 28, y - 10);
  curveVertex(x + 35, y - 8);
  endShape(CLOSE);
}
function scene3(){
  background(242, 237, 218);
   windows();
  
  for (let i = 0; i < raindrops.length; i++) {
    raindrops[i].move();
    raindrops[i].display();
 }
  
  bed();
  nightstand();
  clock();
  tshirt();
  Person2(740, 365); 
}

function Person2(x, y){
  fill(hair);
  noStroke();
  beginShape();
  curveVertex(x - 10, y - 22);
  curveVertex(x - 8,  y - 85);
  curveVertex(x + 12, y - 98);
  curveVertex(x + 32, y - 85);
  curveVertex(x + 35, y - 25);
  curveVertex(x + 20, y - 20);
  curveVertex(x - 10, y - 22);
  curveVertex(x - 8,  y - 85);
  endShape(CLOSE);
}

function tshirt(){
  fill(shirt);
  noStroke();
  beginShape();
  curveVertex(727, 352);
  curveVertex(752, 335);
  curveVertex(777, 352);
  curveVertex(792, 420);
  curveVertex(712, 420);
  endShape(CLOSE);
}

class Raindrop{
  constructor(){
    if(random() <0.5){
      this.x = random (100, 475);
    } else {
      this.x = random (480, 855);
    }
    this.y = random(20, 270);
    this.size = 3
    this.speed = 2;
}
  
  move(){
    this.y += this.speed;
    if(this.y > 270){
      this.y = 20;
    }
  }
  
  display(){
    fill(rain);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}

function scene4(){
  background(242, 237, 218);
  door();
  Person3();
}

function scene5(){
  background(85, 90, 94);
  fill(200);//road
  noStroke();
  rect(0, 300, 900, 200);
  
  //car
  fill(255);
  noStroke();
  rect(carX, 250, 100, 70);

  fill(0);
  noStroke();
  ellipse(carX + 20, 320, 20, 20);
  ellipse(carX + 80, 320, 20, 20);
  
  if (carX < width) {
    carX += 10;
  }
}

function scene6(){
  background(242, 237, 218);
  door();
  Person4();
}

function scene7(){
  background(242, 237, 218);
  currentSky = color(213, 225, 237);

  fill(currentSky);//windowns
  stroke(184, 176, 149);
  strokeWeight(6);
  rect(100, 20, 375, 250);
  rect(480, 20, 375, 250);
  
  fill(255);
  noStroke();
  rect(80, 20, 795, 5);

  fill(curtains);
  noStroke();
  rect(110, 20, lcurtainW, 245);
  rect(845 - rcurtainW, 20, rcurtainW, 245);
  
  if (lcurtainW < 355) lcurtainW += 3;
  if (rcurtainW < 355) rcurtainW += 3;
  
  bed();
  nightstand();
  clock();
  Person1(810, 365);
}

let leftPupilX = 473;
let rightPupilX = 535;

function Person3(){
  let x = width/2;
  let y = height/2 + 250;
  
  fill(hair);
  noStroke();
  beginShape();
  curveVertex(x - 50, y - 110);
  curveVertex(x - 40, y - 425);
  curveVertex(x + 60, y - 490);
  curveVertex(x + 160, y - 425);
  curveVertex(x + 175, y - 125);
  curveVertex(x + 100, y - 100);
  curveVertex(x - 50, y - 110);
  curveVertex(x - 40, y - 425);
  endShape(CLOSE);
  
  fill(skin);
  noStroke();
  ellipse(505, 170, 150, 200);
  
  fill(207, 178, 147);//eyelids
  noStroke();
  ellipse (473, 143, 25, 20);//left
  ellipse (535, 143, 25, 20);//right
  
  fill(255);
  stroke(0);
  strokeWeight(0.5);//eyes
  ellipse (473, 146, 25, 17);//left
  ellipse(535, 146, 25, 17);//right
  
  if (leftPupilX > 463) {
    leftPupilX -= 0.3;
  }
  if (rightPupilX > 525) {
    rightPupilX -= 0.3;
  }

  fill(0);//pupil
  ellipse(leftPupilX, 146, 10, 10);//left
  ellipse(rightPupilX, 146, 10, 10);//right
  
  fill(shirt);
  noStroke();
  ellipse(510, 470, 280, 400);
}


function Person4(){
  let x = width/2;
  let y = height/2 + 250;
  
  fill(hair);
  noStroke();
  beginShape();
  curveVertex(x - 50, y - 110);
  curveVertex(x - 40, y - 425);
  curveVertex(x + 60, y - 490);
  curveVertex(x + 160, y - 425);
  curveVertex(x + 175, y - 125);
  curveVertex(x + 100, y - 100);
  curveVertex(x - 50, y - 110);
  curveVertex(x - 40, y - 425);
  endShape(CLOSE);
  
  fill(skin);
  noStroke();
  ellipse(505, 170, 150, 200);
  
  fill(207, 178, 147);//eyelids
  noStroke();
  ellipse (473, 143, 25, 20);//left
  ellipse (535, 143, 25, 20);//right
  
  fill(255);
  stroke(0);
  strokeWeight(0.5);//eyes
  ellipse (473, 146, 25, 17);//left
  ellipse(535, 146, 25, 17);//right
  
  if (leftPupilX < 483) {
    leftPupilX += 0.3;
  }
  if (rightPupilX < 545) {
    rightPupilX += 0.3;
  }

  fill(0);//pupil
  ellipse(leftPupilX, 146, 10, 10);//left
  ellipse(rightPupilX, 146, 10, 10);//right
  
  fill(shirt);
  noStroke();
  ellipse(510, 470, 280, 400);
}

function door(){
  fill(255);
  noStroke();
  rect(640, 100, 200, 400);
  fill(240);
  stroke(0);
  ellipse(800, 350, 20, 20);
}
