import React from "react";
import { DestinationType } from "./DestinationType";
import { LocationRegion } from "./LocationRegion";
import { Locations } from "../../types/locationData";

export const DropDown: React.FC<{
  locations: Array<Locations>;
  parentCallback: any;
}> = ({ locations, parentCallback }) => {
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
            onClick={() => {
              const newDestination = `${location.name}, ${location.region}, ${location.city}`;
              parentCallback(newDestination);
            }}
          >
            {location.bookingId && (
              <DestinationType destinationKind={location.bookingId} />
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
