import React, { useState } from "react";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";
// import { EmptyCard } from "Components/Molecules/EmptyCard";
import {
  Card,
  SectionCardContainer,
  SectionCards,
  SectionCardsWrapper,
  SubSection,
} from "./styles";
import Button from "Components/Atoms/Button";
import Typography from "Components/Atoms/Typography";
import { CreateSectionModal } from "Components/Molecules/Modals";

// Type defination
interface Props {}

// Component
const Sections: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSubSection, setShowSubSection] = useState<boolean>(false);

  // Data to display
  return (
    <>
      <AdminDashboardChildTemplate pageTile="Sections">
        <>
          {/* <EmptyCard
            message="No sections yet!"
            btnLabel="Create section"
            handleAction={() => setShowModal(true)}
          /> */}
          <SectionCardsWrapper>
            <SectionCardContainer>
              <Button
                className="btn btn-primary btn-md mb-10 ml-auto display-block"
                value="Create section"
                onClick={() => setShowModal(true)}
              />
              <SectionCards>
                <Card>
                  <Button
                    className="top"
                    onClick={() => setShowSubSection(!showSubSection)}
                  >
                    <Typography as="h5" className="h-32" text="Section one" />
                    <div className="actions">
                      <Button className="b-1" value="Edit" />
                      <Button className="b-2" value="Delete" />
                    </div>
                  </Button>

                  {showSubSection && (
                    <div className="bottom">
                      <SubSection>
                        <Typography
                          as="h5"
                          className="h-33"
                          text="Sub section one"
                        />
                      </SubSection>
                      <SubSection>
                        <Typography
                          as="h5"
                          className="h-33"
                          text="Sub section one"
                        />
                      </SubSection>
                      <SubSection>
                        <Typography
                          as="h5"
                          className="h-33"
                          text="Sub section one"
                        />
                      </SubSection>
                      <SubSection>
                        <Typography
                          as="h5"
                          className="h-33"
                          text="Sub section one"
                        />
                      </SubSection>
                    </div>
                  )}
                </Card>
                <Card>
                  <Button
                    className="top"
                    onClick={() => setShowSubSection(!showSubSection)}
                  >
                    <Typography as="h5" className="h-32" text="Section one" />
                    <div className="actions">
                      <Button className="b-1" value="Edit" />
                      <Button className="b-2" value="Delete" />
                    </div>
                  </Button>

                  {showSubSection && (
                    <div className="bottom">
                      <SubSection>
                        <Typography
                          as="h5"
                          className="h-33"
                          text="Sub section one"
                        />
                      </SubSection>
                      <SubSection>
                        <Typography
                          as="h5"
                          className="h-33"
                          text="Sub section one"
                        />
                      </SubSection>
                      <SubSection>
                        <Typography
                          as="h5"
                          className="h-33"
                          text="Sub section one"
                        />
                      </SubSection>
                      <SubSection>
                        <Typography
                          as="h5"
                          className="h-33"
                          text="Sub section one"
                        />
                      </SubSection>
                    </div>
                  )}
                </Card>
              </SectionCards>
            </SectionCardContainer>
          </SectionCardsWrapper>
        </>
      </AdminDashboardChildTemplate>

      <CreateSectionModal
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
      />
    </>
  );
};

export default Sections;
