const imageUrl = '/IMAGES/Basketball Court.H01.2k (1).png';

const image = new Image();
image.src = imageUrl;



image.addEventListener('load', () => {
  const canvasWidth = context.canvas.width;
  const canvasHeight = context.canvas.height;
  context.drawImage(image, -800, 0, 1800, canvasHeight);

});
