import React from "react";
import { UserDetail, Wrapper } from "./style";
import { UserAvatar } from "Components/Atoms/UserAvatar";
import Typography from "Components/Atoms/Typography";
import { Flex } from "Styles/layouts/Flex";
import Button from "Components/Atoms/Button";
import { GalleryAdd } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {
  name?: string;
  role?: string;
}

// Component
const UserProfile: React.FC<Props> = (props) => {
  // Props
  const { role, name = "Adeyemi Qudus" } = props;
  // Data to display
  return (
    <Wrapper>
      <UserDetail>
        <UserAvatar size="big" />
        <div>
          <Typography as="h3" className="h-16" text={name} />
          {role && <Typography as="h3" className="p-12" text={role} />}
        </div>
      </UserDetail>

      <Flex gap="2rem" className="mt-40" flexRowAiCenter>
        <Button className="btn-settings btn-setting-no-bg">
          <GalleryAdd width={20} height={20} /> Change profile
        </Button>
        <Button
          className="btn-settings btn-setting-with-bg"
          value="Change password"
        />
      </Flex>
    </Wrapper>
  );
};

export default UserProfile;
