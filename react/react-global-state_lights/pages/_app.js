import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightId) {
    const updatedLightArray = lights.map((light) =>
      light.id === lightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(updatedLightArray);
  }

  const lightsOnCount = lights.filter((light) => light.isOn).length;

  function handleTurnAllLightsOff() {
    const lightsOff = lights.map((light) => ({ ...light, isOn: false }));
    setLights(lightsOff);
  }

  function handleTurnAllLightsOn() {
    const allLightsOn = lights.map((light) => ({ ...light, isOn: true }));
    setLights(allLightsOn);
  }

  const isDimmed = lights.every((light) => light.isOn === false);
  console.log("Dimmed????????", isDimmed);

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        toggleLight={handleToggle}
        lights={lights}
        lightsOnCount={lightsOnCount}
        onTurnAllLightsOff={handleTurnAllLightsOff}
        onTurnAllLightsOn={handleTurnAllLightsOn}
        isDimmed={isDimmed}
      />
    </Layout>
  );
}
