import { Notification } from "@/types/notification";

export const notifications: Notification[] = [
  {
    id: "0",
    title: "Waiting for Confirmation",
    description: "Bank is waiting for your confirmation about the car avaiabality to procees with the application",
    type: "warning",
    date: "Tue Mar 19 2024",
  },
  {
    id: "1",
    title: "Car is Ready",
    description: "The car is ready for you to pick it up from the showroom",
    type: "success",
    date: "Tue Mar 19 2024",
  },
  {
    id: "2",
    title: "Loan Successfull",
    description: "Your loan has been approved and the car is ready for you to pick it up from the showroom",
    type: "success",
    date: "Tue Mar 19 2024",
  },
  {
    id: "3",
    title: "Loan Rejected",
    description: "Your loan has been rejected",
    type: "error",
    date: "Tue Mar 19 2024",
  },
];
