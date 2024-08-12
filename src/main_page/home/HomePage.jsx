import OpenAccount from "../OpenAccount";

import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Education from "./Education";
import Awards from "./Awards";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};

export default HomePage;
