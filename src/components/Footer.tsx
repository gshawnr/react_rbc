import React from "react";

import GridItem from "./GridItem";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="ft-grid">
          <div>
            <GridItem
              headerText="About RBC"
              headerlinks={[
                { linkText: "Investor Relations" },
                { linkText: "Media Newsroom" },
                { linkText: "Economics" },
              ]}
              footerText="Work at RBC"
              footerlinks={[{ linkText: "Careers at RBC" }]}
            />
          </div>
          <div>
            <GridItem
              headerText="Customer Service"
              headerlinks={[
                { linkText: "Apply Online" },
                { linkText: "Branch & ATM Locator" },
                { linkText: "Voluntary Codes & Public Commitments" },
                { linkText: "1-800-769-2511" },
              ]}
            />
          </div>
          <div>
            <GridItem
              headerText="Daily Numbers"
              headerlinks={[
                { linkText: "Foreign Exchange" },
                { linkText: "Rates" },
                { linkText: "Mortgage Rates" },
                { linkText: "Mutual Funds" },
              ]}
            />
          </div>
          <div>
            <GridItem
              headerText="Protecting Your Money"
              headerlinks={[
                {
                  linkText: "Canada Deposit Insurance Corporation Member Info",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
}

export default Footer;
