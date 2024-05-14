import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { enquiryConstants } from "../../config";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

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

const EnquireCmpt = ({ onClose }) => {
  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={true}
      validateOnMount={true}
      initialValues={{
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        try {
          const usersCollectionRef = collection(db, "users");
          await addDoc(usersCollectionRef, {
            firstName: values.firstname,
            lastName: values.lastname,
            mobile: values.phone,
            email: values.email,
            message: values.message,
            date: new Date().toString().slice(0, 15),
          });
          onClose && onClose();
        } catch (err) {
          console.error(err);
        }
        resetForm();
      }}
    >
      {({ values, handleSubmit, setFieldTouched, setFieldValue }) => {
        const onChangeFirstname = ({ target }) => {
          setFieldTouched("firstname", true, true);
          setFieldValue(
            "firstname",
            target.value.replace(/[^a-zA-Z]/g, ""),
            true
          );
        };
        const onChangeLastname = ({ target }) => {
          setFieldTouched("lastname", true, true);
          setFieldValue(
            "lastname",
            target.value.replace(/[^a-zA-Z]/g, ""),
            true
          );
        };
        const onChangePhone = ({ target }) => {
          setFieldTouched("phone", true, true);
          setFieldValue("phone", target.value.replace(/[^0-9]/g, ""), true);
        };
        const onChangeEmail = ({ target }) => {
          setFieldTouched("email", true, true);
          setFieldValue("email", target.value, true);
        };
        const onChangeText = ({ target }) => {
          setFieldTouched("message", true, true);
          setFieldValue(
            "message",
            target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
            true
          );
        };
        return (
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="row g-3">
              <div className="col-md-6">
                <StyledInput
                  value={values.firstname}
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="form-control"
                  placeholder="First Name"
                  onChange={onChangeFirstname}
                  maxLength={10}
                  required
                />
              </div>
              <div className="col-md-6">
                <StyledInput
                  value={values.lastname}
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={onChangeLastname}
                  maxLength={10}
                  required
                />
              </div>
              <div className="col-md-6">
                <StyledInput
                  value={values.phone}
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Your Mobile No"
                  onChange={onChangePhone}
                  maxLength={10}
                  required
                />
              </div>
              <div className="col-md-6">
                <StyledInput
                  value={values.email}
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  onChange={onChangeEmail}
                  required
                />
              </div>

              <div className="col-12">
                <textarea
                  value={values.message}
                  className="form-control"
                  placeholder="Leave a message here"
                  id="message"
                  name="message"
                  style={{ height: "150px" }}
                  maxLength={100}
                  onChange={onChangeText}
                ></textarea>
              </div>
              <div className="col-12">
                <StyledButton
                  type="submit"
                  className="btn btn-primary w-100 py-3"
                >
                  {enquiryConstants.button}
                </StyledButton>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default EnquireCmpt;
