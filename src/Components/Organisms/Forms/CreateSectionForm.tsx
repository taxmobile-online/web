import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";

import { FormField, InputField } from "Components/Molecules/FormFields";
import { SignUpFormProps } from "./types";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import useSectionStore from "Store/sections.store";
import FormalModalFooter from "./FormModalFooter";

const validationSchema = yup.object().shape({
  sectionName: yup.string().required().min(1).label("Section Name"),
});

// Component
const CreateSectionForm: React.FC<SignUpFormProps> = (props) => {
  // States
  const [reRender, setReRender] = useState(false);

  // Store
  const { sectionToEdit, isEdit } = useSectionStore();

  // Varaibles
  const initialValues = {
    sectionName: sectionToEdit ? sectionToEdit.sectionName : "",
  };

  // Hooks
  let {
    data: editData,
    loading: editing,
    sendRequest: editSectionRequest,
  } = useApi<any>();
  let { data, loading, sendRequest } = useApi<any>();

  // Props
  const { handleAfterFormSubmit, closeFormModal } = props;

  // Methods
  const handleSubmit = async (values: any) => {
    const requestData = {
      ...values,
    };

    // Send to backend
    if (isEdit && sectionToEdit.sectionId) {
      await editSectionRequest(
        "PUT",
        `/section/${sectionToEdit.sectionId}`,
        requestData
      );
    } else {
      await sendRequest("POST", endpoints.createSectionEndpoint, requestData);
    }
    setReRender(!reRender);
  };

  const handleAfterSubmit = () => {
    if (isEdit) {
      if (editData?.status && editData?.status === "SUCCESS") {
        handleAfterFormSubmit!();
      }
    } else {
      if (data?.status && data?.status === "SUCCESS") {
        handleAfterFormSubmit!();
      }
    }
  };

  // Effects
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
      <Form>
        <InputField label="Section Name" name="sectionName" />

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
          isLoading={loading || editing}
          yesText={isEdit ? "Edit" : "Create"}
          noText="Cancel"
          setShowModal={closeFormModal}
        />
      </Form>
    </FormField>
  );
};

export default CreateSectionForm;
