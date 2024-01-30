import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onTurnAllLightsOff,
  onTurnAllLightsOn,
  lights,
}) {
  // const anyLightOn = lights.some((light) => light.isOn === true);

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          onTurnAllLightsOff();
        }}
        // disabled={!anyLightOn ? true : false}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          onTurnAllLightsOn();
        }}
        // disabled={anyLightOn ? true : false}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
