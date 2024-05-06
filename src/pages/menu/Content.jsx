import React from "react";
import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 100%;
  padding: 3rem 0.75rem;
  margin: 0 auto;
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

const ContentCmpt = () => {
    return (
        <ContentContainer>
            <ContentWrapper>
                <div className="text-center animated fadeInUp">
                    <ContentTitle>---- Food Menu ----</ContentTitle>
                </div>
            </ContentWrapper>
            </ContentContainer>
    )
}

export default ContentCmpt;