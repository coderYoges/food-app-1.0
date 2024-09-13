import React from "react";
import styled from "styled-components";
import { homePageConstants } from "../../config";
import { useNavigate } from "react-router-dom";
import serviceImg01 from "../../assets/images/wedding-events.jpeg";
import serviceImg02 from "../../assets/images/pre-wedding-events.jpeg";
import serviceImg03 from "../../assets/images/corporate-events.jpeg";
import serviceImg04 from "../../assets/images/birthday-events.jpeg";

const serviceImageList = [
  serviceImg01,
  serviceImg02,
  serviceImg03,
  serviceImg04,
];

const ServiceItem = styled.div`
  cursor: pointer;
  font-family: "Heebo", sans-serif;
  background-color: #fff;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
  transition: 0.5s;
`;

const ServicesCmpt = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 px-4 px-lg-5">
      <div className="row g-4">
        {homePageConstants.services.map((service, index) => (
          <div
            className="col-lg-3 col-sm-6 animated fadeInUp"
            key={"service-id-" + index}
            onClick={() =>
              navigate("/gallery", {
                replace: true,
                state: { selectedServiceId: index },
              })
            }
          >
            <ServiceItem className="rounded">
              <h2
                style={{
                  minHeight: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#000",
                  color: "#fff",
                  margin: "0",
                }}
              >
                {service.title}
              </h2>
              <div
                style={{
                  backgroundImage: `url(${serviceImageList[index]})`,
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "200px",
                  opacity: "0.8",
                }}
              >
                <h5
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "100px",
                    opacity: "1",
                    color: "#000",
                  }}
                >
                  Learn More...
                </h5>
              </div>
            </ServiceItem>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCmpt;
