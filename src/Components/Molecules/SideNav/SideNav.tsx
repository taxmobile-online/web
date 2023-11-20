import React from "react";
import { LinksWrapper, Wrapper } from "./style";
import Logo from "Components/Atoms/Logo";
import {
  LibraryIcon,
  DashboardIcon,
  PriceIcon,
  SubscribersIcon,
  CouponIcon,
} from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";

// Type defination
interface Props {}

// Component
const SideNav: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Logo />
      <LinksWrapper>
        <Link to="/admin" className="l l-5">
          <DashboardIcon />
          <span>Dashboard</span>
        </Link>
        <Link to="/admin/sections" className="l l-5">
          <PriceIcon />
          <span>Sections</span>
        </Link>
        <Link to="/admin/e-library" className="l l-5">
          <LibraryIcon />
          <span>E-library</span>
        </Link>
        <Link to="/admin/subscribers" className="l l-5">
          <SubscribersIcon />
          <span>Subscribers</span>
        </Link>
        <Link to="/admin/pricing" className="l l-5">
          <PriceIcon />
          <span>Pricing set-up</span>
        </Link>
        <Link to="/admin" className="l l-5">
          <CouponIcon />
          <span>Coupon code</span>
        </Link>
      </LinksWrapper>
    </Wrapper>
  );
};

export default SideNav;
