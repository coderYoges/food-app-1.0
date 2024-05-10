import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
  margin-bottom: 3rem;
  justify-content: center;
  border-bottom: 3px solid #fea116;
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ContentNavbarList = styled.li`
  padding: 0.2rem 1rem;
`;

const ContentNavbarItem = styled.span``;

const ContentCmpt = ({ navbarOpened }) => {
  return (
    <ContentContainer
      navbarOpened={navbarOpened}
      className={` ${navbarOpened ? "roll-margin" : ""}`}
    >
      <ContentWrapper>
        <div className="text-center animated fadeInUp">
          <ContentTitle>---- Food Menu ----</ContentTitle>
          <ContentSubTitle>Most Popular Items</ContentSubTitle>
        </div>
      </ContentWrapper>
      <div className="text-center animated fadeInUp">
        <ContentNavbar>
          {["Option1", "Option2", "Option3"].map((item, index) => (
            <li
              key={index}
              style={{ padding: "0.2rem 1rem", cursor: "pointer" }}
            >
              {item}
            </li>
          ))}
        </ContentNavbar>
      </div>
    </ContentContainer>
  );
};

const mapStateToProps = (state) => ({
  navbarOpened: state.auth.navbarOpened,
});

export default connect(mapStateToProps)(ContentCmpt);
