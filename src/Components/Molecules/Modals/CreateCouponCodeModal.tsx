import React from "react";
import { AnimatePresence } from "framer-motion";
import CenterModal from "./CenterModal";
import { Input } from "Components/Atoms/Input";
import { CustomSelect } from "../CustomSelect";

// Type defination
interface Props {
  showModal: boolean;
  setShowModal: () => void;
}

// Component
const CreateCouponCodeModal: React.FC<Props> = ({
  showModal,
  setShowModal,
}) => {
  // Data to display
  return (
    <AnimatePresence>
      {showModal && (
        <CenterModal
          handleCloseModal={setShowModal}
          headerType="text"
          headerTitle="Create coupon"
          yesText="Create coupon"
        >
          <>
            <CustomSelect
              value="Select"
              label="Account Type"
              dropdownwidth="full"
            />
            <Input label="Coupon Code" />
            <Input label="Percentage (%)" />
            <Input label="Limit and Quantity" />
          </>
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateCouponCodeModal;
