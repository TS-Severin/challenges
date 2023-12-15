console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  starContainer.innerHTML = "";

  let counter = 1;
  while (counter <= 5) {
    var img = document.createElement("img");
    img.addEventListener("click", (event) => {
      console.log("works!");
    });
    starContainer.append(img);
    img.src = "assets/star-empty.svg";

    if (counter <= filledStars) {
      img.src = "assets/star-filled.svg";
    } else {
      img.src = "assets/star-empty.svg";
    }
    counter++;
  }
}
renderStars(3);
