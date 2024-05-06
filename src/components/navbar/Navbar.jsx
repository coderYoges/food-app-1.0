import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../config";

const NavbarContainer = styled.nav`
  @media (min-width: 992px) {
    padding: 1rem 3rem;
  }
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgb(15,23,43) !important;
`;

const NavbarBrand = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
  white-space: nowrap;
  text-decoration: none;
`;

const NavbarBanner = styled.h2`
  color: #fea116;
  margin: 0;
  cursor: pointer;
  display: flex;
  font-weight: 800;
  flex-direction: row;
  font-size: calc(1.375rem + 1.5vw);
  font-family: "Briem Hand", cursive;
`;

const NavbarCollapse = styled.button`
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  line-height: 1;
  border-radius: 0.25rem;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  @media (min-width: 992px) {
    display: none;
  }
`;

const NavbarLink = styled.span`
  cursor: pointer;  
  position: relative;
  margin-left: 1.5rem;
  padding: 1rem 0;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  outline: none;
  transition: 0.5s;
  color: #fff;
  user-selection: none;
  &:link,
  &:visited,
  &:active {
    color: #fff;
  }
  &:hover {
    color: #fea116;
  }
`;

const EnquiryLink = styled.a`
  color: #fff;
  background-color: #fea116;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  margin-left: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.5s;
  &:hover {
    background-color: green;
  }
`;

const NavbarCmpt = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer className="navbar navbar-expand-lg bg-dark px-4 px-lg-5 py-3">
      <NavbarBrand className="p-0">
        <NavbarBanner>H.A.Briyani</NavbarBanner>
      </NavbarBrand>
      <NavbarCollapse
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </NavbarCollapse>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          {navPaths.map((item, index) => (
            <NavbarLink
              key={item + index}
              className="nav-link"
              onClick={() =>
                navigate(`/${item.toLowerCase()}`, { replace: true })
              }
            >
              {item}
            </NavbarLink>
          ))}
        </div>
        <EnquiryLink>Enquiry</EnquiryLink>
      </div>
    </NavbarContainer>
  );
};

export default NavbarCmpt;
