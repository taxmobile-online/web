import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Content, Wrapper, Success } from "./style";
import Logo from "Components/Atoms/Logo";
import Typography from "Components/Atoms/Typography";
import Input from "Components/Atoms/Input/Input";
import Button from "Components/Atoms/Button";
import { TickCircle } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const ForgetPassword: React.FC<Props> = () => {
  // States
  const [linkSent] = useState(false);

  // Data to display
  return (
    <Wrapper>
      <Content>
        <Logo size="lg" />
        <Typography as="h4" className="h-4" text="Forgot your password?" />
        <Typography
          as="h5"
          className="h-5 text-center max-width-480 mb-50 mt-15"
        >
          Enter the email address associated with your Taxmobile account and
          we'll send you a link to reset your password.
        </Typography>

        {linkSent && (
          <Success
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
          >
            <TickCircle />
            <Typography
              as="h4"
              className="p-7"
              text="Reset password link has been sent to your email."
            />
          </Success>
        )}

        <Input label="Email" />
        <Button
          className="btn btn-primary btn-full btn-bg-color-2 mt-40"
          value="Sign in"
        />
        <Typography as="h5" className="h-5 mt-40 text-center">
          <>
            Back to?{" "}
            <Link to="/sign-in" className="l l-1">
              Sign in
            </Link>
          </>
        </Typography>
      </Content>
    </Wrapper>
  );
};

export default ForgetPassword;
