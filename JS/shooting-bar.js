const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// shooting bar
context.beginPath();
context.lineWidth = 5;
context.fillStyle = 'gold';
context.fillRect(100, 440, 700, 50);
context.stroke();
context.closePath();
// shooting bar margin
context.beginPath();
context.lineWidth = 5;
context.strokeRect(98, 438, 705, 55);
context.stroke();
context.closePath();
// interval
context.beginPath();
context.moveTo(368, 440);
context.lineTo(368, 493);
context.moveTo(540, 440);
context.lineTo(540, 493);
context.stroke();
context.closePath();
// shot line
context.beginPath();
context.lineWidth = 2;
context.moveTo(104, 440);
context.lineTo(104, 493);
context.stroke();
context.closePath();
