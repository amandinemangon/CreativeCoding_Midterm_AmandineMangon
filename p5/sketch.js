let lcurtainW = 355;
let rcurtainW = 355;

let lightpink;
let curtains;
let darkpink;
let hair;
let skin;
let shirt;
let floorcolor;

let curtainsOpen = false;
let person1;

function setup() {
  createCanvas(900, 500);
  
  lightpink = color(252, 240, 247);
  darkpink = color(252, 194, 227);
  hair = color (61, 37, 2);
  floorcolor = color (186, 161, 123);
  curtains = color(252, 194, 227, 200);
  
  person1 = new Person(830, 365);
  
}

function draw() {
  print(mouseX, mouseY);
  if (!curtainsOpen){
    scene1();
  }else{
    scene2();
  }
}


 function scene1(){
  background(242, 237, 218);
  windows();
  bed();
  nightstand();
  clock();
  person1.display();
}

function windows(){
  
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
  
  fill(curtains);//curtains
  noStroke();
  rect(110, 20, lcurtainW, 245);
  rect(845 - rcurtainW, 20, rcurtainW, 245);

  if (lcurtainW <=70 && rcurtainW<=70){
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
  rect(238, 323, 34, 7)
  
}

function clock(){
  fill(255);
  stroke(242, 90, 179);
  strokeWeight(3);
  ellipse (150, 320, 40, 40);//main circle
  fill(242, 90, 179);
  ellipse(150, 295, 5, 5);//top part
  line(133, 331,128, 340);//outter lines
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
 
  fill(lightpink);//duvet
  stroke(darkpink);
  strokeWeight(6);
  rect(0, height / 2, 750, 255);

  for (let y = height / 2; y < height; y += 20) {//stripes on bed
    line(0, y, 750, y);
  }

  noStroke();//pillows
  fill(darkpink);
  rect(75, 45, 250, 195);
  rect(400, 45, 250, 195);

  fill(hair);//person head
  beginShape();
  curveVertex(129, 222);
  curveVertex(146, 167);
  curveVertex(193, 102);
  curveVertex(239, 148);
  curveVertex(262, 222);
  endShape(CLOSE);
}

class Person {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  display(){
    fill(hair);
    noStroke();
    beginShape();
    curveVertex(this.x - 28, this.y - 10);
    curveVertex(this.x + 35, this.y - 8);
    curveVertex(this.x + 48, this.y + 12);
    curveVertex(this.x + 35, this.y + 32);
    curveVertex(this.x - 25, this.y + 35);
    curveVertex(this.x - 30, this.y + 20);
    curveVertex(this.x - 28, this.y - 10);
    curveVertex(this.x + 35, this.y - 8);
    endShape(CLOSE);
  }
}

