import React from "react";
import NavbarCmpt from "../../components/navbar/Navbar";
import BannerCmpt from "./Banner";
import FooterCmpt from "../../components/footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <NavbarCmpt />
      <BannerCmpt/>
      <FooterCmpt />
    </div>
  );
};

export default AboutPage;
