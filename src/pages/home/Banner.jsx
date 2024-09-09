import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import background from "../../assets/images/bg-hero.jpg";
import { homePageConstants, bookletImages } from "../../config";
import { useNavigate } from "react-router-dom";
import { FlippingPages } from "flipping-pages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import "flipping-pages/dist/style.css";
import "react-lazy-load-image-component/src/effects/blur.css";

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

const FlippingWrapper = styled.div`
  && {
    height: 600px;
    min-height: 400px;
    width: 100%;
    margin-bottom: 2rem;
    @media (min-width: 762px) {
      padding: 0 8rem;
    }
  }
`;

const FlippingPage = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  background-color: #fea112;
`;

const FlippingPageImage = styled(LazyLoadImage)`
  object-fit: fill;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const FlippingButtonPrev = styled(GrLinkPrevious)`
  font-size: 1.5rem;
  font-weight: 600;
`;

const FlippingButtonNext = styled(GrLinkNext)`
  font-size: 1.5rem;
  font-weight: 600;
`;

const FlippingButtonWrap = styled.span`
  display: flex;
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    color: #fea112;
  }
`;

const BannerCmpt = ({ navbarOpened }) => {
  const navigate = useNavigate();
  const handleEnquiry = () => {
    navigate("/about", { replace: true });
  };
  const [selected, setSelected] = useState(0);
  const PlaceholderImage = require('../../assets/images/home-menu-placeholder.png');
  const back = () => {
    setSelected((selected) => Math.max(selected - 1, 0));
  };

  const next = () => {
    setSelected((selected) => Math.min(selected + 1, 6));
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
          <div className="w-100 mb-3 d-flex justify-content-around">
            <FlippingButtonWrap onClick={back}>
              <FlippingButtonPrev /> Prev
            </FlippingButtonWrap>
            <FlippingButtonWrap onClick={next}>
              Next <FlippingButtonNext />
            </FlippingButtonWrap>
          </div>
          <FlippingWrapper>
            <FlippingPages
              direction="right-to-left"
              onSwipeEnd={setSelected}
              selected={selected}
              disableSwipe={true}
              swipeSpeed={2000}
            >
              {bookletImages.map((image) => (
                <FlippingPage key={image}>
                  <FlippingPageImage
                    src={require(`../../assets/images/${image}.png`)}
                    alt={image}
                    effect="blur"
                    placeholderSrc={PlaceholderImage}
                    wrapperProps={{
                      style: { transitionDelay: "0.2s" },
                    }}
                  />
                </FlippingPage>
              ))}
            </FlippingPages>
          </FlippingWrapper>
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center text-lg-start">
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
          <div className="col-lg-2"></div>
        </div>
      </BannerWrapper>
    </BannerContainer>
  );
};

const mapStateToProps = (state) => ({
  navbarOpened: state.auth.navbarOpened,
});

export default connect(mapStateToProps)(BannerCmpt);
