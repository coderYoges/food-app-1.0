import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: #fff;
`;

const LoaderStyled = styled.div`
  width: 2rem;
  height: 2rem;
  color: #fea116;
  position: absolute;
  top: 45%;
  left: 50%;
`;

const LoaderSpinner = () => {
  return (
    <LoaderContainer>
      <LoaderStyled className="spinner-grow" role="status"></LoaderStyled>
    </LoaderContainer>
  );
};

export default LoaderSpinner;
