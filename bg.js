const body = document.querySelector("body");

function handleImgLoad() {
  console.log("hello");
}

function paintImage() {
  const image = new Image();
  image.src = `https://images.unsplash.com/photo-1591749161298-e4af15ec787d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`;
  body.appendChild(image);
  image.classList.add("bg");
  image.addEventListener("loadend", handleImgLoad);
}

function init() {
  paintImage();
}

init();
