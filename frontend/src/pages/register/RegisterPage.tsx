import React, { useState } from "react";
import RegisterStage1 from "./RegisterStage1";
import RegisterStage2 from "./RegisterStage2";
import RegisterStage3 from "./RegisterStage3";


interface OrgDetails {
  name: string;
  size: string;
  type: string;
  location: string;
}

const RegisterPage: React.FC = () => {
  const [stage, setStage] = useState(1); 
  const [orgSector, setorgSector] = useState<Set<string>>(new Set([]))

  const [orgDetails, setOrgDetails] = useState<OrgDetails>({
    name: "",
    size: "",
    type: "",
    location: "",
  });
  const [fundingDetails, setFundingDetails] = useState({
    objectives: "",
    years: "",
    
  });
  const [orgAccountDetails, setorgAccountDetails] = useState({
    email: "",
    password: "",
  });

  // Handler for organization details
  const handleOrgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrgDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for funding details
  const handleFundingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFundingDetails((prev) => ({ ...prev, [name]: value }));
  };
  const handleOrgAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setorgAccountDetails((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = () => {
    console.log("handle submit got clicked!!!!!!!")
    console.log({
      ...orgDetails,
      orgSector: Array.from(orgSector), 
      ...fundingDetails,
      ...orgAccountDetails,
    });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="px-10 py-10 max-w-xl">
        {stage === 1 && (
          <RegisterStage1 
            orgDetails={orgDetails}
            handleOrgChange={handleOrgChange}
            handleSectorChange={setorgSector}
            onNext={() => setStage(2)}
            />
        )}

        {stage === 2 && (
          <RegisterStage2
          orgName={orgDetails.name}
          fundingDetails={fundingDetails}
          handleFundingChange={handleFundingChange}
          onBack={() => setStage(1)}
          onNext={() => setStage(3)}
          />
        )}

        {stage === 3 && (
          <RegisterStage3
          orgName={orgDetails.name}
          orgAccountDetails={orgAccountDetails}
          handleOrgAccountChange={handleOrgAccountChange}
          onBack={() => setStage(2)}
          onSubmit={handleSubmit}
          />
        )}

      </div>
    </div>
  );
};

export default RegisterPage;
