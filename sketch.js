//The setup function only happens once
var kaku=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(50,kaku,214);
}
/
/The draw function happens over and over again
function draw() {
  background(1,50,32);
  stroke(255,255,127); // an RGB color for the circle's border
  strokeWeight(3);
  fill(mouseX,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height), 25,25); // center of canvas, 20px dia
  fill(28,247,106);
  strokeWeight(0);
  ellipse(mousex,mousey,50,50);
  fill(247,176,28);
  stroke(28,190,247);
  strokeWeight(5);
  rect(100,300)
  textSize(100);
  textFont('Garamond');
  text('Big bang crash')
  line(50,50,450,kaku);
}

function mousePressed()
{
if (kaku>=100)
{
kaku=0;
}

};