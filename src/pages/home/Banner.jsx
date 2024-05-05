import React from "react";
import styled from "styled-components";
import background from "../../assets/images/bg-hero.jpg";
import ServicesCmpt from "./Services";

const bannerImage = require("../../assets/images/banner.jpeg");

const BannerContainer = styled.div`
  background: linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)),
    url(${background});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: #0f172b;
  padding: 3rem 0.75rem;
`;

const BannerWrapper = styled.div`
  padding: 3rem 3rem 0 3rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const BannerTitle = styled.h1`
  color: #fff;
  font-weight: 700;
  line-height: 1.5;
  font-size: calc(1rem + 1vw);
  font-family: "Briem Hand", cursive;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fea116;
    text-decoration-style: wavy;
  }
`;

const BannerImage = styled.img`
  border-radius: 2rem;
  border: 1px solid #fff;
  cursor: pointer;
  &:hover {
    border: 2px solid #fea116;
  }
`;

const EnquiryLink = styled.a`
  color: #fff;
  background-color: #fea116;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;

const BannerCmpt = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <div className="d-flex row align-items-center mt-0 mt-lg-5">
          <div className="col-lg-6 text-center text-lg-start">
            <BannerTitle className="animated slideInLeft ">
              Eat our food, Feel the flavour,
              <br />
              Enjoy the taste, Fill your soul.
            </BannerTitle>
            <p className="text-white animated slideInLeft mb-2 pb-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>

            <EnquiryLink href="#" className="animated slideInLeft">Read more</EnquiryLink>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <BannerImage
              src={bannerImage}
              alt="banner"
              className="img-fluid animated slideInRight mt-5 mt-lg-0"
            />
          </div>
        </div>
        <ServicesCmpt />
      </BannerWrapper>
    </BannerContainer>
  );
};

export default BannerCmpt;
