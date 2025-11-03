let lcurtainW = 355;
let rcurtainW = 355;

let lightpink;
let curtains;
let darkpink;
let hair;
let skin;
let shirt;
let floorcolor;
let sky;
let rain;

let irisY = 111;

let curtainsOpen = false;

let raindrops = [];

function setup() {
  createCanvas(900, 500);
  
  lightpink = color(252, 240, 247);
  darkpink = color(252, 194, 227);
  hair = color (61, 37, 2);
  floorcolor = color (186, 161, 123);
  shirt = color(181, 9, 115);
  skin = color (230, 198, 163);
  sky = color (194, 223, 252);
  rain = color (13, 45, 115, 100);
  curtains = color(252, 194, 227, 200);

  for (let i = 0; i < 100; i++) {
    raindrops.push(new Raindrop());
  }
  
}

function draw() {
  print(mouseX, mouseY);
  if (!curtainsOpen){
    scene1();
  } else if (irisY < 115) {
    scene2();
  } else if (millis() < 15000) {
    scene3();
  } else {
    scene4();
  }
}

function scene1(){
  background(242, 237, 218);
  windows();
  bed();
  nightstand();
  clock();
  Person1(810, 365);
}

function windows(){
  fill(sky);
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
  
  fill(lightpink);//duvet
  stroke(darkpink);
  rect(350, 350, 440, 150);

  stroke(darkpink);//stripes on bed
  strokeWeight(6);
  for (let x = 350; x <= 800; x += 20) {
    line(x, 350, x, 550);
  }
  
  //pillows
  fill(darkpink);
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
  fill(51, 31, 7);//night stand
  rect(100, 340, 200, 160);  
  
  fill(245, 206, 91);//perfume
  stroke (255);
  strokeWeight(2);
  rect(195, 314, 20, 25);

  fill(186, 186, 186);
  noStroke();
  rect(202, 308, 6, 5);
  
  fill(99, 12, 66);//book 1
  rect(230, 330, 50, 10); 
  
  fill(255);
  rect(233, 333, 44, 7);
  
  fill(145, 22, 98);//book 2
  rect(235, 320, 40, 10);
  
  fill(255);
  rect(238, 323, 34, 7);
}

function clock(){
  fill(255);
  stroke(242, 90, 179);
  strokeWeight(3);
  ellipse (150, 320, 40, 40);//main circle
  fill(242, 90, 179);
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
  background(186, 161, 123);

  fill(255);//bed
  noStroke();
  rect(0, 0, 750, 500);
  
  noStroke();//pillows
  fill(darkpink);
  rect(75, 45, 250, 195);
  rect(400, 45, 250, 195);
  
  fill(shirt);
  ellipse(202, 247, 100, 180);
  
  fill(lightpink);//duvet
  stroke(darkpink);
  strokeWeight(6);
  rect(0, height / 2, 750, 255);

  for (let y = height / 2; y < height; y += 20) {//stripes on bed
    line(0, y, 750, y);
  }
 
  fill(skin);//face
  noStroke();
  ellipse(199, 126, 65, 80);
 
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
  Person3();
  
}

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
  
  fill(255);
  stroke(0);
  strokeWeight(0.5);

  ellipse (473, 146, 25, 17);
  ellipse(535, 146, 25, 17);
  
  fill(0);
  ellipse(473, 146, 10, 10);
  ellipse(535, 146, 10, 10);
  
  fill(shirt);
  noStroke();
  ellipse(510, 470, 280, 400);
}
