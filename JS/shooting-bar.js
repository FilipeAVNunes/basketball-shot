const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const intervalWidth = 172;
context.lineWidth = 5;
// ------------------------------------shooting bar--------------------------------
function shootingBar() {
  context.save();
  context.beginPath();
  context.lineWidth = 1;
  context.fillStyle = 'gold';
  context.fillRect(98, 439, 705, 53);
  context.stroke();
  context.closePath();
  context.restore();
}

// ----------------------------shooting bar margin-------------------------------------
function marginShootingBar() {
  context.save();
  context.beginPath();
  context.strokeStyle = 'goldenrod';
  context.lineWidth = 5;
  context.strokeRect(98, 438, 705, 55);
  context.stroke();
  context.closePath();
  context.restore();
}

//------------------------------ interval----------------------------------------
function shootingInterval() {
  context.save();
  context.beginPath();
  context.strokeStyle = 'purple';
  context.lineWidth = 5;
  context.strokeRect(368, 436, intervalWidth, 59);
  context.stroke();
  context.closePath();
  context.restore();
}

// ----------------------------------shot line ------------------------------------

context.strokeStyle = 'black';
var posx = 100;
var lineLength = 12;
var speed = 3;

function drawLine() {
  context.save();
  context.beginPath();
  context.lineWidth = 4;
  context.moveTo(posx, 440);
  context.lineTo(posx, 491);
  context.stroke();
  context.restore();
}

function moveLine() {
  posx += speed;

  if (posx < 102 || posx > 795) {
    speed = speed * -1;
  }
}

function loop() {
  context.clearRect(98, 438, 705, 55);
  shootingBar();
  marginShootingBar();
  shootingInterval();
  moveLine();
  drawLine();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
