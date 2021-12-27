import React from "react";
export const Footer = () => {
  const footerContent = {
    altLink: "Linked In Page",
    name: "Nikolaos Floros",
    linkedinLink: "https://www.linkedin.com/in/nfloros/",
    test: "Front-End Technical Test",
    githubRepo: "https://github.com/Niko-7/search-box-tech-test",
    githubAlt: "Github Repo Source Code Page",
    sourceCode: "View Source Code",
    information: "Information Footer",
  };

  return (
    <footer aria-label={footerContent.information}>
      <div className="information-footer">
        <a
          href={footerContent.linkedinLink}
          data-alt={footerContent.altLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{footerContent.name}</p>
        </a>
        <p className="user-information">{footerContent.test}</p>
        <br />
        <a
          href={footerContent.githubRepo}
          data-alt={footerContent.githubAlt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{footerContent.sourceCode}</p>
        </a>
      </div>
    </footer>
  );
};
