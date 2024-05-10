import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";

const SectionTitle = styled.h4`
  position: relative;
  display: inline-block;
  color: #fea116;
  text-align: left;
  font-weight: 400;
  margin-bottom: 1.5rem;
  font-size: calc(1.275rem + 0.3vw);
  font-family: "Pacifico", cursive;
`;

const SectionLink = styled.a`
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  text-align: left;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
  transition: 0.3s;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
  &:hover {
    letter-spacing: 0.2rem;
  }
`;

const SectionContent = styled.div`
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  text-align: left;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.3s;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
`;

const SocialLink = styled.a`
  margin-right: 5px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f1f8ff;
  border: 1px solid #ffffff;
  border-radius: 35px;
  transition: 0.3s;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    background-color: #fff;
    color: #fea116;
  }
`;

const SectionAddress = styled.div`
  padding-left: 28px;
  padding-top: 0.5rem;
`;

const FooterCmpt = () => {
  return (
    <div
      className="mt-5 animated fadeIn mx-0 px-0"
      style={{ backgroundColor: "#0F172B" }}
    >
      <div className="row m-0 px-4 px-lg-5 pt-5">
        {/* Company section */}
        <div className="col-lg-3 col-md-6 my-3">
          <SectionTitle>Company -----</SectionTitle>
          <SectionLink href="#">
            <IoIosArrowForward /> Home
          </SectionLink>
          <SectionLink href="#">
            <IoIosArrowForward /> About
          </SectionLink>
          <SectionLink href="#">
            <IoIosArrowForward /> Privacy Policy
          </SectionLink>
          <SectionLink href="#">
            <IoIosArrowForward /> Terms & Condition
          </SectionLink>
        </div>
        {/* Address section */}
        <div className="col-lg-3 col-md-6 my-3">
          <SectionTitle>Locate Us -----</SectionTitle>
          <SectionContent>
            <i className="fa fa-map-marker-alt me-3"></i>
            No 19/49, Teed's
            <SectionAddress>Garden, 7th Street,</SectionAddress>
            <SectionAddress>Sembiyam,</SectionAddress>
            <SectionAddress>Perambur,</SectionAddress>
            <SectionAddress>Chennai-11.</SectionAddress>
          </SectionContent>
        </div>
        {/* Services section */}
        <div className="col-lg-3 col-md-6 my-3">
          <SectionTitle>Services -----</SectionTitle>
          <SectionLink href="#">
            <IoIosArrowForward /> Function Catering
          </SectionLink>
          <SectionLink href="#">
            <IoIosArrowForward /> Quality Food
          </SectionLink>
          <SectionLink href="#">
            <IoIosArrowForward /> Commercial Spaces
          </SectionLink>
          <SectionLink href="#">
            <IoIosArrowForward /> Raw Materials
          </SectionLink>
        </div>
        {/* Contact Us section */}
        <div className="col-lg-3 col-md-6 my-3">
          <SectionTitle>Contact Us -----</SectionTitle>
          <SectionContent>
            <i className="fa fa-phone-alt me-3"></i>
            +91 9789925091
            <br />
            <span className="d-inline-block mx-3" />
            <span className="d-inline-block pt-1">+91 7845682228 </span>
          </SectionContent>
          <SectionContent>
            <i className="fa fa-envelope me-3 d-lg-none"></i>
            h.a.briyani1974@gmail.com
          </SectionContent>
          <div className="d-flex">
            <SocialLink href="#">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="#">
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink href="#">
              <i className="fab fa-youtube"></i>
            </SocialLink>
            <SocialLink href="#">
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink href="#">
              <RiLoginCircleFill
                style={{ minWidth: "1rem", minHeight: "1rem" }}
              />
            </SocialLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCmpt;
