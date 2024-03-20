import React from "react";
import HeroAvatar from "./components/hero-avatar";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { paths } from "@/router";
import { Platform } from "@/auth/types.d";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Otp from "@/components/ui/otp";
import { Mail, SMS } from "@/components/svgs/contacts";
import { InfoIcon } from "@/components/svgs/icon";

enum Page {
  SelectPlatform,
  OTP,
  NewPassword,
}

function ResetPassword() {
  const { requestResetPasswordWithEmail, resetPassword, validateOtp, requestResetPasswordWithPhone } = useAuth();
  const [otp, setOtp] = React.useState<number>(0);
  const [page, setPage] = React.useState<Page>(Page.SelectPlatform);

  const [password, setPassword] = React.useState("");

  const onSelectPlatform = async (platform: Platform) => {
    // but we know that user is not null since we are using auth guard
    var success = false;
    switch (platform) {
      case "email":
        success = await requestResetPasswordWithEmail();
        break;
      case "phone":
        success = await requestResetPasswordWithPhone();
        break;
    }
    if (!success) {
      // TODO: Handle error gracefully
      return;
    }
    setPage(Page.OTP);
  };
  const onOtpSubmit = async () => {
    console.log(otp);
    const success = await validateOtp(otp, "phone");
    if (!success) {
      // TODO: Handle error gracefully
      return;
    }
    setPage(Page.NewPassword);
  };

  const handleResetPassword = async (password: string) => {
    const success = await resetPassword(password);
    if (!success) {
      // TODO: Handle error gracefully
      return;
    }
    // Confirm User that password has been reset
  };
  return (
    <div className="pt-10 min-h-screen  bg-muted ">
      <div className="pt-10 py-6 border-b flex bg-background flex-col gap-2 items-center">
        <HeroAvatar icon={"prime:lock"} />
        <h2 className="text-2xl font-bold mt-5">Reset your password</h2>
        <p className=" opacity-50">Start your car leasing process with us </p>
      </div>
      {page === Page.SelectPlatform && <SelectPlatform onSelectPlatform={onSelectPlatform} />}
      {page === Page.OTP && <OtpView otp={otp} setOtp={setOtp} onOtpSubmit={onOtpSubmit} />}
      {page === Page.NewPassword && <NewPasswordView password={password} setPassword={setPassword} handleResetPassword={handleResetPassword} />}
    </div>
  );
}

export default ResetPassword;

interface SelectPlatformProps {
  onSelectPlatform: (platform: Platform) => void;
}

function SelectPlatform({ onSelectPlatform }: SelectPlatformProps) {
  const [selectedPlatform, setSelectedPlatform] = React.useState<Platform>("email");
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-xl  m-auto flex flex-col gap-2">
      <p className="text-sm font-semibold">Verify your identity with one of the option,</p>
      <RadioGroup value={selectedPlatform} defaultValue={selectedPlatform} >
        {user?.email && (
          <PlatformCard onClick={() => setSelectedPlatform("email")} name="Email" label={user.email} Icon={SMS}>
            <RadioGroupItem value="email" onClick={() => setSelectedPlatform("email")} className="text-foreground border-foreground" />
          </PlatformCard>
        )}

        {user?.number && (
          <PlatformCard onClick={() => setSelectedPlatform("phone")} name="Phone" label={user.number} Icon={Mail}>
            <RadioGroupItem value="phone" onClick={() => setSelectedPlatform("phone")} className="text-foreground border-foreground" />
          </PlatformCard>
        )}
      </RadioGroup>
      <div className="flex gap-1">
          <InfoIcon />
          <p className="text-xs">We will send an OTP to the chosen verification method</p>
      </div>
      <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6">
        <Button className={cn("w-full bg-primary ")} onClick={() => onSelectPlatform(selectedPlatform)}>
          Continue
        </Button>
      </div>
    </div>
  );
}

const PlatformCard = ({ children, name, label, onClick,Icon }: { children: React.ReactNode; name: string; label: string; onClick: () => void; Icon:React.ComponentType }) => {
  return (
    <Card onClick={onClick} className="flex gap-3 px-8 py-4 items-center justify-start pointer-events-auto cursor-pointer hover:bg-secondary">
      {children}
      <div className="flex items-center justify-between gap-2">
        <Icon />
        <div>
        <p className="text-lg text-foreground font-semibold" >{name}</p>
      <div className="flex-1" />
      <p className="opacity-50">{label}</p>

        </div>
      </div>
      
    </Card>
  );
};

export function OtpView({
  otp,
  setOtp,
  onOtpSubmit,
}: {
  otp: number;
  setOtp: React.Dispatch<React.SetStateAction<number>>;
  onOtpSubmit: () => void;
}) {
  const otpLength = 6;
  return (
    <div className="p-6 max-w-xl  m-auto flex flex-col gap-2">
      <Label htmlFor="otp">Enter the OTP sent to your phone</Label>
      <div className="flex gap-2 justify-between">
        <Otp length={otpLength} otp={otp} onOtpChange={(otp: number) => setOtp(otp)} className="h-16 rounded-lg" />
      </div>
      <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6">
        <Button className={cn("w-full bg-primary flex-1 ")} disabled={String(otp).split("").length < otpLength} onClick={onOtpSubmit}>
          Next
        </Button>
      </div>
    </div>
  );
}

function NewPasswordView({
  password,
  setPassword,
  handleResetPassword,
}: {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleResetPassword: (password: string) => void;
}) {
  const [reEnteredPassword, setReEnteredPassword] = React.useState("");
  return (
    <div className="p-6 max-w-xl  m-auto flex flex-col gap-2">
      <Label htmlFor="password">Enter your new password</Label>
      <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="h-16 rounded-lg" />

      <Label htmlFor="re-enter-password">Re-enter your password</Label>
      <Input
        value={reEnteredPassword}
        onChange={(e) => setReEnteredPassword(e.target.value)}
        name="re-enter-password"
        type="password"
        className="h-16 rounded-lg"
      />
      <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6">
        <Button className={cn("w-full bg-primary ")} disabled={password.length < 6} onClick={() => handleResetPassword(password)}>
          Reset Password
        </Button>
      </div>
    </div>
  );
}
