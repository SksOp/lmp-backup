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
  labels: ["Initiated", "Bank Verifications", "Document Verification", "Dealer Acknowledges", "Amount Disbursed", "Loan Rejected"],
  datasets: [
    {
      data: [23, 12, 4, 45, 5, 3],
      backgroundColor: ["#9F43CC", "#EBA10F", "#951919", "#2B87E3", "#EA6200", "#0CA85D"],
      hoverBackgroundColor: ["#9F43CC", "#EBA10F", "#951919", "#2B87E3", "#EA6200", "#0CA85D"],
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
    <Card className="bg-none w-full">
      <CardContent className="p-6">
        <div className="flex flex-col justify-between items-start">
          <h2>
            <span className="font-bold">{total}</span> <span className="font-medium">Total Applications:</span>
          </h2>
          <ul className="flex flex-wrap gap-1">
            {data.labels.map((label, index) => (
              <li key={index} className="flex justify-center text-xl my-2 items-center">
                <span
                  className="text-sm"
                  style={{
                    color: data.datasets[0].backgroundColor[index],
                  }}
                >
                  ⬤
                </span>
                <span className="font-bold sm:text-lg min-[500px]:text-base text-xs ml-2">
                  {data.datasets[0].data[index]} <span className="font-normal ">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default LeadsFunnel;
