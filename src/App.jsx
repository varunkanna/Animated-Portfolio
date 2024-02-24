import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navberr from "./components/navbar/Navberr";
import Parellex from "./components/parellex/Parellex";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Home Page">
        <Navberr />
        <Hero />
      </section>
      <section id="Services">
        <Parellex type={"Services"} />
      </section>
      <section><Services /></section>
      <section id="Portfolio">
        <Parellex type={"Portfolio"} />
      </section>
      <Portfolio />
      <section id="Contact Me">
        <Contact />
      </section>
    </div>
  );
}

export default App;
