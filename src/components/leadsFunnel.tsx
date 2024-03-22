import React from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { paths } from "@/router";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

// Registering the components needed for the line chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Initiated", "In progress", "Approved", "Rejected"],
  datasets: [
    {
      data: [23, 23, 45, 5],
      backgroundColor: ["#CBD5E1", "#0EA5E9", "#22C55E", "#EF4444"],
      hoverBackgroundColor: ["#CBD5E1", "#0EA5E9", "#22C55E", "#EF4444"],
    },
  ],
};

const SimpleBarChart: React.FC = () => {
  // Calculate total value for percentage calculation
  const total = data.datasets[0].data.reduce((acc, point) => acc + point, 0);

  return (
    <div className="flex gap-[0.18rem] w-[100%]">
      {data.labels.map((label, index) => {
        const value = data.datasets[0].data[index];
        const backgroundColor = data.datasets[0].backgroundColor[index];
        if (index === 0)
          return (
            <div
              key={index}
              className="rounded-l-full"
              style={{ width: `${(value / total) * 100}%`, backgroundColor: backgroundColor, height: "11px" }}
            />
          );
        if (index === data.labels.length - 1)
          return (
            <div
              key={index}
              className="rounded-r-full"
              style={{ width: `${(value / total) * 100}%`, backgroundColor: backgroundColor, height: "11px" }}
            />
          );
        return <div key={index} className="" style={{ width: `${(value / total) * 100}%`, backgroundColor: backgroundColor, height: "11px" }} />;
      })}
    </div>
  );
};

Chart.register(ArcElement, Tooltip, Legend, Title);

const options = {
  cutout: "80%", // Adjust this value to control the thickness of the doughnut
  plugins: {
    legend: {
      display: false, // This will hide the legend (and labels)
    },
    // Include other plugin configurations here as needed
  },
};

function LeadsFunnel() {
  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
  return (
    <Card className="bg-none w-full md:border-0 shadow-none">
      <CardContent className="flex flex-col px-4 py-4 gap-[0.89rem] md:px-0">
        <div className="flex flex-col md:flex-row justify-between md:justify-normal gap-[0.35rem] items-start md:items-center">
          <h2>
            {/* <span className="font-bold">{total}</span> <span className="font-medium">Total Applications:</span> */}
            <span className="font-bold">281</span> <span className="font-medium">Total Applications:</span>
          </h2>
          <ul className="flex flex-wrap gap-x-3 gap-y-[0.15rem] items-center">
            {data.labels.map((label, index) => (
              <li key={index} className="flex md:gap-1 justify-center text-xl items-center">
                <span
                  className="text-[0.55rem] items-center justify-center mr-1 -translate-y-0.5"
                  style={{
                    color: data.datasets[0].backgroundColor[index],
                  }}
                >
                  ⬤
                </span>
                <span className="font-bold text-xs ml-1">
                  {data.datasets[0].data[index]} <span className="font-normal text-[0.8rem]">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <SimpleBarChart />
      </CardContent>
    </Card>
  );
}

export default LeadsFunnel;
