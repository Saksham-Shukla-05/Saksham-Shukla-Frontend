import Hero from "./sections/Hero";
import Ticker from "./sections/Ticker";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import CTA from "./sections/CTA";
import FadeUp from "../../components/shared/FadeUp";

const Home = () => {
  return (
    <div>
      <Hero />
      <Ticker />
      <FadeUp>
        <About />
      </FadeUp>
      <FadeUp delay={0.1}>
        <TechStack />
      </FadeUp>
      <FadeUp delay={0.1}>
        <CTA />
      </FadeUp>
    </div>
  );
};

export default Home;
