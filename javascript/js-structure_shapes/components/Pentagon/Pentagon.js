// this is only the definition of a function it isn't called
// => getRandomColor here is only a local variable

export default function Pentagon(getRandomColor) {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
}
