import React, { useState } from "react";
import AllGrants from "./AllGrants";
import { CustomSearchComponent } from "@/components/CustomSearch";

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="pagePadding">
      <div>
        <CustomSearchComponent onSearch={setSearchQuery} />
      </div>
      <div className="p-10">
        <AllGrants searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default SearchPage;
