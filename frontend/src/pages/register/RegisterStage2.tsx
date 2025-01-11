import React from "react";
import { Button } from "@/components/ui/button"; 
import RequiredInput from "@/components/ui/RequiredInput"; 
// import DatePickerInput from "@/components/ui/DatePickerInput";


interface RegisterStage2Props {
  orgName : string
  fundingDetails: {
    objectives: string;
    years: string;
    deadline: string;
  };
  handleFundingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void; 
  onNext: () => void;
 
}


const RegisterStage2: React.FC<RegisterStage2Props> = ({ orgName,fundingDetails, handleFundingChange, onBack, onNext }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold my-2 ">
        Great, {orgName}! let us know about your Grant preferences
      </h1>

      {/* Form for funding details */}
      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <div className="w-fit mx-auto">

        <RequiredInput
          title="Grant Objectives"
          placeholder="Describe your grant objectives"
          type="text"
          value={fundingDetails.objectives}
          name="objectives"
          onChange={handleFundingChange}
        />
        <RequiredInput
          title="Years in Operation"
          placeholder="Number of years"
          type="number"
          value={fundingDetails.years}
          name="years"
          onChange={handleFundingChange}
          />
        {/* <DatePickerInput
          title="Deadline"
          name="deadline"
          onChange={handleFundingChange}
          /> */}
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" className="px-5 py-2 w-fit" onClick={onBack}>
            Back
          </Button>
          <Button variant={"default"} className="px-5 py-2 w-fit" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterStage2;