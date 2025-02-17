import Button from "./components/Button.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient";
import "./index.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
