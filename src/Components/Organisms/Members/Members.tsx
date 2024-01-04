import React, { useEffect, useState } from "react";
import { Body, Head, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { Add } from "Components/Atoms/SvgIcons";
import { Member } from "Components/Molecules/Member";
import useApi from "Utils/Hooks/useApi";
import useAuthStore from "Store/auth.store";
import AddTeamMemberModal from "Components/Molecules/Modals/AddTeamMemberModal";
import endpoints from "Services/endpoints";

// Type defination
interface Props {}

// Component
const Members: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState(false);
  const [reRender, setReRender] = useState(false);
  const [allMembers, setAllMembers] = useState([]);

  const [alert, setAlert] = useState({
    status: "",
    message: "",
  });

  //   Store
  const { userData } = useAuthStore();

  // Hooks
  let { data, loading, sendRequest } = useApi<any>();
  let { loading: loadingAddMember, sendRequest: sendAddRequest } =
    useApi<any>();
  let { loading: loadingDelete, sendRequest: sendDeleteRequest } =
    useApi<any>();

  // Methods
  const fetchData = async () => {
    const apiUrl = `/user/${userData.userId}/team-members`;
    await sendRequest("GET", apiUrl);
    setReRender(!reRender);
  };
  const afterFetch = () => {
    setAllMembers(data?.data);
    console.log({ data });
  };
  const handleAddMember = async (members: any) => {
    if (!members.length) return;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    members.forEach((member: any) => {
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
    await sendAddRequest("POST", endpoints.inviteTeamApi, requestData);
    setShowModal(false);
    await fetchData();
  };

  const handleMemberDelete = async (memberId: any) => {
    const apiUrl = `/user/${userData.userId}/team-member`;
    const requestData = {
      userId: memberId,
    };

    await sendDeleteRequest("DELETE", apiUrl, requestData);
    await fetchData();
  };

  // Effects
  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    afterFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRender]);

  // Data to display
  return (
    <>
      <Wrapper>
        <Head>
          <Typography as="h4" className="h-18" text="Member" />
          <Button
            className="btn btn-members"
            onClick={() => setShowModal(true)}
          >
            <Add />
            Add
          </Button>
        </Head>
        <Body>
          <>
            {loading ? (
              "Fetching members... "
            ) : (
              <>
                {!allMembers?.length
                  ? null
                  : allMembers?.map((member: any) => (
                      <Member
                        key={member.userId}
                        data={member}
                        handleMemberDelete={handleMemberDelete}
                        isDeleting={loadingDelete}
                      />
                    ))}
              </>
            )}
          </>
        </Body>
      </Wrapper>

      <AddTeamMemberModal
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
        handleAddMember={handleAddMember}
        alert={alert}
        setVisibility={() => setAlert({ status: "", message: "" })}
        loading={loadingAddMember}
      />
    </>
  );
};

export default Members;
