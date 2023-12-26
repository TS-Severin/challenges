console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
function getGreeting() {
  let time = new Date().getHours();
  console.log(time);
  if (time >= 6 && time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time < 18) {
    return "Good Afternoon";
  } else if (time >= 18 && time < 22) {
    return "Good Evening";
  } else if (time >= 22 || (time >= 0 && time < 6)) {
    return "Good Night";
  }
}

function getDayColor() {
  let weekday = new Date().getDay();
  console.log(weekday);
  if (weekday === 1) {
    return "darkgray";
  } else if (weekday >= 2 && weekday <= 5) {
    return "lightblue";
  } else if (weekday === 6 || weekday === 0) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
