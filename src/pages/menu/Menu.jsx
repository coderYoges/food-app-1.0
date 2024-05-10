import React, { Fragment } from "react";
import NavbarCmpt from "../../components/navbar/Navbar";
import ContentCmpt from "./Content";
import FooterCmpt from "../../components/footer/Footer";

const MenuPage = () => {
  return (
    <Fragment>
      <NavbarCmpt />
      <ContentCmpt/>
      <FooterCmpt />
    </Fragment>
  );
};

export default MenuPage;
