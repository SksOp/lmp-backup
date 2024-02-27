import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/app";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./auth/context/auth-provider";
import { AuthConsumer } from "./auth/context/auth-consumer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AuthConsumer>
          <App />
          <Toaster />
        </AuthConsumer>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
