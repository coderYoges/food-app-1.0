import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import background from "../../assets/images/bg-hero.jpg";
import { homePageConstants } from "../../config";
import { useNavigate } from "react-router-dom";

const BannerContainer = styled.div`
  background: linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)),
    url(${background});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: #0f172b;
  padding: 3rem 0.75rem;
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
  color: #fff;
  font-weight: 700;
  line-height: 1.5;
  font-size: calc(1rem + 1vw);
  font-family: "Briem Hand", cursive;
  cursor: pointer;
`;

const EnquiryLink = styled.span`
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

const ImageStyled = styled.img`
  && {
    border-radius: 0.5rem;
  }
`;

const BannerCmpt = ({ navbarOpened }) => {
  const navigate = useNavigate();
  const handleEnquiry = () => {
    navigate("/about", { replace: true });
  };
  return (
    <BannerContainer
      navbarOpened={navbarOpened}
      className={` ${navbarOpened ? "roll-margin" : ""}`}
    >
      <BannerWrapper>
        <div className="d-flex row align-items-center mt-0 mt-lg-2">
          <BannerTitle
            className="col-lg-12 text-center mb-md-5"
            style={{
              color: "#fea116",
              marginBottom: "1rem",
              textDecoration: "none",
            }}
          >
            {homePageConstants.title}
          </BannerTitle>
          <div className="col-lg-12 text-center mb-4 d-md-none">
            <img
              src={require("../../assets/images/food-briyani-modified.png")}
              alt="Logo-Img"
              style={{
                width: "8rem",
                height: "8rem",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>

          <div className="col-lg-6 text-center text-lg-start">
            <BannerTitle className="animated slideInLeft ">
              {homePageConstants.header}
            </BannerTitle>
            <p
              className="text-white animated slideInLeft mb-2 pb-2"
              style={{ textAlign: "justify" }}
            >
              {homePageConstants.subHeader}
            </p>
            <EnquiryLink
              className="animated slideInLeft"
              onClick={handleEnquiry}
            >
              {homePageConstants.link}
            </EnquiryLink>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <ImageStyled
              src={require("../../assets/images/gallery-food-02.png")}
              alt="food"
              className="pt-4 pb-3 img-fluid"
            />
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
