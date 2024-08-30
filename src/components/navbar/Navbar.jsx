import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setNavbar } from "../../redux/reducer";
import { headerConstants, enquiryConstants } from "../../config";
import { MdOutlineAnnouncement } from "react-icons/md";
import { Modal } from "react-responsive-modal";
import { IoMdCloseCircle } from "react-icons/io";
import EnquireCmpt from "../enquiry/Enquiry";
import { FaWhatsapp } from "react-icons/fa";

const NavbarContainer = styled.nav`
  @media (min-width: 992px) {
    padding: 1rem 3rem;
  }
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgb(15, 23, 43) !important;
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

const NavbarCollapseSmall = styled.div`
  margin-top: 15px;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
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
  color: ${({ active }) => (active ? "#fea116" : "#fff")};
  user-selection: none;
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
  cursor: pointer;
  &:hover {
    background-color: green;
  }
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

const WhatsappWrapper = styled.button`
  width: 150px;
  height: 40px;
  position: fixed;
  right: 5vw;
  top: 90vh;
  z-index: 100;
  background-color: rgb(37, 211, 102);
  border-radius: 30px;
`;

const WhatsappText = styled.span`
  font-weight: 600;
  color: #fff;
`;

const WhatsappIcon = styled(FaWhatsapp)`
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;
  padding-left: 6px;
`;

const NavbarCmpt = ({ navbarOpened, setNavbar }) => {
  const [isNavOpened, setNavOpened] = useState(false);
  const [enquiryOpened, setEnquiryOpened] = useState(false);

  useEffect(() => {
    setNavbar(isNavOpened);
  }, [isNavOpened]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <React.Fragment>
      <NavbarContainer className="navbar navbar-expand-lg bg-dark px-4 px-lg-5 py-3">
        <NavbarBrand className="p-0">
          <NavbarBanner>{headerConstants.title}</NavbarBanner>
        </NavbarBrand>
        <div>
          <NavbarCollapse
            type="button"
            className="mx-2"
            onClick={() => setEnquiryOpened(!enquiryOpened)}
          >
            <MdOutlineAnnouncement
              className="text-light"
              style={{ opacity: "0.55" }}
            />
          </NavbarCollapse>
          <NavbarCollapse
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            onClick={() => setNavOpened(!isNavOpened)}
          >
            <span className="fa fa-bars"></span>
          </NavbarCollapse>
        </div>
        <NavbarCollapseSmall
          className={`roll-height ${navbarOpened ? "d-block" : "d-none"}`}
        >
          <div
            className="navbar-nav ms-auto py-0 pe-4"
            onClick={() => {
              setNavOpened(false);
              setNavbar(false);
            }}
          >
            {headerConstants.paths.map((item, index) => (
              <NavbarLink
                key={item + index}
                className="nav-link"
                onClick={() =>
                  navigate(`/${item.toLowerCase()}`, { replace: true })
                }
                active={window.location.pathname.includes(item.toLowerCase())}
              >
                {item}
              </NavbarLink>
            ))}
          </div>
        </NavbarCollapseSmall>
        <div className="collapse navbar-collapse">
          <div
            className="navbar-nav ms-auto py-0 pe-4"
            onClick={() => {
              setNavOpened(false);
              setNavbar(false);
            }}
          >
            {headerConstants.paths.map((item, index) => (
              <NavbarLink
                key={item + index}
                className="nav-link"
                onClick={() =>
                  navigate(`/${item.toLowerCase()}`, { replace: true })
                }
                active={window.location.pathname.includes(item.toLowerCase())}
              >
                {item}
              </NavbarLink>
            ))}
          </div>
          <EnquiryLink onClick={() => setEnquiryOpened(!enquiryOpened)}>
            {headerConstants.link}
          </EnquiryLink>
        </div>
        <Modal
          open={enquiryOpened}
          onClose={() => setEnquiryOpened(false)}
          center
          closeIcon={<ModalCloseIcon />}
          styles={{
            modal: { backgroundColor: "#fff" },
            overlay: { opacity: "0.5" },
          }}
        >
          <ModalHeader>{enquiryConstants.title}</ModalHeader>
          <div className="mt-5 ">
            <EnquireCmpt onClose={() => setEnquiryOpened(false)} />
          </div>
        </Modal>
      </NavbarContainer>
      <WhatsappWrapper
        onClick={() => window.open("https://wa.me/919789925091")}
      >
        <WhatsappText>Whatsapp us</WhatsappText>
        <WhatsappIcon />
      </WhatsappWrapper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  navbarOpened: state.auth.navbarOpened,
});

const mapDispatchToProps = {
  setNavbar: setNavbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCmpt);
