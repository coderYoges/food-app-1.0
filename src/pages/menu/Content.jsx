import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { menuPageConstants } from "../../config";
import { IoRestaurantSharp } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { GiWrappedSweet } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Modal } from "react-responsive-modal";
import { isEmpty } from "lodash";

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

const ContentImage = styled.img`
  max-weight: 100%;
  height: auto;
  vertical-align: middle;
  width: 80px;
  border-radius: 4px;
  flex-shrink: 0;
`;

const ModalHeader = styled.h2`
  color: #696969;
  font-weight: 600;
  line-height: 1.5;
  font-size: calc(1rem + 1vw);
  font-family: "Pacifico", cursive;
  cursor: pointer;
  margin: 1rem 0 0 0;
  text-align: center;
`;

const ModalCloseIcon = styled(IoMdCloseCircle)`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
`;

const ContentCmpt = ({ navbarOpened }) => {
  const [menuItem, setMenuItem] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState({});

  const onOpenModal = (menu) => {
    setModalOpen(true);
    setSelectedMenu(menu);
  };

  const onCloseModal = () => setModalOpen(false);
  const iconStyles = {
    color: "#fea116",
    width: "2rem",
    height: "1.5rem",
  };
  return (
    <ContentContainer
      navbarOpened={navbarOpened}
      className={` ${navbarOpened ? "roll-margin" : ""}`}
    >
      <ContentWrapper>
        <div className="text-center animated fadeInUp">
          <ContentTitle>{menuPageConstants.header}</ContentTitle>
          <ContentSubTitle>{menuPageConstants.subHeader}</ContentSubTitle>
        </div>
      </ContentWrapper>
      <div className="text-center animated fadeInUp py-3">
        <ContentNavbar>
          {menuPageConstants.content.map((item, index) => (
            <li
              key={"menu-item-" + index}
              style={{
                cursor: "pointer",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                borderBottom: `3px solid ${
                  menuItem === index ? "#fea116" : "#808080"
                }`,
                padding: "0 1rem",
              }}
              onClick={() => setMenuItem(index)}
            >
              <a
                className="d-flex align-items-center text-start mx-0 mx-lg-3 ms-0 pb-1"
                style={{ textDecoration: "none" }}
              >
                {index === 0 ? (
                  <IoRestaurantSharp style={iconStyles} />
                ) : index === 1 ? (
                  <GiFruitBowl style={iconStyles} />
                ) : (
                  <GiWrappedSweet style={iconStyles} />
                )}

                <div className="ps-3">
                  <small className="text-body">{item.title}</small>
                  <h6
                    className="mt-n1 mb-0"
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {item.menu}
                  </h6>
                </div>
              </a>
            </li>
          ))}
        </ContentNavbar>
      </div>

      <div className="row animated fadeInUp px-2 px-md-5 m-0 pt-3">
        {menuPageConstants.content[menuItem].items.map((menu, index) => (
          <div
            className="col-lg-6 my-3 "
            key={"menu-receipe-" + index}
            style={{ cursor: "pointer" }}
            onClick={() => onOpenModal(menu)}
          >
            <div className="d-flex align-items-center">
              {menu.imagePath && (
                <ContentImage
                  src={require(`../../assets/images/${menu.imagePath}`)}
                  alt={menu.imagePath}
                />
              )}
              <div className="w-100 flex flex-column text-start ps-4">
                <h5 className="d-flex justify-content-between border-bottom pb-2">
                  <span>{menu.title}</span>
                  <span style={{ color: "#fea116" }}>{menu.price}</span>
                </h5>
                <small className="fst-italic">{"*" + menu.label}</small>
              </div>
            </div>
          </div>
        ))}
        <Modal
          open={isModalOpen && !isEmpty(selectedMenu)}
          onClose={onCloseModal}
          center
          closeIcon={<ModalCloseIcon />}
          styles={{
            modal: { backgroundColor: "pink" },
            overlay: { opacity: "0.5" },
          }}
        >
          <ModalHeader>{selectedMenu.title}</ModalHeader>
          <div className="text-danger text-center mb-4">
            {"* Minimum Order - " + selectedMenu.minimumOrder}
          </div>
          <ul>
            {!isEmpty(selectedMenu) &&
              !isEmpty(selectedMenu.receipes) &&
              selectedMenu.receipes.map((receipe, index) => (
                <li
                  className="py-1"
                  key={"receipe-item-" + index}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Nunito, sans-serif",
                  }}
                >
                  {receipe}
                </li>
              ))}
          </ul>
          <div
            className="rounded mx-2"
            style={{
              cursor: "pointer",
              backgroundColor: "#696969",
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            <span className="d-block text-center p-2 text-light">
              {selectedMenu.price} {selectedMenu.label}
            </span>
          </div>
        </Modal>
      </div>
    </ContentContainer>
  );
};

const mapStateToProps = (state) => ({
  navbarOpened: state.auth.navbarOpened,
});

export default connect(mapStateToProps)(ContentCmpt);
