import { GreenSuccessIcon, SuccessIcon } from "@/components/svgs/icon";
import { paths } from "@/router";
import React, { useEffect, useState } from "react";
import {} from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "@/hooks/useRouter";

function Success() {
  const { user } = useAuth();

  const name = user?.name;

  const { push } = useRouter();
  const [redirectTimer, setRedirectTimer] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      push(paths.home);
    }, 3000);

    const interval = setInterval(() => {
      setRedirectTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full m-0 h-[100vh] flex flex-col justify-center items-center gap-4">
      <GreenSuccessIcon />
      <h1 className="text-xl font-bold">Welcome! {name}</h1>
      <p className="text-center text-sm opacity-50">You has been successfully Logged in</p>

      <div className="absolute bottom-10 ">
        <p className="text-center text-xs opacity-50">Redirecting in {redirectTimer} Seconds </p>
      </div>
    </div>
  );
}

export default Success;
