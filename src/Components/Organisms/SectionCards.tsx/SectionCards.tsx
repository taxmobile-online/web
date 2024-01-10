import React from "react";
import { SectionCardContainer, SectionCardsWrapper, Wrapper } from "./style";
import Button from "Components/Atoms/Button";
import { SectionCardsProps } from "./types";

// Component
const SectionCards: React.FC<SectionCardsProps> = (props) => {
  // Props

  const { handleShowModal } = props;
  // Data to display
  return (
    <Wrapper>
      <SectionCardContainer>
        <Button
          className="btn btn-primary btn-md mb-10 ml-auto display-block"
          value="Create section"
          onClick={handleShowModal}
        />
        <SectionCardsWrapper></SectionCardsWrapper>
      </SectionCardContainer>
    </Wrapper>
  );
};

export default SectionCards;
