
var box1;

function setup() {
  createCanvas(600, 400);
  box1 = new Box();
  box2= new Box();
}

function draw() {
  background(220);

box1.show();
box2.show();
box1.newwidth(350);
box2.newwidth(200);
box2.y=30

}

