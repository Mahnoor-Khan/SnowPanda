import "./index.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import SnowPandaProcess from "./components/SnowPandaProcess";
import SnowPanda from "./components/snowPanda";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SnowPanda />
      <SnowPandaProcess />
      <Contact />
    </>
  );
}

export default App;
