import React from "react";
import NavbarCmpt from "../../components/navbar/Navbar";
import ContentCmpt from "./Content";
import FooterCmpt from "../../components/footer/Footer";

const ContentPage = () => {
  return (
    <div>
      <NavbarCmpt />
      <ContentCmpt />
      <FooterCmpt />
    </div>
  );
};

export default ContentPage;
