import { useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header title="Journal" />
      <MainSection />
      <Footer title="Journal App - 2028" />
    </>
  );
}

export default App;
