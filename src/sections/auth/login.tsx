import React, { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "@/hooks/useRouter";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroAvatar from "./components/hero-avatar";

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
    <div className="pt-16 min-h-screen  bg-muted ">
      <div className="pt-16 py-6 border-b flex bg-background flex-col gap-2 items-center">
        <HeroAvatar />
        <h2 className="text-2xl font-bold mt-10">Login to Tamweel account</h2>
        <p className=" opacity-50">Start your car leasing process with us </p>
      </div>
      {currentPage === "id" && (
        <IdView id={id} setId={setId} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "password" && (
        <PasswordView
          id={id}
          password={password}
          setPassword={setPassword}
          login={login}
        />
      )}
    </div>
  );
}

export default LoginView;

const IdView = ({
  id,
  setId,
  setCurrentPage,
}: {
  id: string;
  setId: (id: string) => void;
  setCurrentPage: (page: "id" | "password") => void;
}) => {
  return (
    <>
      <div className="p-6 max-w-xl  m-auto flex flex-col gap-2">
        <Label htmlFor="id">National ID/Iqama Number</Label>
        <Input value={id} onChange={(e) => setId(e.target.value)} name="id" />
      </div>
      <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6">
        <Button
          className={cn("w-full bg-success ")}
          disabled={id.length < 2}
          onClick={() => setCurrentPage("password")}
        >
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
  return (
    <>
      <div className="p-6 max-w-xl  m-auto flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </div>
      <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6">
        <Button
          className={cn("w-full bg-success ")}
          disabled={password.length < 2}
          onClick={() => login(id, password)}
        >
          Login
        </Button>
      </div>
    </>
  );
};
