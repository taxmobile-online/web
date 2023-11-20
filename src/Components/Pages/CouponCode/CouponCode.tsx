import React, { useState } from "react";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";
import { EmptyCard } from "Components/Molecules/EmptyCard";
import { CreateCouponCodeModal } from "Components/Molecules/Modals";
import { Card, Top, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { TableMenuIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const CouponCode: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Data to display
  return (
    <AdminDashboardChildTemplate pageTile="Coupon code">
      <>
        {/* <EmptyCard
          message="No Coupon Code yet!"
          btnLabel="Create Coupon"
          handleAction={() => setShowModal(true)}
        /> */}

        <Wrapper>
          <Top className="mb-20">
            <Typography
              as="h5"
              className="h-39"
              text="Coupons Discount Codes"
            />
            <Button className="btn-primary btn-md" value="Create Coupon" />
          </Top>

          <Card>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Discount sgn</th>
                  <th>Code</th>
                  <th className="center">Quantity</th>
                  <th className="center">Usages</th>
                  <th className="center">Menu</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((d, i) => (
                  <tr key={i}>
                    <td>Individual</td>
                    <td>45.00%</td>
                    <td>DSRWFFFHD</td>
                    <td className="center">6</td>
                    <td className="center">3</td>
                    <td className="center">
                      <Button>
                        <TableMenuIcon />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Wrapper>

        <CreateCouponCodeModal
          showModal={showModal}
          setShowModal={() => setShowModal(false)}
        />
      </>
    </AdminDashboardChildTemplate>
  );
};

export default CouponCode;
