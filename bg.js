const body = document.querySelector("body");

function paintImage(random) {
  const image = new Image();
  image.src = `./images/${random + 1}.jpg`;
  body.appendChild(image);
  image.classList.add("bg");
}

function getRandom() {
  const number = Math.floor(Math.random() * 5);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
