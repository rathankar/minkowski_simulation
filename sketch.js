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
  translate(width / 2, height / 2); // Move origin to the center
  drawAxes();
  drawLightCones();
  drawMovingFrame();
}

function drawAxes() {
  stroke(0);
  strokeWeight(1);
  // Draw x-axis (space axis)
  line(-width / 2, 0, width / 2, 0);
  // Draw t-axis (time axis)
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
  const beta = velocity; // v/c
  const gamma = 1 / sqrt(1 - beta * beta); // Lorentz factor

  // Calculate the angle for the moving frame axes
  const angleX = atan(beta); // Angle for x' axis
  const angleT = atan(beta); // Angle for t' axis

  // Draw x' axis (space axis of the moving frame)
  push();
  stroke(0, 0, 255);
  strokeWeight(1);
  rotate(angleX);
  line(-width / 2, 0, width / 2, 0);
  pop();

  // Draw t' axis (time axis of the moving frame)
  push();
  stroke(0, 0, 255);
  strokeWeight(1);
  rotate(-angleT); // Tilt in the opposite direction
  line(0, -height / 2, 0, height / 2);
  pop();
}

function updateVelocity() {
  velocity = parseFloat(velocitySlider.value());
  velocityValue.html(velocity.toFixed(2));
}
