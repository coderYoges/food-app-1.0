import React, { Fragment } from "react";
import NavbarCmpt from "../../components/navbar/Navbar";
import BannerCmpt from "./Banner";
import FooterCmpt from "../../components/footer/Footer";
import TestimonialCmpt from "./Testimonials";

const AboutPage = () => {
  return (
    <Fragment>
      <NavbarCmpt />
      <BannerCmpt/>
      <TestimonialCmpt />
      <FooterCmpt />
    </Fragment>
  );
};

export default AboutPage;
