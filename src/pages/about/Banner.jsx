import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
  padding: 3rem 3rem 0 3rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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

const BannerHeader = styled.h1`
  color: #0f172b;
  font-weight: 800;
  line-height: 1.2;
  font-size: calc(1.375rem + 1.5vw);
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const BannerContent = styled.p`
  color: #666565;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1rem;
  font-family: "Heebo", sans-serif;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const CounterWrapper = styled.div`
  padding: 0 1rem;
  align-items: center;
  border-left: 5px solid #fea116 !important;
  border-right: 5px solid #fea116 !important;
  display: flex;
`;

const CounterBox = styled.div`
  color: #fea116;
  flex-shrink: 0;
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 800;
  line-height: 1.2;
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

const BannerCmpt = ({ navbarOpened }) => {
  return (
    <BannerContainer
      navbarOpened={navbarOpened}
      className={` ${navbarOpened ? "roll-margin" : ""}`}
    >
      <BannerWrapper>
        <div className="d-flex row align-items-center mt-0 mt-lg-5">
          <div className="col-lg-6">
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
                  alt="about-img-2"
                />
              </div>
              <div className="col-6 text-end">
                <StyledImage
                  className="rounded animated zoomIn"
                  src={require("../../assets/images/about-4.jpg")}
                  alt="about-img-2"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <BannerTitle className="mt-4 mt-lg-0">About Us -----</BannerTitle>
            <div
              style={{
                boxShadow: "0 0 45px rgba(0, 0, 0, 0.08)",
                transition: "0.5s",
                cursor: "pointer",
                padding: "2rem",
              }}
            >
              <BannerHeader>Welcome to H.A. Briyani</BannerHeader>
              <BannerContent>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </BannerContent>
              <BannerContent>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </BannerContent>
            </div>
            <div className="row g-4 my-2 justify-content-center">
              <div className="col-sm-6">
                <CounterWrapper>
                  <CounterBox className="years-counter"></CounterBox>
                  <div className="ps-4">
                    <p className="mb-0" style={{ color: "#666565" }}>
                      Years of
                    </p>
                    <h6
                      className="text-uppercase mb-0"
                      style={{
                        color: "#0f172b",
                        fontWeight: "800",
                        fontSize: "1rem",
                        fontFamily: "Nunito,sans-serif",
                      }}
                    >
                      Experience
                    </h6>
                  </div>
                </CounterWrapper>
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

export default connect(mapStateToProps)(BannerCmpt);