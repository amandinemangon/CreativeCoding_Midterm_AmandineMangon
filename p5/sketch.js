let lcurtainW = 355;
let rcurtainW = 355;
let person1;

function setup() {
  createCanvas(900, 500);
  person1 = new Person(830, 365);
}

function draw() {
  background(242, 237, 218);
  windows();
  bed();
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
  
  fill(252, 194, 227, 200);
  noStroke();
  rect(110, 20, lcurtainW, 245);
  rect(845 - rcurtainW, 20, rcurtainW, 245);
}

function bed(){
  fill(255);//sheets
  noStroke();
  rect(350, 350, 550, 150);
  
  fill(252, 240, 247);//duvet
  stroke(252, 194, 227);
  rect(350, 350, 440, 150);

 stroke(252, 194, 227);//stripes on bed
 strokeWeight(6);
 for (let x = 350; x <= 800; x += 20) {
   line(x, 350, x, 550);
 }
  
  //pillows
 fill(252, 194, 227);
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

class Person {
  constructor(x,y){
    this.x=x;
    this.y =y;
  }

display(){
  fill(77, 48, 3);//person's hair
  noStroke();
  beginShape();
  curveVertex(this.x-28, this.y-10);
  curveVertex(this.x+35, this.y-8);
  curveVertex(this.x+48, this.y+12);
  curveVertex(this.x+35, this.y+32);
  curveVertex(this.x-25, this.y+35);
  curveVertex(this.x-30, this.y-20);
  curveVertex(this.x+28, this.y-10);
  curveVertex(this.x+35, this.y-8);
  endShape(CLOSE);

  }

sleeping(){

}
}
