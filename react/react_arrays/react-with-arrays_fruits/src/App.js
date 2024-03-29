import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 24007,
      name: "Banane",
      color: "yellow",
    },
    {
      id: 24008,
      name: "Apple",
      color: "green",
    },
    {
      id: 24009,
      name: "Kiwi",
      color: "green",
    },
    {
      id: 24010,
      name: "orange",
      color: "red",
    },
    {
      id: 24011,
      name: "cherry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits &&
        fruits.map((element) => (
          <Card name={element.name} color={element.color} key={element.id} />
        ))}
    </div>
  );
}
