import React from "react";
import { Button } from "@/components/ui/button";
import RequiredInput from "@/components/ui/RequiredInput";
import { Link } from "react-router";
import DropDownDescInput from "@/components/ui/dropDownDesc";
import MultipleSelects from "@/components/ui/multipleSelects";
import DropDownSelect from "@/components/ui/dropDownSelect";

interface RegisterStage1Props {
  orgDetails: {
    name: string;
    size: string;
    type: string;
    location: string;
    sector: string[];
  };
  handleOrgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
}

const RegisterStage1: React.FC<RegisterStage1Props> = ({ orgDetails, handleOrgChange, onNext }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold my-4">Enter your organization details</h1>

      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <div className="flex gap-4 flex-wrap mx-auto w-fit px-3 justify-between">
          <RequiredInput
            title="Name"
            placeholder="Your organization name"
            type="text"
            value={orgDetails.name}
            name="name"
            onChange={handleOrgChange}
          />
          <DropDownDescInput
            title="Size"
            name="size"
            onChange={handleOrgChange}
          />

          <DropDownSelect
            title="Select Organization Type"
            name="type"
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

          <MultipleSelects 
          title="Organization Sector"
          name="sector"
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