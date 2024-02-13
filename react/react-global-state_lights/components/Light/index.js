import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ onToggle, name, isOn, id }) {
  function handleToggle() {
    onToggle(id);
  }

  return (
    <LightButton type="button" onClick={handleToggle} $isOn={isOn}>
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
