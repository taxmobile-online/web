import React from "react";
import { SectionCardContainer, SectionCardsWrapper, Wrapper } from "./style";
import Button from "Components/Atoms/Button";
import { SectionCardsProps } from "./types";
import Card from "./Card";
import { SectionLoader } from "Components/Molecules/Loaders";
import { EmptyCard } from "Components/Molecules/EmptyCard";

// Component
const SectionCards: React.FC<SectionCardsProps> = (props) => {
  // Props

  const {
    handleShowModal,
    sections,
    isLoading,
    error,
    handleFormSuccess,
    isSub,
  } = props;
  // Data to display
  return (
    <Wrapper>
      <SectionCardContainer>
        {isLoading ? (
          <Wrapper>
            <SectionCardsWrapper>
              <SectionLoader length={2} />
            </SectionCardsWrapper>
          </Wrapper>
        ) : !sections.length || error ? (
          <EmptyCard
            message="No sections yet!"
            btnLabel="Create section"
            handleAction={() => handleShowModal}
          />
        ) : (
          <>
            <Button
              className="btn btn-primary btn-md mb-10 ml-auto display-block"
              value="Create section"
              onClick={handleShowModal}
              disabled={isLoading}
            />
            <SectionCardsWrapper>
              {[...sections].reverse().map((section: any) => (
                <Card
                  key={section.sectionId || section.subSectionId}
                  data={section}
                  handleFormSuccess={handleFormSuccess}
                  isSub={isSub}
                />
              ))}
            </SectionCardsWrapper>
          </>
        )}
      </SectionCardContainer>
    </Wrapper>
  );
};

export default SectionCards;
