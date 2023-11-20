import React from "react";
import {
  CardTop,
  Name,
  NameAvatar,
  Pagination,
  SearchInput,
  SubscribersCard,
  TableSection,
} from "./style";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";
import Typography from "Components/Atoms/Typography";
import {
  CaretLeftIcon,
  CaretRightIcon,
  LensIcon,
} from "Components/Atoms/SvgIcons";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const Subscribers: React.FC<Props> = () => {
  // Data to display
  return (
    <AdminDashboardChildTemplate pageTile="Subscribers">
      <>
        <SubscribersCard>
          <CardTop>
            <Typography as="h5" className="h-35" text="Subscribers details" />
            <SearchInput>
              <LensIcon width={20} height={20} />
              <input type="text" placeholder="Search by name or email ..." />
            </SearchInput>
          </CardTop>

          <TableSection>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>
                  <Name>
                    <NameAvatar>A</NameAvatar>
                    Darrell Steward
                  </Name>
                </td>
                <td>deanna.curtis@example.com</td>
                <td>Individual</td>
              </tr>
              <tr>
                <td>
                  <Name>
                    <NameAvatar>A</NameAvatar>
                    Darrell Steward
                  </Name>
                </td>
                <td>deanna.curtis@example.com</td>
                <td>Individual</td>
              </tr>
              <tr>
                <td>
                  <Name>
                    <NameAvatar>A</NameAvatar>
                    Darrell Steward
                  </Name>
                </td>
                <td>deanna.curtis@example.com</td>
                <td>Individual</td>
              </tr>
            </table>
          </TableSection>

          <Pagination className="mt-40">
            <Button>
              <CaretLeftIcon />
            </Button>
            <Typography as="h6" className="h-36" text="1 of 23" />
            <Button>
              <CaretRightIcon />
            </Button>
          </Pagination>
        </SubscribersCard>
      </>
    </AdminDashboardChildTemplate>
  );
};

export default Subscribers;
