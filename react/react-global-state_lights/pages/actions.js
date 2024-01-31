import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  onTurnAllLightsOff,
  onTurnAllLightsOn,
  isDimmed,
  lights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onTurnAllLightsOff={onTurnAllLightsOff}
        onTurnAllLightsOn={onTurnAllLightsOn}
        isDimmed={isDimmed}
        lights={lights}
      />
    </>
  );
}
