// this is only the definition of a function it isn't called
// => getRandomColor here is only a local variable

export default function Square(getRandomColor) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}
