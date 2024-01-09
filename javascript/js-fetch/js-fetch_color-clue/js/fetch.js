import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;

  // --v-- your code here --v--

  // 1. Use the `fetch()` function to get data from the Color API.
  async function getColors() {
    try {
      const response = await fetch(colorApiUrl);
      if (response.ok) {
        // 2. Use the `.json()` method to parse the body of the response and convert it into an object.

        const data = await response.json();
        console.log(data);
        // 3. Inspect the parsed object (e.g. by logging it to the console) and find the hex value and name of the closest named color.
        var hexValue = data.name.closest_named_hex;
        var nameColor = data.name.value;
        console.log("hexValue: ", hexValue);
        console.log("name Color: ", nameColor);
        // 4. Call the `setColorToGuess()` function with the hex value and name of the closest named color.
        setColorToGuess(hexValue, nameColor);
      }
    } catch (error) {
      console.log("Oooopsy, error ------->", error);
    } finally {
      console.log("finally works");
    }
  }
  getColors();
  // 5. Guess colors! 🎉

  // --^-- your code here --^--
}
