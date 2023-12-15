console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filleStars) {
  starContainer.innerHTML = "";

  let counter = 1;
  while (counter <= 5) {
    var img = document.createElement("img");
    starContainer.append(img);
    img.src = "assets/star-empty.svg";

    img.addEventListener("click", (event) => {
      if (counter <= filledStars) {
        img.src = "assets/star-filled.svg";
      }
    });
  }
}

renderStars();
