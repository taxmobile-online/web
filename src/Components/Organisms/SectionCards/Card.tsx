import React, { useState } from "react";
import { CardStyle, SubSection } from "./style";
import Button from "Components/Atoms/Button";
import Typography from "Components/Atoms/Typography";
import useApi from "Utils/Hooks/useApi";
import { Spinner } from "Components/Atoms/Spinner";

// Type defination
interface Props {
  data?: any;
  handleFormSuccess?: () => void;
  isSub?: boolean;
}

// Component
const Card: React.FC<Props> = ({ data: section, handleFormSuccess, isSub }) => {
  // States
  const [showSubSection, setShowSubSection] = useState<boolean>(false);

  // Hooks
  let { loading: editing, sendRequest: editSectionRequest } = useApi<any>();
  let { loading: deleting, sendRequest: deleteSectionRequest } = useApi<any>();

  // Methods
  const handleSectionDelete = async (id: any) => {
    if (isSub) {
      await deleteSectionRequest("DELETE", `/section/sub/${id}`);
    } else {
      await deleteSectionRequest("DELETE", `/section/${id}`);
    }
    await handleFormSuccess!();
  };
  const handleSectionEdit = async (id: any) => {
    if (isSub) {
      await editSectionRequest("PUT", `/section/sub/${id}`);
    } else {
      await editSectionRequest("PUT", `/section/${id}`);
    }
    await handleFormSuccess!();
  };

  // Data to display
  return (
    <CardStyle>
      <Button
        className="top"
        onClick={() => setShowSubSection(!showSubSection)}
      >
        <Typography
          as="h5"
          className="h-32"
          text={section?.sectionName || section?.subSectionName}
        />
        <div className="actions">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleSectionEdit(section.sectionId || section.subSectionId);
            }}
            className="b-1"
            disabled={editing}
          >
            {editing ? (
              <Spinner style={{ width: "1.5rem", height: "1.5rem" }} />
            ) : (
              "Edit"
            )}
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleSectionDelete(section.sectionId || section.subSectionId);
            }}
            className="b-2"
            disabled={deleting}
          >
            {deleting ? (
              <Spinner style={{ width: "1.5rem", height: "1.5rem" }} />
            ) : (
              "Delete"
            )}
          </Button>
        </div>
      </Button>

      {showSubSection && !isSub && (
        <div className="bottom">
          <SubSection>
            <Typography as="h5" className="h-33" text="Sub section one" />
          </SubSection>
          <SubSection>
            <Typography as="h5" className="h-33" text="Sub section one" />
          </SubSection>
          <SubSection>
            <Typography as="h5" className="h-33" text="Sub section one" />
          </SubSection>
          <SubSection>
            <Typography as="h5" className="h-33" text="Sub section one" />
          </SubSection>
        </div>
      )}
    </CardStyle>
  );
};

export default Card;