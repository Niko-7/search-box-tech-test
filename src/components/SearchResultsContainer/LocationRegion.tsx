import React from "react";

interface Props {
  region: string;
  country: string;
  city: string;
}

export const LocationRegion = ({ region, country, city }: Props) =>
  region || country || city ? (
    <div className="search-results__location-region">
      {[city, region, country].filter((each) => !!each).join(", ")}
    </div>
  ) : (
    <noscript />
  );
