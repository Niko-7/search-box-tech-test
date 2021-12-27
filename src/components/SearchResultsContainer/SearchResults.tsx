import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { DropDown } from "./DropDown";
import { UseGet } from "../../queries/UseGet";
import { UseDebounce } from "../../queries/UseDebounce";

const override = css`
  position: absolute;
  right: 11px;
  top: calc(50% - 9px);
`;

interface Props {
  placeholder: string;
}

export const SearchResults = ({ placeholder }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = UseDebounce({ searchTerm });
  const { data, isLoading } = UseGet(debouncedSearchTerm);
  
  try {
    return (
      <div className="searchbox-main-container">
        <div className="searchwidget__input-container">
          <span
            className="icon"
            data-testid="icon-container"
            aria-hidden="true"
            role="presentation"
          >
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56zm1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65c2.12 4.987 7.881 7.312 12.87 5.192 4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06z"></path>
            </svg>
          </span>
          <input
            type="text"
            className="search-input"
            autoComplete="off"
            placeholder={placeholder}
            aria-label="Pick-up Location"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <ClipLoader
            css={override}
            size={15}
            color={"#1879ca"}
            loading={isLoading}
          />
        </div>
        {!isLoading && data && <DropDown locations={data} />}
      </div>
    );
  } catch (error) {
    return <div className="error">Error: `${error}`</div>;
  }
};
