import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "@/hooks/useRouter";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroAvatar from "./components/hero-avatar";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "@/router/paths";
import Success from "../welcome/components/success";

function LoginView() {
  const { login, user } = useAuth();

  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState<"id" | "password">("id");

  const { replace } = useRouter();
  useEffect(() => {
    if (user) replace("/");
  }, [user, replace]);



  return (
    <div className="pt-10 min-h-screen  bg-muted ">
      <div className="pt-10 py-6 border-b flex bg-background flex-col gap-2 items-center">
        <HeroAvatar />
        <h2 className="text-xl font-semibold mt-5">Login to Tamweel account</h2>
        <p className="text-sm opacity-50">Start your car leasing process with us </p>
      </div>
      {currentPage === "id" && <IdView id={id} setId={setId} setCurrentPage={setCurrentPage} />}
      {currentPage === "password" && <PasswordView id={id} password={password} setPassword={setPassword} login={login} />}
      
    </div>
  );
}

export default LoginView;

const IdView = ({ id, setId, setCurrentPage }: { id: string; setId: (id: string) => void; setCurrentPage: (page: "id" | "password") => void }) => {
  return (
    <>
      <div className="p-6 max-w-xl  m-auto flex flex-col gap-2">
        <Label htmlFor="id" className="text-sm text-foreground font-semibold">Enter your Email ID or Phone</Label>
        <Input value={id} onChange={(e) => setId(e.target.value)} name="id" placeholder="enter your email ID or phone number" />
      </div>
      <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6">
        <Button className={cn("w-full bg-primary ")} disabled={id.length < 2} onClick={() => setCurrentPage("password")}>
          Next
        </Button>
      </div>
    </>
  );
};

const PasswordView = ({
  id,
  password,
  setPassword,
  login,
}: {
  id: string;
  password: string;
  setPassword: (password: string) => void;
  login: (id: string, password: string) => void;
}) => {
  
  const navigate = useNavigate();
  const handleOnClick = () => {
    login(id, password);
    navigate(paths.welcome);
  }

  return (
    <>
      <div className="p-6 max-w-xl  m-auto flex flex-col gap-2">
        <Label htmlFor="password" className="text-sm text-foreground font-semibold">Password</Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="enter your password here" />
        <div className="flex">
          <div className="flex flex-grow" />
          <Link to={paths.resetPassword} className="text-sm font-semibold">Forget Password?</Link>
        </div>
      </div>
      <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6">
        <Button className={cn("w-full bg-primary ")} disabled={password.length < 2} onClick={handleOnClick}>
          Login
        </Button>
      </div>
    </>
  );
};
