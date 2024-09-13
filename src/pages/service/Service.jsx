import React, { Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import FooterCmpt from "../../components/footer/Footer";
import ContentCmpt from "./Content";

const ServicePage = ({ ...props }) => {
  return (
    <Fragment>
      <Navbar />
      <ContentCmpt props={props} />
      <FooterCmpt />
    </Fragment>
  );
};
export default ServicePage;
