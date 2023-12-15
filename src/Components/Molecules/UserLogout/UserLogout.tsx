import React from "react";
import { Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { Logout } from "Components/Atoms/SvgIcons";
import useAuthStore from "Store/auth.store";
import { useNavigate } from "react-router-dom";

// Type defination
interface Props {}

// Component
const UserLogout: React.FC<Props> = () => {
  // Hooks
  const navigate = useNavigate();

  // Store
  const { setUserData } = useAuthStore();

  // Data to display
  return (
    <Wrapper>
      <Typography as="h4" className="h-17" text="Logout" />
      <Typography as="p" className="p-13" text="Temporary logout " />

      <Button
        className="btn-logout-user mt-30"
        onClick={() => {
          setUserData({});
          navigate("/");
        }}
      >
        <Logout />
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserLogout;
