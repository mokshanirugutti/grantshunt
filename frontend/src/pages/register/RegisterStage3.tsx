import React from "react";
import { Button } from "@/components/ui/button"; 
import RequiredInput from "@/components/ui/RequiredInput"; 
import PasswordInput from "@/components/ui/PasswordInput";


interface RegisterStage2Props {
  orgName : string
  orgAccountDetails: {
    email: string;
    password: string;
  };
  handleOrgAccountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void; 
  onSubmit: () => void;
}


const RegisterStage3: React.FC<RegisterStage2Props> = ({ orgName,orgAccountDetails, handleOrgAccountChange, onBack, onSubmit }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold my-2 text-center">
        Cool, {orgName}! Let's finish by saving your account 
      </h1>

      
      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <RequiredInput
          title="Email" 
          placeholder="Email address"
          type="email"
          value={orgAccountDetails.email}
          name="email"
          onChange={handleOrgAccountChange}
        />
        <PasswordInput
          name="password"
          password={orgAccountDetails.password}
          onChange={handleOrgAccountChange}
        />
        <div className="flex justify-end gap-4">
          <Button variant="outline" className="px-5 py-2 w-fit" onClick={onBack}>
            Back
          </Button>
          <Button variant={"default"} className="px-5 py-2 w-fit" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterStage3;