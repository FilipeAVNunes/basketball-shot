const imageUrl = '/IMAGES/Basketball Court.H01.2k (1).png';

const image = new Image();
image.src = imageUrl;
/*
const characterImageUrl = 'https://img.itch.zone/aW1hZ2UvMTMwMDQ5LzU5OTgzNy5wbmc=/original/U6%2ForS.png';

const characterImage = new Image();
characterImage.src = characterImageUrl;
*/
image.addEventListener('load', () => {
  const canvasWidth = context.canvas.width;
  const canvasHeight = context.canvas.height;
  context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
  /*
  characterImage.addEventListener('load', () => {
    const characterHeight = 100;
    context.drawImage(characterImage, 100, 120, 300, 500, 200, 500 - 100, 66, 100);
  });
*/
});
