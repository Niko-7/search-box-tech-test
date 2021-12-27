import React from "react";
import { SearchResults } from "../SearchResultsContainer";

export const SearchBox = () => {
  return (
    <div className="searchbox">
      <SearchResults placeholder={"Pick-up Location"} />
    </div>
  );
};
