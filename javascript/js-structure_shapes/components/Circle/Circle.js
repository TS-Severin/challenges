// this is only the definition of a function it isn't called
// => getRandomColor here is only a local variable

export default function Circle(getRandomColor) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}
