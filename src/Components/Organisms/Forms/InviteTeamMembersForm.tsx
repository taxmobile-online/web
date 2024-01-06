import React, { useEffect, useState } from "react";

import { SignUpFormProps } from "./types";
import useAuthStore from "Store/auth.store";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import Button from "Components/Atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import { AppTagInput } from "Components/Atoms/Input";
import { Flex } from "Styles/layouts/Flex";
import { FormNotification } from "Components/Molecules/FormNotification";

// Component
const InviteTeamMembersForm: React.FC<SignUpFormProps> = () => {
  // States
  const [reRender, setReRender] = useState(false);
  const [members, setMembers] = useState([]);
  const [alert, setAlert] = useState({
    status: "",
    message: "",
  });

  //   Store
  const { userData } = useAuthStore();

  // Hooks
  let { data, loading, sendRequest } = useApi<any>();
  const navigate = useNavigate();

  // Methods
  const handleSubmit = async () => {
    if (!members.length) return;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    members.forEach((member) => {
      if (!emailRegex.test(member))
        return setAlert({
          status: "ERROR",
          message: `${member} is not a valid email address`,
        });
    });

    const requestData = {
      emails: members,
      corperateAccId: userData.userId,
    };

    // Send to backend
    await sendRequest("POST", endpoints.inviteTeamApi, requestData);
    setReRender(!reRender);
  };

  const handleAfterSubmit = () => {
    if (!data) return;

    if (data?.status && data?.status === "SUCCESS") {
      navigate("/library");
    }
  };

  // Effects
  useEffect(() => {
    handleAfterSubmit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRender]);

  // Data to display
  return (
    <>
      <FormNotification
        className="mb-40"
        visible={alert.message}
        status={alert.status}
        message={alert.message}
        setVisibility={() => setAlert({ status: "", message: "" })}
      />

      <AppTagInput
        onChange={setMembers}
        label="Email Addresses"
        bottomLabel="Add members by email"
      />

      <Flex $gap="3rem" className="mt-70" $flexRowAiCenter>
        <Button
          onClick={() => handleSubmit()}
          className="btn btn-primary btn-bg-color-2"
          value="Invite and continue"
          disabled={loading}
        />
        <Link to="/admin">Skip</Link>
      </Flex>
    </>
  );
};

export default InviteTeamMembersForm;
