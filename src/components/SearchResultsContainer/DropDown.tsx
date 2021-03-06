import React from "react";
import { DestinationType } from "./DestinationType";
import { LocationRegion } from "./LocationRegion";
import { Locations } from "../../types/locationData";

export const DropDown: React.FC<{
  locations: Array<Locations>;
}> = ({ locations }) => {
  return (
    <ol
      className="search-results"
      role="listbox"
      aria-label="Search Result List"
    >
      {locations.map((location, index) => {
        const key = `pickupLocationResultsItem-${index}`;
        return (
          <li
            id={key}
            key={key}
            className="search-results__item"
            role="option"
            aria-selected="false"
          >
            {location.placeType && (
              <DestinationType destinationKind={location.placeType} />
            )}
            <div className="search-result-column">
              <div className="search-results__location-name">
                {location.iata
                  ? `${location.name} (${location.iata})`
                  : location.name}
              </div>
              <LocationRegion
                region={location.region}
                country={location.country}
                city={location.city}
              />
            </div>
          </li>
        );
      })}
    </ol>
  );
};
