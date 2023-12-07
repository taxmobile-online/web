import React, { useEffect } from "react";

import { PlansWrapper as Wrapper, PlanCard, SubscriberQuantity } from "./style";

import Loader from "./Loader";
import { formatNumber } from "Utils/Helper";
import Typography from "Components/Atoms/Typography";

import { PlansProps } from "./types";
import PaymentButton from "./PaymentButton";
import useApi from "Utils/Hooks/useApi";

// Component
const Plans: React.FC<PlansProps> = (props) => {
  // Hooks
  let { data, loading, error, sendRequest } = useApi<any>();

  data = data?.data || [];

  // Props
  const { handleShowModal } = props;

  // Effects
  useEffect(() => {
    sendRequest("GET", "/pricing");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data to display
  if (loading) {
    return (
      <Wrapper>
        <Loader />
        <Loader />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Typography as="p" className="text-cnter mt-50 p-18">
        Could not load plans 😢
      </Typography>
    );
  }

  return (
    <Wrapper>
      {data?.map((plan: any) => (
        <div key={plan.pricingId}>
          <PlanCard
            className={
              plan.accountType === "PERSONAL" ? "secondary" : "primary"
            }
          >
            <Typography
              as="h4"
              className="h-9 mb-35 text-capitalize"
              text={plan.accountType === "PERSONAL" ? "Personal" : "Corperate"}
            />
            <Typography as="h4" className="h-10">
              <>
                <sup className="p-5">{plan.currency || "--"}</sup>{" "}
                <span className="">{formatNumber(plan.price) || "--"}</span>
                <sub className="p-5">/Mon</sub>
              </>
            </Typography>
            <Typography
              as="p"
              className="p-4"
              text={
                plan.accountType === "PERSONAL"
                  ? "A single user account"
                  : "One account, multiple users"
              }
            />

            {plan.accountType === "PERSONAL" ? (
              <>
                <PaymentButton
                  price={plan.price}
                  accountType={plan.accountType}
                  handleShowModal={handleShowModal}
                />
              </>
            ) : (
              <>
                <SubscriberQuantity>
                  <Typography
                    as="p"
                    className="p-6 text-center"
                    text="5 - 10 Subscribers"
                  />
                </SubscriberQuantity>

                <PaymentButton
                  price={plan.price}
                  accountType={plan.accountType}
                  handleShowModal={handleShowModal}
                  btnType="btn-primary"
                />

                {/* <Button
                  value="Subscribe Now"
                  className="mt-40 btn-primary"
                  onClick={handleShowModal}
                /> */}
              </>
            )}
          </PlanCard>
        </div>
      ))}
    </Wrapper>
  );
};

export default Plans;
