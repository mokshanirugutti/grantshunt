import React from "react";
import { Button } from "@/components/ui/button";
import RequiredInput from "@/components/ui/RequiredInput";
import { Link } from "react-router";

interface RegisterStage1Props {
  orgDetails: {
    name: string;
    size: string;
    sector: string;
    location: string;
  };
  handleOrgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
}

const RegisterStage1: React.FC<RegisterStage1Props> = ({ orgDetails, handleOrgChange, onNext }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold my-2 text-center">Register</h1>
      <h1 className="text-2xl font-semibold my-2">Enter your organization details</h1>

      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <div className="flex gap-4 flex-wrap mx-auto w-fit px-3">
          <RequiredInput
            title="Name"
            placeholder="Your organization name"
            type="text"
            value={orgDetails.name}
            name="name"
            onChange={handleOrgChange}
          />
          <RequiredInput
            title="Size"
            placeholder="Your organization size"
            type="number"
            value={orgDetails.size}
            name="size"
            onChange={handleOrgChange}
          />
          <RequiredInput
            title="Sector"
            placeholder="E.g., technology, healthcare, education"
            type="text"
            value={orgDetails.sector}
            name="sector"
            onChange={handleOrgChange}
          />
          <RequiredInput
            title="Geographic Location"
            placeholder="Country, province, or city"
            type="text"
            value={orgDetails.location}
            name="location"
            onChange={handleOrgChange}
          />
        </div>
        <div className="flex justify-between">
          <Link to="/">
            <Button variant={"default"} className="px-5 py-2 w-fit">
              Cancel
            </Button>
          </Link>
          <Button variant={"default"} className="px-5 py-2 w-fit" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterStage1;