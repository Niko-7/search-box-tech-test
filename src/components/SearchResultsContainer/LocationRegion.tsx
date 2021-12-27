import React from "react";

interface Props {
  region: string;
  country: string;
}

export const LocationRegion = ({ region, country }: Props) =>
  region || country ? (
    <div className="search-results__location-region">
      {[region, country].filter((each) => !!each).join(", ")}
    </div>
  ) : (
    <noscript />
  );
