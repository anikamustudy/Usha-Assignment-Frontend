import React from "react";
import NavMenuDesktop from "./NavMenuDesktop";
import HomeSlider from "../home/HomeSlider";
import FooterDesktop from "./FooterDesktop";

function Hero() {
  return (
    <div>
      <NavMenuDesktop />
      <HomeSlider />
      <FooterDesktop />
    </div>
  );
}

export default Hero;
