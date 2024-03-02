import React from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { paths } from "@/router";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";

Chart.register(ArcElement, Tooltip, Legend, Title);
const data = {
  labels: [
    "Initiated",
    "Bank Verifications",
    "Document Verification",
    "Dealer Acknowledges",
    "Amount Disbursed",
    "Loan Rejected",
  ],
  datasets: [
    {
      data: [23, 12, 4, 45, 5, 3],
      backgroundColor: [
        "#9F43CC",
        "#EBA10F",
        "#951919",
        "#2B87E3",
        "#EA6200",
        "#0CA85D",
      ],
      hoverBackgroundColor: [
        "#9F43CC",
        "#EBA10F",
        "#951919",
        "#2B87E3",
        "#EA6200",
        "#0CA85D",
      ],
    },
  ],
};

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
    <Card className="bg-none w-full m-4 ">
      <CardHeader>
        <div className="flex justify-between m-2">
          <h1 className="text-2xl font-bold">Applications Funnel</h1>
          <Link to={paths.allLead} className="flex text-xl gap-2">
            All Leads
            <Icon
              icon="teenyicons:arrow-right-solid"
              className="w-8 h-8 mr-8"
            />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex  min-[500px]:flex-row flex-col-reverse justify-between items-center">
          <ul>
            {data.labels.map((label, index) => (
              <li key={index} className="flex text-xl my-3 items-center">
                <div
                  className="w-2 h-2 bg-[#9F43CC] rounded-full mr-2"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></div>
                {data.datasets[0].data[index]} {label}
              </li>
            ))}
          </ul>
          <div
            className={"max-w-xs m-2 flex relative justify-end items-center"}
          >
            <Doughnut
              options={options}
              className="!w-40 !h-40 sm:!w-80 sm:!h-80 transition-all duration-300"
              data={data}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-4xl sm:text-6xl font-bold transition-all duration-300 ">
                {" "}
                {total}{" "}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LeadsFunnel;
