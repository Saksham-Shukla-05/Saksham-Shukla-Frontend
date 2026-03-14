import Hero from "./sections/Hero";
import Ticker from "./sections/Ticker";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import CTA from "./sections/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <Ticker />
      <About />
      <TechStack />
      <CTA />
    </div>
  );
};

export default Home;
