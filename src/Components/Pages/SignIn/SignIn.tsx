import React from "react";
import { Content, Left, Right, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { Link } from "react-router-dom";
import SignInForm from "Components/Organisms/Forms/SignInForm";

// Type defination
interface Props {}

// Component
const SignIn: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Content>
        <Left>
          <Typography as="h2" className="h-2 mt-40" text="Sign in" />
          <Typography as="p" className="p-1 mb-30" text="Welcome back!" />
          {/* <Input label="Email" />
          <Input label="Password" type="password" />
          <Button
            className="btn btn-primary btn-full btn-bg-color-2 mt-40"
            value="Sign in"
          /> */}
          <SignInForm />
          <Typography as="p" className="p-1 mt-40 text-center">
            <>
              Not a member? <Link to="/#sub-option">Sign up</Link>
            </>
          </Typography>
          <div className="text-center mt-20">
            <Link to="/reset-password" className="">
              Forgot your password?
            </Link>
          </div>
        </Left>
        <Right>
          <img src="/assets/images/sign-in-img.png" alt="" />
        </Right>
      </Content>
    </Wrapper>
  );
};

export default SignIn;
