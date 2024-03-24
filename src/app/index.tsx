import "./App.css";
import Router from "@/router";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/auth/context/auth-provider";
import { AuthConsumer } from "@/auth/context/auth-consumer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthConsumer>
          <Router />
          <Toaster />
        </AuthConsumer>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
