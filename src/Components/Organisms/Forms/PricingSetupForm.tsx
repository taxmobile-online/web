import React, { useEffect, useState } from "react";

import * as yup from "yup";
import { Form } from "formik";

import { Card, OptionsWrapper } from "./style";
import endpoints from "Services/endpoints";

import useApi from "Utils/Hooks/useApi";
import { SignUpFormProps } from "./types";
import FormalModalFooter from "./FormModalFooter";
import useSectionStore from "Store/sections.store";
import {
  FormField,
  InputField,
  SelectField,
} from "Components/Molecules/FormFields";
import Typography from "Components/Atoms/Typography";
import { PlanOption } from "Components/Molecules/PlanOption";

const validationSchema = yup.object().shape({
  price: yup.string().required().min(1).label("Price"),
  currency: yup.string().required().min(1).label("Currency"),
  accountType: yup.string().required().min(1).label("Account type"),
  subscriberCount: yup.string().required().min(1).label("No of subscriber"),
});

// Component
const PricingSetupForm: React.FC<SignUpFormProps> = (props) => {
  // States
  const [reRender, setReRender] = useState(false);
  const [planDuration, setPlanDuration] = useState("");

  // Store
  const { isEdit } = useSectionStore();

  // Varaibles
  const initialValues = {
    accountType: "",
    currency: "",
    subscriberCount: "",
    price: "",
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
      duration: planDuration,
      price: Number(values.price),
      subscriberCount: Number(values.subscriberCount),
    };
    console.log({ requestData });

    // Send to backend
    // if (isEdit && sectionToEdit.sectionId) {
    //   await editSectionRequest(
    //     "PUT",
    //     `/section/${sectionToEdit.sectionId}`,
    //     requestData
    //   );
    // } else {
    //   await sendRequest("POST", endpoints.createSectionEndpoint, requestData);
    // }
    // setReRender(!reRender);
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
        <OptionsWrapper>
          <PlanOption
            getSelectedPlan={setPlanDuration}
            className="mt-60 mb-40"
          />
        </OptionsWrapper>

        <Card>
          <Typography
            as="h5"
            className="h-38 pb-15 mb-50"
            text="Create pricing set-up"
          />
          <SelectField
            options={[
              { id: "PERSONAL", value: "PERSONAL" },
              { id: "COPERATE", value: "COPERATE" },
            ]}
            label="Account Type"
            name="accountType"
          />

          <SelectField
            options={[
              { id: "NGN", value: "NGN" },
              { id: "USD", value: "USD" },
            ]}
            label="Currency"
            name="currency"
          />

          <InputField label="Price" name="price" />
          <InputField label="Number Of Subscribers" name="subscriberCount" />

          <FormalModalFooter
            isLoading={loading || editing}
            yesText={isEdit ? "Edit" : "Create"}
            noText="Cancel"
            setShowModal={closeFormModal}
          />

          {/* <Actions className="mt-90">
          <Button
            className="btn-secondary btn-md"
            onClick={() => navigate("/admin/pricing")}
          >
            Cancel
          </Button>
          <Button className="btn-primary btn-md">Update</Button>
        </Actions> */}
        </Card>
      </Form>
    </FormField>
  );
};

export default PricingSetupForm;
