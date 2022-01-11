let field, connections;
const xCount = 10;

function setup() {
  // console.log('setup');
  colorMode(HSB, 1);
  createCanvas(innerWidth, innerHeight);
  field = buildTable();
  connections = buildConnections(field);
  // console.table(field);
}


function draw() {
  console.log('step');
  // console.log(new sixDegreeNode()+' ');
  background(.75);
  drawField(field);

  drawConnections(connections);
  noLoop();
  // console.log('stepDone');
}

function drawField(points) {
  fill(1)
  noStroke();
  let minAxis = Math.min(width, height);
  let newScale = minAxis;
  scale(newScale);
  translate(.05, .05);
  for (let index = 0; index < points.length; index++) {
    const point = points[index];
    circle(point.x, point.y, .01);
  }
}

function drawConnections(links) {
  stroke(0);
  strokeWeight(.005);
  const c = links.length;
  for (let index = 0; index < c; index++) {
    const link = links[index];
    const a = link.left;
    const b = link.right;
    line(a.x, a.y, b.x, b.y);
  }
}


function buildTable() {
  points = [];
  for (let i = 0; i < xCount; i++) {
    for (let j = 0; j < xCount; j++) {
      const nodeObject = {
        x: i / xCount,
        y: j / xCount
      }
      points.push(nodeObject);
    }
  }
  return points;
}
// function buildConnectionsFamily() {
//   links = [];
//   for (let i = 0; i < xCount; i++) {
//     for (let j = 0; j < xCount; j++) {
//       for (let k = j + 1; k < xCount; k++) {
//         const connection = { left: i * xCount + j, right: i * xCount + k }
//         links.push(connection);
//       }
//     }
//   }
//   return links;
// }
function buildConnections(points) {
  links = [];
  for (let i = 0; i < 10; i++) {
    const l = floor(random(points.length));
    const r = floor(l + random(points.length) + points.length - 1) % points.length;
    const connection = { left: points[l], right: points[r] }
    links.push(connection);
  }
  return links;
}

function mousePressed() { }

function mouseReleased() {
  connections = buildConnections(field);
  loop();
}

function mouseDragged() {
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  loop();
}
