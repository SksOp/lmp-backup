import { DetailViewer } from "@/components/leadCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

interface PersonalProps {
  name: string;
  phone: string;
  email: string;
  dob: string;
  alternatePhone: string;
  anyOtherLoan: string;
  monthlyExpense: string;
}

interface ProfessionalProps {
    employmentType: string;
    monthlySalary: string;
    totalExperience: string;
    currenEmployer: string;
  }

function DetailsDisplay({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Card className="w-full p-4">
        <CardHeader className="flex flex-row gap-2 items-center">
          {title}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

function PersonalInfo({
  name,
  phone,
  email,
  dob,
  alternatePhone,
  anyOtherLoan,
  monthlyExpense,
}: PersonalProps) {
  const renderPersonalInfo = () => {
    return (
      <>
        <DetailViewer title="name" value={name} />
        <DetailViewer title="phone" value={phone} />
        <DetailViewer title="email" value={email} />
        <DetailViewer title="dob" value={dob} />
        <DetailViewer title="alternatePhone" value={alternatePhone} />
        <DetailViewer title="anyOtherLoan" value={anyOtherLoan} />
        <DetailViewer title="monthlyExpense" value={monthlyExpense} />
      </>
    );
  };

  return (
    <DetailsDisplay title="Personal Info">
      {renderPersonalInfo()}
    </DetailsDisplay>
  );
}

function ProfessionalInfo( {employmentType, monthlySalary, totalExperience, currenEmployer}: ProfessionalProps) {
    const renderProfessionalInfo = () => {
        return (
          <>
            <DetailViewer title="employmentType" value={employmentType} />
            <DetailViewer title="monthlySalary" value={monthlySalary} />
            <DetailViewer title="totalExperience" value={totalExperience} />
            <DetailViewer title="currenEmployer" value={currenEmployer} />
          </>
        );
    };
  
    return (
        <DetailsDisplay title="Personal Info">
          {renderProfessionalInfo()}
        </DetailsDisplay>
      );
}


export { PersonalInfo, ProfessionalInfo };
