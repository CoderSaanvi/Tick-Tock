var date,hr,min,sec;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  frameRate(1);
  
  date = new Date();
  hr = hour();
  sec = second();
  min = minute();

  text(hr +" : " + min +" : " + sec, 100,100);
  translate(250,250);
  rotate(-90)

  hAngle = map(hr %12,0,60,0,360);
  mAngle = map(min,0,60,0,360);
  sAngle = map(sec,0,60,0,360);

  push();
  rotate(hAngle);
  rotate(-180);
  strokeWeight(6);
  stroke("cyan");
  line(0,0,100,0);
  pop();

  push();
  rotate(mAngle);
  //rotate(-90)
  strokeWeight(6);
  stroke("hotPink");
  line(0,0,100,0);
  pop();

  push();
  rotate(sAngle);
  //rotate(-90)
  strokeWeight(6);
  stroke("yellow");
  line(0,0,100,0);
  pop();
//clock arcs
  push();
  
  //rotate(-90)
  strokeWeight(6);
  stroke("cyan");
  noFill();
  arc(0,0,240,240,0,hAngle);



  //rotate(-90)
  strokeWeight(5);
  stroke("hotPink");
  noFill();
  arc(0,0,260,260,0,mAngle);


  //rotate(-90)
  strokeWeight(4);
  stroke("yellow");
  noFill();
  arc(0,0,280,280,0,sAngle);
  pop();

  drawSprites();
}