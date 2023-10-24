document.addEventListener("DOMContentLoaded", function () {
  const h2 = document.querySelector("#h2");
  const button = document.querySelector("button");
  const body = document.body;

  button.addEventListener("click", function () {
    newColor = makeranColor();
    body.style.backgroundColor = newColor;
    h2.innerHTML = newColor;
  });
});

function makeranColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return (newColor = `rgb(${r}, ${g}, ${b})`);
}
