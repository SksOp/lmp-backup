import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { Progress } from "./components/ui/progress";
import { SuspenseSpinner } from "./components/ui/spinner";
// import App from "@/app";
// import reportWebVitals from "./reportWebVitals";

const App = React.lazy(() => import("@/app"));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Suspense fallback={<SuspenseSpinner />}>
    <App />
  </Suspense>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
