import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";

import {
  FormField,
  InputField,
  SelectField,
} from "Components/Molecules/FormFields";
import { SignUpFormProps } from "./types";
import useApi from "Utils/Hooks/useApi";
import FormalModalFooter from "./FormModalFooter";

import endpoints from "Services/endpoints";
import useSectionStore from "Store/sections.store";
import { Spinner } from "Components/Atoms/Spinner";
import { formatForSelectInput } from "Utils/Helper";

const validationSchema = yup.object().shape({
  section: yup.string().required().min(1).label("Section"),
  subSection: yup.string().required().min(1).label("Sub section"),
});

// Component
const CreateMaterialForm: React.FC<SignUpFormProps> = (props) => {
  // States
  const [reRender, setReRender] = useState(false);

  // Store
  const { sectionToEdit, isEdit } = useSectionStore();

  // Variables
  const initialValues = {
    section: "",
    subSection: "",
  };

  // Hooks
  // Hooks
  let { data, loading, sendRequest } = useApi<any>();
  let {
    data: sections,
    loading: loadingSections,
    sendRequest: sendSectionRequest,
  } = useApi<any>();
  let {
    data: subSections,
    loading: loadingSubSections,
    sendRequest: sendSubSectionRequest,
  } = useApi<any>();

  // Props
  const { handleAfterFormSubmit, options, closeFormModal } = props;

  // Methods
  const handleSubmit = async (values: any) => {
    const requestData = {
      ...values,
    };

    // Send to backend
    if (isEdit && sectionToEdit.subSectionId) {
      await sendRequest(
        "PUT",
        `${endpoints.createSubSectionEndpoint}/${sectionToEdit.subSectionId}`,
        { subSectionName: values.subSectionName }
      );
    } else {
      await sendRequest(
        "POST",
        endpoints.createSubSectionEndpoint,
        requestData
      );
    }
    setReRender(!reRender);
  };

  const handleAfterSubmit = async () => {};

  const getFormDependantData = async () => {
    await sendSubSectionRequest("GET", endpoints.getSubSectionsEndpoint);
    await sendSectionRequest("GET", endpoints.getSectionsEndpoint);
    setReRender(!reRender);
  };

  // Effects
  useEffect(() => {
    getFormDependantData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleAfterSubmit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRender]);

  // Data to display
  return (
    <FormField
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {loadingSections && loadingSubSections ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <Form>
          <SelectField
            label="Section"
            name="section"
            options={
              formatForSelectInput(
                sections?.data || [],
                "sectionId",
                "sectionName"
              ) || []
            }
          />
          <SelectField
            label="Sub section"
            name="subSection"
            options={
              formatForSelectInput(
                subSections?.data || [],
                "subSectionId",
                "subSectionName"
              ) || []
            }
          />
          <InputField label="Book title" name="bookTitle" />
          <SelectField label="Status" name="status" options={options || []} />
          <InputField label="Amount" name="amount" />

          {/* {children ? (
          children
        ) : (
          <Button
            disabled={loading}
            type="submit"
            className="btn btn-full btn-primary btn-bg-color-2 mt-35"
          >
            {loading || editing ? (
              <Spinner style={{ width: "1.5rem", height: "1.5rem" }} />
            ) : (
              "Save"
            )}
          </Button>
        )} */}
          <FormalModalFooter
            isLoading={loading}
            yesText={isEdit ? "Edit" : "Create"}
            noText="Cancel"
            setShowModal={closeFormModal}
          />
        </Form>
      )}
    </FormField>
  );
};

export default CreateMaterialForm;
