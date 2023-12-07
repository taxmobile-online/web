import { usePaystackPayment } from "react-paystack";
import Button from "Components/Atoms/Button";
import useAuthStore from "Store/auth.store";

const PaymentButton = (props) => {
  // Props
  const { handleShowModal, price, accountType, btnType } = props;
  // Store
  const { setTransactionId, setAccountType } = useAuthStore();

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
