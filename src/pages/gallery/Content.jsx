import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { galleryPageConstants } from "../../config";

const ContentContainer = styled.div`
  width: 100%;
  padding: 3rem 0.75rem;
  margin: 0 auto;
  margin-top: ${({ navbarOpened }) => (navbarOpened ? "300px" : "0")};
`;

const ContentWrapper = styled.div`
  padding: 3rem 3rem 0 3rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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

const ContentNavbar = styled.ul`
  margin-bottom: 1rem;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ContentNavItem = styled.li`
  cursor: pointer;
  display: inline-block;
  padding: 8px 15px;
  color: ${(props) => (props.active ? "#fdbe33" : "#030f27")};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  background: ${(props) => (props.active ? "#030f27" : "#fdbe33")};
  border: none;
  &:hover {
    background: #030f27;
    color: #fdbe33;
  }
`;

const ContentImage = styled.img`
  vertical-align: middle;
  height: auto;
  border-radius: 1rem;
  flex-shrink: 0;
  size: contain;
`;

const ContentCmpt = ({ navbarOpened }) => {
  const [menuItem, setMenuItem] = useState(0);
  return (
    <ContentContainer
      navbarOpened={navbarOpened}
      className={` ${navbarOpened ? "roll-margin" : ""}`}
    >
      <ContentWrapper>
        <div className="text-center animated fadeInUp">
          <ContentTitle>{galleryPageConstants.header}</ContentTitle>
          <ContentSubTitle>{galleryPageConstants.subHeader}</ContentSubTitle>
        </div>
      </ContentWrapper>
      <div className="text-center animated fadeInUp">
        <ContentNavbar>
          {galleryPageConstants.services.map((service, index) => (
            <ContentNavItem
              className="m-2"
              key={"services-" + index}
              onClick={() => setMenuItem(index)}
              active={menuItem === index}
            >
              {service}
            </ContentNavItem>
          ))}
        </ContentNavbar>
      </div>

      <div className="row animated fadeInUp px-2 px-md-5 m-0 pt-3">
        {galleryPageConstants.galleryImages[menuItem].map((image, index) => (
          <div
            className="col-md-6 my-4 "
            key={image + index}
            style={{ cursor: "pointer" }}
          >
            <div className=" d-flex justify-content-center ">
              <ContentImage
                src={require(`../../assets/images/${image}`)}
                alt={image}
              />
            </div>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

const mapStateToProps = (state) => ({
  navbarOpened: state.auth.navbarOpened,
});

export default connect(mapStateToProps)(ContentCmpt);
