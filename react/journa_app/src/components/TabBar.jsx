import Tab from "./Tab";
export default function TabBar() {
  return (
    <>
      <Tab
        title="All Entries"
        color="var(--color-nemo)"
        number="3"
        backgroundcolor="var(--color-nemo)"
        badgecolor="var(--color-foam)"
      />
      <Tab
        title="Favorites"
        number="1"
        backgroundcolor="var(--color-water-10)"
        badgecolor="var(--color-granite)"
      />
    </>
  );
}
