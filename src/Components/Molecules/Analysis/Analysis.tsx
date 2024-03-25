import React from "react";

import {
  Title,
  Legend,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import { Bottom, Legends, Top, TopLeft, Wrapper } from "./style";

import Typography from "Components/Atoms/Typography";

ChartJS.register(
  Title,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  //   scales: { x: { display: false }, y: { display: false } },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.3,
    },
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.3,
    },
  ],
};

// Type defination
interface Props {}

// Component
const Analysis: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Top className="mb-65">
        <TopLeft>
          <Typography as="h4" className="h-30" text="Sales Analytics" />
          <Legends>
            <Typography as="h4" className="legend legend--sales" text="Sales" />
            <Typography
              as="h4"
              className="legend legend--subscribers"
              text="Subscribers"
            />
          </Legends>
        </TopLeft>
      </Top>

      <Bottom>
        <Line options={options} data={data} />
      </Bottom>
    </Wrapper>
  );
};

export default Analysis;
