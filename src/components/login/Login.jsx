import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { Modal } from "react-responsive-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { setAuth } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

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
  cursor: pointer;
  width: 100%;
`;

const ModalCloseIcon = styled(IoMdCloseCircle)`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
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

const LoginModal = ({ showOpen, onClose, setAuth }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const onCloseModal = () => {
    onClose();
    setErrorMessage("");
  };
  return (
    <Fragment>
      <Modal
        open={showOpen}
        onClose={onCloseModal}
        center
        closeIcon={<ModalCloseIcon />}
        styles={{
          modal: { backgroundColor: "#fff" },
          overlay: { opacity: "0.5" },
        }}
      >
        <ModalHeader>{"Admin Login"}</ModalHeader>
        <div className="mt-2">
          <Formik
            validateOnBlur={true}
            validateOnChange={true}
            validateOnMount={true}
            initialValues={{ username: "", password: "" }}
            onSubmit={(values, { resetForm }) => {
              if (
                values.username === "admin" &&
                values.password === "admin123"
              ) {
                setAuth(true);
                onCloseModal();
                navigate("/admin", { replace: true });
              } else {
                setAuth(false);
                setErrorMessage("* Invalid username or password!!!");
              }
              resetForm();
            }}
          >
            {({ values, handleSubmit, setFieldValue, setFieldTouched }) => {
              const onChangeMobile = ({ target }) => {
                setErrorMessage("");
                setFieldTouched("username", true, true);
                setFieldValue(
                  "username",
                  target.value.replace(/[^a-zA-Z]/g, ""),
                  true
                );
              };
              const onChangePassword = ({ target }) => {
                setErrorMessage("");
                setFieldTouched("password", true, true);
                setFieldValue(
                  "password",
                  target.value.replace(/[^a-zA-Z0-9]/g, ""),
                  true
                );
              };
              return (
                <form onSubmit={handleSubmit} autoComplete={"off"}>
                  <StyledInput
                    className="my-2"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={onChangeMobile}
                    maxLength={10}
                  />

                  <StyledInput
                    className="my-2"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={onChangePassword}
                  />

                  <StyledButton
                    className="my-2"
                    type="submit"
                    disabled={errorMessage}
                  >
                    {"Login"}
                  </StyledButton>
                  {errorMessage && (
                    <div className="my-2 text-danger">{errorMessage}</div>
                  )}
                </form>
              );
            }}
          </Formik>
        </div>
      </Modal>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setAuth: setAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
