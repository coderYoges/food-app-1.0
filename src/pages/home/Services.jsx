import React from "react";
import styled from "styled-components";

const ServiceItem = styled.div`
  cursor: pointer;
  font-family: "Heebo", sans-serif;
  background-color: #fff;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
  transition: 0.5s;
  &:hover {
    background-color: #90ee90;
  }
`;

const ServiceIcon = styled.i`
  color: #fea116;
`;

const ServicesCmpt = () => {
  return (
    <div className="pt-5 px-4 px-lg-5">
      <div className="row g-4">
        {/* Catering services */}
        <div className="col-lg-3 col-sm-6 animated fadeInUp">
          <ServiceItem className="rounded pt-3">
            <div className="p-4">
              <ServiceIcon className="fa fa-3x fa-user-tie mb-4"></ServiceIcon>
              <h5
                style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Function Catering Service
              </h5>
              <p className="text-secondary">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </ServiceItem>
        </div>
        {/* Quality foods */}
        <div className="col-lg-3 col-sm-6 animated fadeInUp">
          <ServiceItem className="rounded pt-3">
            <div className="p-4">
              <ServiceIcon className="fa fa-3x fa-utensils mb-4"></ServiceIcon>
              <h5
                style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Quality Food
              </h5>
              <p className="text-secondary">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </ServiceItem>
        </div>
        {/* Commercial cooking spaces  */}
        <div className="col-lg-3 col-sm-6 animated fadeInUp">
          <ServiceItem className="rounded pt-3">
            <div className="p-4">
              <ServiceIcon className="fa fa-3x fa-warehouse mb-4"></ServiceIcon>
              <h5
                style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Own Commercial Spaces
              </h5>
              <p className="text-secondary">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </ServiceItem>
        </div>
        {/* Wholesale raw materials */}
        <div className="col-lg-3 col-sm-6 animated fadeInUp">
          <ServiceItem className="rounded pt-3">
            <div className="p-4">
              <ServiceIcon className="fa fa-3x fa-cart-plus mb-4"></ServiceIcon>
              <h5
                style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Wholesale Raw Materials
              </h5>
              <p className="text-secondary">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </ServiceItem>
        </div>
      </div>
    </div>
  );
};

export default ServicesCmpt;
