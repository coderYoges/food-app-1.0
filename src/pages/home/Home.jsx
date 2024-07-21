import React, { useState } from "react";
import styled from "styled-components";
import NavbarCmpt from "../../components/navbar/Navbar";
import BannerCmpt from "./Banner";
import ServicesCmpt from "./Services";
import FooterCmpt from "../../components/footer/Footer";
import { Modal } from "react-responsive-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import { footerConstants } from "../../config";

const ChickenBiryaniImage = require("../../assets/images/chicken-biryani-ads.png");
const MuttonBiryaniImage = require("../../assets/images/mutton-biryani-ads.png");

const HomePageContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1078px) {
    width: 90vw !important;
  }
`;

const BannerContainer = styled.div`
  padding: 0;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const ModalHeader = styled.h2`
  color: #fea116;
  font-weight: 600;
  line-height: 1.5;
  font-size: calc(1rem + 1vw);
  font-family: "Pacifico", cursive;
  cursor: pointer;
  margin: 1rem 0;
  text-align: center;
`;

const ModalCloseIcon = styled(IoMdCloseCircle)`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
`;

const CarouselItem = styled.img`
  width: 90vw;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 1rem;
`;

const SectionContent = styled.div`
  display: block;
  padding: 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.3s;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
  margin-top: 1rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  user-select: none;
`;

const HomePage = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <HomePageContainer>
      <BannerContainer>
        <NavbarCmpt />
        <BannerCmpt />
        <ServicesCmpt />
        <FooterCmpt />
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          center
          closeIcon={<ModalCloseIcon />}
          styles={{
            modal: { backgroundColor: "#fff" },
            overlay: { opacity: "0.5" },
          }}
        >
          <ModalHeader>{"Bakrid Special Offers"}</ModalHeader>
          <Carousel
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={true}
            showThumbs={false}
          >
            <CarouselItem src={MuttonBiryaniImage} alt="Mutton-Biryani-Ads" />
            <CarouselItem src={ChickenBiryaniImage} alt="Chicken-Biryani-Ads" />
          </Carousel>
          <SectionContent>
            <i className="fa fa-phone-alt me-3"></i>
            <StyledLink href="tel:+919789925091">
              {footerConstants.contactList.phone1}
            </StyledLink>
            <span className="mx-3">|</span>
            <StyledLink href="tel:+917845682228">
              {footerConstants.contactList.phone2}
            </StyledLink>
          </SectionContent>
        </Modal>
      </BannerContainer>
    </HomePageContainer>
  );
};

export default HomePage;
