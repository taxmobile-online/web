import React, { useEffect, useState } from "react";

import { Actions, BookStyle } from "./style";

import Button from "Components/Atoms/Button";
import Typography from "Components/Atoms/Typography";

import { formatCurrency } from "Utils/Helper";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import useAuthStore from "Store/auth.store";
import { Spinner } from "Components/Atoms/Spinner";

// Type defination
interface Props {
  data?: any;
}

// Component
const Book: React.FC<Props> = ({ data }) => {
  // States
  const [reRender, setReRender] = useState(false);

  // Hooks
  const { data: tokedAccessData, loading, sendRequest } = useApi<any>();
  const { userData } = useAuthStore();

  // Methods
  const getBookAccess = async () => {
    const requestData = { docId: data.documentId, userId: userData.userId };
    await sendRequest("POST", endpoints.getDocumentAccessEndpoint, requestData);
    setReRender(!reRender);
  };

  const afterTokenAccess = async () => {
    if (tokedAccessData) {
      const token = tokedAccessData?.data?.token;

      // navigate(`/book/${data.documentId}/${token}`);
      window.open(`${window.location.origin}/book/${data.documentId}/${token}`);
    }
  };

  // Effects
  useEffect(() => {
    afterTokenAccess();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRender]);

  // Data to display
  return (
    <BookStyle>
      <div className="book__top">
        <Typography as="h5" className="h-41" text={`${data.title.charAt(0)}`} />
      </div>
      <div className="book__bottom">
        <Typography
          as="h5"
          className="h-21 text-truncate"
          title={data.title || ""}
          text={data.title || "--"}
        />
        <Typography
          as="h5"
          className="p-15"
          text={`${formatCurrency(data.amount)}`}
        />
        <Actions className="mt-20">
          <Button
            onClick={() => getBookAccess()}
            className="btn b-3 btn-primary btn-s-1 book-btn"
          >
            {loading ? (
              <Spinner style={{ width: "1.5rem", height: "1.5rem" }} />
            ) : (
              "Read"
            )}
          </Button>
          {data.canBuy && <Button className="book-btn" value="Download" />}
        </Actions>
      </div>
    </BookStyle>
  );
};

export default Book;
// ₦
