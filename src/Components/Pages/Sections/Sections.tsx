import React, { useEffect, useState } from "react";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";
import { EmptyCard } from "Components/Molecules/EmptyCard";
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
import useApi from "Utils/Hooks/useApi";
import { SectionLoader } from "Components/Molecules/Loaders";

// Type defination
interface Props {}

// Component
const Sections: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSubSection, setShowSubSection] = useState<boolean>(false);

  // Hooks
  let { loading: deleting, sendRequest: deleteSectionRequest } = useApi<any>();
  let { data, loading, error, sendRequest } = useApi<any>();

  data = data?.data || [];

  // Methods
  const handleSectionDelete = async (id: any) => {
    await deleteSectionRequest("DELETE", `/section/${id}`);
  };
  const handleSectionEdit = async () => {};

  const getSections = async () => {
    await sendRequest("GET", "/section");
    setShowModal(false);
  };

  // Effects
  useEffect(() => {
    getSections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Data to display

  return (
    <>
      <AdminDashboardChildTemplate pageTile="Sections">
        <>
          {loading ? (
            <SectionCardsWrapper>
              <SectionCards>
                <SectionLoader />
                <SectionLoader />
                <SectionLoader />
              </SectionCards>
            </SectionCardsWrapper>
          ) : !data.length ? (
            <EmptyCard
              message="No sections yet!"
              btnLabel="Create section"
              handleAction={() => setShowModal(true)}
            />
          ) : (
            <SectionCardsWrapper>
              <SectionCardContainer>
                <Button
                  className="btn btn-primary btn-md mb-10 ml-auto display-block"
                  value="Create section"
                  onClick={() => setShowModal(true)}
                />
                <SectionCards>
                  {[...data].reverse().map((section: any) => (
                    <Card key={section.sectionId}>
                      <Button
                        className="top"
                        onClick={() => setShowSubSection(!showSubSection)}
                      >
                        <Typography
                          as="h5"
                          className="h-32"
                          text={section?.sectionName}
                        />
                        <div className="actions">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="b-1"
                            value="Edit"
                          />
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSectionDelete(section.sectionId);
                            }}
                            className="b-2"
                            value="Delete"
                          />
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
                  ))}
                </SectionCards>
              </SectionCardContainer>
            </SectionCardsWrapper>
          )}
        </>
      </AdminDashboardChildTemplate>

      <CreateSectionModal
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
        handleFormSuccess={getSections}
      />
    </>
  );
};

export default Sections;
