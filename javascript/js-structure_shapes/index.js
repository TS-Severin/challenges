import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

// the three function defined in the corresponding folders are called with the actual function getRandomColor as an argument => the function is imported above

const circleElement = Circle(getRandomColor);

const squareElement = Square(getRandomColor);

const pentagonElement = Pentagon(getRandomColor);

root.append(circleElement, squareElement, pentagonElement);
