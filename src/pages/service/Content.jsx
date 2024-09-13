import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { homePageConstants } from "../../config";
import { useLocation } from "react-router-dom";
import { get } from "lodash";

const BannerContainer = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: #fff;
  padding: 1rem 0.75rem;
  margin-top: ${({ navbarOpened }) => (navbarOpened ? "300px" : "0")};
`;

const BannerWrapper = styled.div`
  padding: 3rem 1rem 0 1rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (min-width: 762px) {
    padding: 3rem 3rem 0 3rem;
  }
`;

const BannerTitle = styled.h1`
  color: #fea116;
  font-weight: 600;
  line-height: 1.5;
  font-size: calc(1rem + 1vw);
  font-family: "Pacifico", cursive;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const BannerContent = styled.p`
  color: #666565;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1rem;
  font-family: "Heebo", sans-serif;
  cursor: pointer;
  margin-bottom: 1.5rem;
  text-align: justify;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 0.2rem;
`;

const StyledImgShort = styled.img`
  margin-top: 25%;
  width: 75%;
  max-width: 75%;
  height: auto;
  border-radius: 0.2rem;
`;

const StyledImgShortTop = styled.img`
  width: 75%;
  max-width: 75%;
  height: auto;
  border-radius: 0.2rem;
`;

const ContentCmpt = ({ navbarOpened }) => {
  const location = useLocation();
  const selectedServiceId = get(location, "state.selectedServiceId", 0);
  return (
    <BannerContainer
      navbarOpened={navbarOpened}
      className={` ${navbarOpened ? "roll-margin" : ""}`}
    >
      <BannerWrapper>
        <div className="d-flex row align-items-center mt-0 mt-lg-5">
          <div
            className="col-lg-6 rounded p-4 animated fadeInUp"
            style={{
              boxShadow: "0 0 45px rgba(0, 0, 0, 0.08)",
              transition: "0.5s",
              cursor: "pointer",
              padding: "0 2rem",
            }}
          >
            <BannerTitle className="mt-4 mt-lg-0 text-center">
              {homePageConstants.services[selectedServiceId].title}
            </BannerTitle>
            <div>
              <BannerContent>
                {homePageConstants.services[selectedServiceId].content1}
              </BannerContent>
              <BannerContent>
                {homePageConstants.services[selectedServiceId].content2}
              </BannerContent>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mtl-lg-0">
            <div className="row g-3">
              <div className="col-6 text-start">
                <StyledImage
                  className="rounded animated zoomIn"
                  src={require("../../assets/images/about-1.jpg")}
                  alt="about-img-1"
                />
              </div>
              <div className="col-6 text-start">
                <StyledImgShort
                  className="rounded animated zoomIn"
                  src={require("../../assets/images/about-2.jpg")}
                  alt="about-img-2"
                />
              </div>
              <div className="col-6 text-end">
                <StyledImgShortTop
                  className="rounded animated zoomIn"
                  src={require("../../assets/images/about-3.jpg")}
                  alt="about-img-3"
                />
              </div>
              <div className="col-6 text-end">
                <StyledImage
                  className="rounded animated zoomIn"
                  src={require("../../assets/images/about-4.jpg")}
                  alt="about-img-4"
                />
              </div>
            </div>
          </div>
        </div>
      </BannerWrapper>
    </BannerContainer>
  );
};

const mapStateToProps = (state) => ({
  navbarOpened: state.auth.navbarOpened,
});

export default connect(mapStateToProps)(ContentCmpt);
