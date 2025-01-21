let velocitySlider;
let velocityValue;
let velocity = 0;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas-container');
  velocitySlider = select('#velocity-slider');
  velocityValue = select('#velocity-value');
  velocitySlider.input(updateVelocity);
}

function draw() {
  background(255);
  drawAxes();
  drawLightCones();
  drawMovingFrame();
}

function drawAxes() {
  stroke(0);
  strokeWeight(1);
  // Draw x-axis
  line(-width / 2, 0, width / 2, 0);
  // Draw t-axis
  line(0, -height / 2, 0, height / 2);
}

function drawLightCones() {
  stroke(255, 0, 0);
  strokeWeight(2);
  // Draw light cone (x = ct)
  line(-width / 2, -height / 2, width / 2, height / 2);
  // Draw light cone (x = -ct)
  line(-width / 2, height / 2, width / 2, -height / 2);
}

function drawMovingFrame() {
  const gamma = 1 / sqrt(1 - velocity * velocity);
  const angle = atan(velocity);

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  stroke(0, 0, 255);
  strokeWeight(1);
  // Draw x'-axis
  line(-width / 2, 0, width / 2, 0);
  // Draw t'-axis
  line(0, -height / 2, 0, height / 2);
  pop();
}

function updateVelocity() {
  velocity = parseFloat(velocitySlider.value());
  velocityValue.html(velocity.toFixed(2));
}