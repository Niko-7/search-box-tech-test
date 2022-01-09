const axios = require("axios");
export const UseGet = (location: string) => {
  const rentalcarsEndpoint = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=`;
  return axios
    .get(rentalcarsEndpoint + location)
    .then((response: { data: { results: { docs: [] } } }) => {
      return response.data.results.docs;
    });
};
