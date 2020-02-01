const kobeUrl = '/IMAGES/kobe1.png';

const kobe = new Image();
kobe.src = kobeUrl;

kobe.addEventListener('load', () => {
  context.drawImage(kobe, 300, 230, 60, 60);
});
