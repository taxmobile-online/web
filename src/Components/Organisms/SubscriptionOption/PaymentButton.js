import { usePaystackPayment } from "react-paystack";

import useAuthStore from "Store/auth.store";
import Button from "Components/Atoms/Button";


const PaymentButton = (props) => {
  
  // Props
  const { handleShowModal, price, accountType, btnType, pricingId } = props;
  // Store
  const { setTransactionId, setAccountType, setPricingId } = useAuthStore();

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: parseInt(`${price}00`),
    publicKey: `pk_test_da2adf82cb1ed414ff60cd5839106a414b6a21bf`,
  };
  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    handleShowModal();
    console.log({ reference });
    setAccountType(accountType);
    setTransactionId(reference.trxref);
    setPricingId(pricingId);
  };
  const onClose = () => {
    console.log("closed");
  };

  return (
    <Button
      value="Subscribe Now"
      className={`mt-70 ${btnType ? btnType : "btn-secondary"}`}
      onClick={() => initializePayment(onSuccess, onClose)}
    />
  );
};

export default PaymentButton;
