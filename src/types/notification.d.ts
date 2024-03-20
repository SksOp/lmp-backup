export interface Notification {
  id: string;
  title: string;
  description: string;
  type: "warning" | "error" | "success" | "info";
  date: string;
}
