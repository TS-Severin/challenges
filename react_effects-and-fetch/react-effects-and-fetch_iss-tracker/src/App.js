import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

// 3. With the help of `useEffect` set an interval (with `setInterval`) to update the ISS coords every 5 seconds. The interval should be installed only on the first render of the app.
//    (HINT: Research `setInterval` on MDN if you don't know it)

// 4. The `setInterval` function returns an ID of the respective interval. You can clear the interval by calling `clearInterval` with this id. Inside the useEffect, return a cleanup function, which executes this `clearInterval` function with the correct ID.

// > 💡 Returning a cleanup function is important to not set multiple timers simultaneously. If you wouldn't define a cleanup function, each initial render of the component would start another timer that would never be stopped. This results in updating the coordinates way more often than desired.

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const getCoords = await response.json();
      setCoords({
        longitude: getCoords.longitude,
        latitude: getCoords.latitude,
      });
    } catch (error) {
      console.log("Sorry, we can't locate the Iss!");
    }
  }

  useEffect(() => {
    getISSCoords();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
      console.log("update iss");
    }, 5000);

    // setInterval(() => {getISSCoords()}, 5000);

    // cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
