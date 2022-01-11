let field;
function setup() {
  // console.log('setup');
  colorMode(HSB, 1);
  createCanvas(innerWidth, innerHeight);
  field = buildTable();
}


function draw() {
  console.log('step');
  console.table(field);
  // console.log(new sixDegreeNode()+' ');
  noLoop();
  // console.log('stepDone');
}

function drawField(eval = (point) => { return point.x > point.y }) {

}


function buildTable() {

  points = [];
  for (let i = 0; i < 5; i++) {
    points[i] = [];
    for (let j = 0; j < 5; j++) {
      points[i][j] = {
        x: i,
        y: j,
        connections: []
      }
    }
  }
  return points;
}

function mousePressed() { }

function mouseReleased() {
  // loop();
}

function mouseDragged() {
  // decrementColor();
}
function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  // field = buildTable();
  loop();
}
