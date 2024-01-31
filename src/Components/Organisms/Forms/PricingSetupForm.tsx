import React, { useEffect, useState } from "react";

import * as yup from "yup";
import { Form } from "formik";

import FormalModalFooter from "./FormModalFooter";
import {
  FormField,
  InputField,
  SelectField,
} from "Components/Molecules/FormFields";

import useApi from "Utils/Hooks/useApi";
import { SignUpFormProps } from "./types";
import endpoints from "Services/endpoints";
import useSectionStore from "Store/sections.store";

const validationSchema = yup.object().shape({
  accountType: yup.string().required().min(1).label("Section Name"),
  subscriberCount: yup.string().required().min(1).label("Section Name"),
});

// Component
const PricingSetupForm: React.FC<SignUpFormProps> = (props) => {
  // States
  const [reRender, setReRender] = useState(false);

  // Store
  const { sectionToEdit, isEdit } = useSectionStore();

  // Varaibles
  const initialValues = {
    accountType: "",
    subscriberCount: "",
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
        <SelectField
          options={[
            { id: "PERSONAL", value: "PERSONAL" },
            { id: "COPERATE", value: "COPERATE" },
          ]}
          label="Account Type"
          name="accountType"
        />

        <InputField label="Subscriber Amount" name="subscriberCount" />

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

export default PricingSetupForm;
