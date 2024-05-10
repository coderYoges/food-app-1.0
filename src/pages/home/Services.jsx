import React from "react";
import styled from "styled-components";
import { homePageConstants } from "../../config";

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
        {homePageConstants.services.map((service, index) => (
          <div
            className="col-lg-3 col-sm-6 animated fadeInUp"
            key={"service-id-" + index}
          >
            <ServiceItem className="rounded pt-3">
              <div className="p-4">
                <ServiceIcon
                  className={`fa fa-3x ${service.icon} mb-4`}
                ></ServiceIcon>
                <h5
                  style={{
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {service.title}
                </h5>
                <p className="text-secondary">{service.content}</p>
              </div>
            </ServiceItem>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCmpt;
