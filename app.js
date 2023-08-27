window.onload = () => {
  main();
};
function main() {
  const btn = document.getElementById("btn");
  const root = document.getElementById("root");

  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    console.log(bgColor);
    root.style.backgroundColor = bgColor;
  });
}

function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}
