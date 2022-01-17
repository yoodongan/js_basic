const images = ["mountain.jpg", "newyear.jpg", "sunflower.jpg"];

const chosenImage = images[parseInt(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);