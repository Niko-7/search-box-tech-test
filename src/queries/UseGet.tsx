import { useEffect, useState } from "react";
import { Locations } from "../types/locationData";
import { isValidLocation } from "../queries/utils/isValidLocation";
const axios = require("axios");

export const UseGet = (location: string) => {
  const [data, setData] = useState<Array<Locations> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const rentalcarsEndpoint = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=`;

  useEffect(() => {
    setIsLoading(true);
    location && location.length > 1 && isValidLocation(location)
      ? axios
          .get(rentalcarsEndpoint + location)
          .then((response: any) => {
            setData(response.data.results.docs);
            setIsLoading(false);
            setError(null);
          })
          .catch((error: any) => {
            setIsLoading(false);
            setError(error);
          })
      : setData(null);
    setIsLoading(false);
  }, [location]);
  return { data, isLoading, error };
};
