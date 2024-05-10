import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { testimonialsConstants } from "../../config";
import { Carousel } from "react-responsive-carousel";
import { GoDotFill } from "react-icons/go";

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

const ContentTitle = styled.h1`
  color: #fea116;
  font-weight: 600;
  line-height: 1.5;
  font-size: calc(1rem + 1vw);
  font-family: "Pacifico", cursive;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const ContentSubTitle = styled.h2`
  color: #0f172b;
  font-weight: 800;
  line-height: 1.2;
  font-size: calc(1.375rem + 1.5vw);
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const TestimonialItem = styled.div`
  background: "#fea116";
  border-color: "#fea116";
  transition: 0.5s;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 2px solid #dee2e6;

`;

const TestimonialCarouselItem = styled.div`
  width: 296px;
  margin: 0 auto;
  height: 320px;
`;

const TestimonialImage = styled.img`
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
  flex-shrink: 0;
`;

const TestimonialCmpt = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BannerWrapper className="text-center animated fadeInUp">
      <ContentTitle>{testimonialsConstants.title}</ContentTitle>
      <ContentSubTitle>{testimonialsConstants.subTitle}</ContentSubTitle>
      <Carousel
        autoPlay
        centerMode
        centerSlidePercentage={
          windowSize > 1079 ? 33 : windowSize > 767 ? 50 : 100
        }
        autoFocus
        showStatus={false}
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            cursor: "pointer",
          };
          const style = isSelected
            ? { ...defStyle, color: "#fea116" }
            : { ...defStyle, color: "#A9A9A9" };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              <GoDotFill style={{ width: "1.5rem", height: "1.5rem" }} />
            </span>
          );
        }}
      >
        {testimonialsConstants.testimonies.map((testimony, index) => (
          <TestimonialCarouselItem key={"testimonial" + index}>
            <TestimonialItem>
              <i
                class="fa fa-quote-left fa-2x mb-3"
                style={{ color: "#fea116" }}
              ></i>
              <p>{testimony.message}</p>
              <div className="d-flex align-items-center">
                <TestimonialImage
                  src={testimony.imagePath}
                  alt={testimony.clientName}
                />
                <div className="ps-3">
                  <h5 className="mb-1">{testimony.clientName}</h5>
                  <small>{testimony.clientProfession}</small>
                </div>
              </div>
            </TestimonialItem>
          </TestimonialCarouselItem>
        ))}
      </Carousel>
    </BannerWrapper>
  );
};

export default TestimonialCmpt;
