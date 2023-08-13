let symmetry = 8;
let angle = 360 / symmetry;
let musicBox;
let x;

let rotation = 0; // Update this value to rotate the kaleidoscope.

function setup() {
  createCanvas(document.body.clientWidth, document.body.clientHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < symmetry; i++) {
    push();

    rotate(i * angle);
    //mirroring
    if (i % 2 == 1) {
      scale(-1, 1);
    }
    //animation:

    musicBox = rotation;
    rotate(musicBox / 18.0);

    //drawing shapes
    blendMode(ADD);
    noStroke();

    //pink rect
    fill(255, 72, 176);
    rect(100, 100, 20, 50);

    push();
    fill(253, 231, 0);
    translate(100, 100);
    rotate(x * 60);
    triangle(30, 75, 58, 20, 86, 75);
    pop();
    x =
      +(
        //blue quares
        push()
      );
    rotate(musicBox / 4);
    fill(0, 121, 191);
    rect(30, 20, 55, 55);
    pop();

    //green circle
    fill(0, 169, 92);
    circle(80, 180, 25);

    //green arc
    noFill();
    strokeWeight(15);
    stroke(125, 148, 125);
    arc(180, 55, 120, 120, 0, 90);
    pop();
  }
}
