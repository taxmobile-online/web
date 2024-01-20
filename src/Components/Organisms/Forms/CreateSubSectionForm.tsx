import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";

import {
  FormField,
  InputField,
  SelectField,
} from "Components/Molecules/FormFields";
import FormalModalFooter from "./FormModalFooter";

import useApi from "Utils/Hooks/useApi";
import { SignUpFormProps } from "./types";
import endpoints from "Services/endpoints";
import useSectionStore from "Store/sections.store";

const validationSchema = yup.object().shape({
  sectionId: yup.string().required().min(1).label("Section Id"),
  subSectionName: yup.string().required().min(1).label("Sub section Name"),
});

// Component
const CreateSubSectionForm: React.FC<SignUpFormProps> = (props) => {
  // States
  const [reRender, setReRender] = useState(false);

  // Store
  const { sectionToEdit, isEdit } = useSectionStore();

  // Variables
  const initialValues = {
    sectionId: sectionToEdit ? sectionToEdit.section : "",
    subSectionName: sectionToEdit ? sectionToEdit.subSectionName : "",
  };

  // Hooks
  let { data, loading, sendRequest } = useApi<any>();
  let {
    data: editData,
    loading: editing,
    sendRequest: editSubSectionRequest,
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
      await editSubSectionRequest(
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

  const handleAfterSubmit = async () => {
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
        <SelectField
          label="Select section"
          name="sectionId"
          options={options || []}
        />
        <InputField label="Section Name" name="subSectionName" />

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

export default CreateSubSectionForm;
