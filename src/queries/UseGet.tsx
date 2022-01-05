import { useEffect, useState } from "react";
import { Locations } from "../types/locationData";
import { isValidLocation } from "../queries/utils/isValidLocation";
const axios = require("axios");

export const UseGet = (location: string) => {
  const [data, setData] = useState<Array<Locations> | null>(null);
  const rentalcarsEndpoint = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=`;

  useEffect(() => {
    if (location && location.length > 1 && isValidLocation(location)) {
      axios
        .get(rentalcarsEndpoint + location)
        .then((response: { data: { results: { docs: [] } } }) => {
          setData(response.data.results.docs);
        });
    } else if (location.length === 1) {
      setData([]);
    } else {
      setData(null);
    }
  }, [location]);
  return { data };
};
