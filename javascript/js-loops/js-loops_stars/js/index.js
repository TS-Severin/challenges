console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  starContainer.innerHTML = "";

  for (let count = 1; count <= 5; count++) {
    var img = document.createElement("img");
    img.src = "assets/star-empty.svg";
    starContainer.append(img);
    img.addEventListener("click", (event) => {
      // mein Versuch (der macht immer den 5. filled)
      // if (count <= filledStars) {
      //   img.src = "assets/star-filled.svg";
      // chat gpt
      for (let i = 1; i <= count; i++) {
        starContainer.children[i - 1].src = "assets/star-filled.svg";
      }
    });
  }
}

renderStars();
