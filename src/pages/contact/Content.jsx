import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { contactPageConstants } from "../../config";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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
  margin-bottom: 1rem;
`;

const ContentSubTitle = styled.h2`
  color: #0f172b;
  font-weight: 800;
  line-height: 1.2;
  font-size: calc(1.375rem + 1.5vw);
  font-family: "Nunito", sans-serif;
  margin-bottom: 1.5rem;
`;

const PhoneIconStyled = styled(FaPhoneSquareAlt)`
  color: #fea116;
  margin-right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
`;

const MailIconStyled = styled(IoIosMail)`
  color: #fea116;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledInput = styled.input`
  height: calc(3.5rem + 2px);
  padding: 1rem 0.75rem;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #666565;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 2px;
`;

const StyledButton = styled.button`
  color: #fff;
  background-color: #fea116;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.5s;
  border-color: #feaa2d;
  &:hover {
    background-color: green;
  }
`;

const ContentCmpt = ({ navbarOpened }) => {
  return (
    <ContentContainer
      navbarOpened={navbarOpened}
      className={` ${navbarOpened ? "roll-margin" : ""}`}
    >
      <ContentWrapper>
        <div className="text-center animated fadeInUp">
          <ContentTitle>{contactPageConstants.title}</ContentTitle>
          <ContentSubTitle>{contactPageConstants.subTitle}</ContentSubTitle>
        </div>
        <div className="row g-4">
          <div className="col-12 fadeInUp animated">
            <div className="row gy-4 mt-3">
              {contactPageConstants.contactItems.map((item, index) => (
                <div className="col-md-4" key={"contact-item-" + index}>
                  <ContentTitle
                    style={{ fontSize: "1.5rem" }}
                    className="text-md-center"
                  >
                    {item.title}
                  </ContentTitle>

                  <p
                    style={{
                      marginBottom: "1rem",
                      color: "#696969",
                      fontWeight: "600",
                    }}
                    className="text-md-center"
                  >
                    {index === contactPageConstants.contactItems.length - 1 ? (
                      <MailIconStyled />
                    ) : (
                      <PhoneIconStyled />
                    )}
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 mt-5 fadeInUp animated d-flex">
            <iframe
              className="w-100 h-100 d-flex justify-content-center align-items-center"
              style={{
                overflow: "hidden",
                background: "none !important",
                minHeight: "350px",
              }}
              src="https://maps.google.com/maps?q=H.+A+.+Biryani+catering+services&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
          <div className="col-md-6 mt-5 fadeInUp animated">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <StyledInput
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <StyledInput
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-12">
                  <StyledInput
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: "150px" }}
                  ></textarea>
                </div>
                <div className="col-12">
                  <StyledButton type="submit" className="btn btn-primary w-100 py-3">
                    Send Message
                  </StyledButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ContentWrapper>
    </ContentContainer>
  );
};

const mapStateToProps = (state) => ({
  navbarOpened: state.auth.navbarOpened,
});

export default connect(mapStateToProps)(ContentCmpt);
