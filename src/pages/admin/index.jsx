import React, { useState, useEffect, Fragment } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../../components/navbar/Navbar";
import FooterCmpt from "../../components/footer/Footer";
import styled from "styled-components";
import { connect } from "react-redux";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const AdminContainer = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: #fff;
  padding: 1rem 0.75rem;
  margin-top: ${({ navbarOpened }) => (navbarOpened ? "300px" : "0")};
`;

const AdminWrapper = styled.div`
  padding: 3rem 1rem 0 1rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (min-width: 762px) {
    padding: 3rem 3rem 0 3rem;
  }
`;

const AdminTitle = styled.h1`
  color: #fea116;
  font-weight: 600;
  line-height: 1.5;
  font-size: calc(1rem + 1vw);
  font-family: "Pacifico", cursive;
  margin-bottom: 0.2rem;
`;

const AdminSubTitle = styled.h2`
  color: #808080;
  font-weight: 600;
  line-height: 1.2;
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  margin-bottom: 1.5rem;
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

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  justify-content: spacebetween;
  align-items: center;
  background-color: #424242;
  color: #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const HeaderIcon = styled.div`
  display: flex;
  font-size: 24px;
  height: 50px;
  width: 50px;
  margin: 10px 15px;
  color: #424242;
  background-color: #f44336;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

const ServiceMessage = styled.p`
  text-align: left;
  margin: 0;
  padding: 10px 15px;
  background-color: #424242;
  color: #c7c7c7;
  overflow-wrap: break-word;
  min-height: 100px;
  max-height: 100px;
  border-bottom: 1px solid #c7c7c7;
`;

const ServiceItem = styled.div`
  cursor: pointer;
  font-family: "Heebo", sans-serif;
  background-color: #424242;
  color: #c7c7c7;
  transition: 0.5s;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const AdminPage = ({ navbarOpened }) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const usersCollectionRef = collection(db, "users");
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      user.lastName.toLowerCase().includes(filter.toLowerCase()) ||
      user.mobile.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Fragment>
      <Navbar />
      <AdminContainer
        navbarOpened={navbarOpened}
        className={` ${navbarOpened ? "roll-margin" : ""}`}
      >
        <AdminWrapper>
          <div className="text-center animated fadeInUp">
            <AdminTitle>{"Admin Panel"}</AdminTitle>
            <AdminSubTitle>{"Place to manage visitors"}</AdminSubTitle>
          </div>
          <StyledInput
            type="text"
            placeholder="Search by name or phone"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />

          <div className="row">
            {filteredUsers.map((user, index) => (
              <div
                className="col-lg-3 col-sm-6 mt-4 animated fadeInUp"
                key={"user-id-" + index}
              >
                <HeaderWrapper>
                  <HeaderIcon>{user.firstName[0]}</HeaderIcon>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 600 }}>
                      {user.firstName + " " + user.lastName}
                    </div>
                    <div> {user.date}</div>
                  </div>
                </HeaderWrapper>
                <ServiceMessage>{user.message}</ServiceMessage>
                <ServiceItem>
                  <p className=" py-1 px-3 m-0">
                    <FaPhone className="me-2" />
                    {user.mobile}
                  </p>
                  <p className=" py-1 px-3 m-0">
                    <MdEmail className="me-2" />
                    {user.email}
                  </p>
                </ServiceItem>
              </div>
            ))}
          </div>
        </AdminWrapper>
      </AdminContainer>
      <FooterCmpt />
    </Fragment>
  );
};

export default connect((state) => ({ navbarOpened: state.auth.navbarOpened }))(
  AdminPage
);
