console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  //--v-- your code here --v--
  let counter = 1;
  while (counter <= 5) {
    var img = document.createElement("img");
    starContainer.append(img);
    img.src = "assets/star-empty.svg";
    counter++;
    //--^-- your code here --^--
  }
}

renderStars();
