import React, { Fragment } from "react";
import NavbarCmpt from "../../components/navbar/Navbar";
import BannerCmpt from "./Banner";
import FooterCmpt from "../../components/footer/Footer";

const AboutPage = () => {
  return (
    <Fragment>
      <NavbarCmpt />
      <BannerCmpt/>
      <FooterCmpt />
    </Fragment>
  );
};

export default AboutPage;
