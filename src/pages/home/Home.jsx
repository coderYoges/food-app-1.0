import React from "react";
import styled from "styled-components";
import NavbarCmpt from "../../components/navbar/Navbar";
import BannerCmpt from "./Banner";
import ServicesCmpt from './Services';
import FooterCmpt from "../../components/footer/Footer";

const HomePageContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1078px) {
    width: 90vw !important;
  }
`;

const BannerContainer = styled.div`
  padding: 0;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <BannerContainer>
        <NavbarCmpt />
        <BannerCmpt />
        <ServicesCmpt />
        <FooterCmpt />
      </BannerContainer>
    </HomePageContainer>
  );
};

export default HomePage;
