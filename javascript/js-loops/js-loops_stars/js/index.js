console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  starContainer.innerHTML = "";

  for (let count = 1; count <= 5; count++) {
    const star = document.createElement("img");
    star.addEventListener("click", (event) => {
      renderStars(count);
    });

    if (count <= filledStars) {
      star.src = "assets/star-filled.svg";
    } else {
      star.src = "assets/star-empty.svg";
    }

    starContainer.append(star);
  }
}

renderStars();

// console.clear();

// const starContainer = document.querySelector('[data-js="star-container"]');

// function renderStars(filledStars) {
//   // reset the star container before rerendering stars
//   starContainer.innerHTML = "";

//   //--v-- your code here --v--

//   for (let count = 1; count <= 5; count++) {
//     const star = document.createElement("img");

//     if (filledStars >= count) {
//       star.src = "assets/star-filled.svg";
//     } else {
//       star.src = "assets/star-empty.svg";
//     }
//     star.addEventListener("click", (event) => {
//       renderStars(count);
//     });
//     starContainer.append(star);
//   }

//   //--^-- your code here --^--
// }

// renderStars();
