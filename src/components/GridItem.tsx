import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "./GridItem.css";

interface GridItemProps {
  headerText: string;
  headerlinks?: {
    linkText: string;
    // href not included - demo only
  }[];
  footerText?: string;
  footerlinks?: [
    {
      linkText: string;
      // href not included - demo only
    }
  ];
  itemImage?: string;
}

function GridItem({
  headerText,
  headerlinks,
  footerText,
  footerlinks,
  itemImage,
}: GridItemProps) {
  return (
    <>
      <h6 className="gi-header gi-nowrap">{headerText}</h6>
      <ul className="gi-ul">
        {headerlinks?.map((thisLink, index) => {
          return (
            <li key={index} className="gi-li">
              <ChevronRightIcon />
              <a href="#">{thisLink.linkText}</a>
            </li>
          );
        })}
      </ul>
      {itemImage ? (
        <a href="#" style={{ textAlign: "left" }}>
          <img
            src={itemImage}
            aria-label="CDIC logo"
            style={{ width: "139px" }}
          />
        </a>
      ) : null}
      {footerText ? (
        <>
          <h6 className="gi-footer">{footerText}</h6>
          <ul className="gi-ul">
            {footerlinks?.map((thisLink, index) => {
              return (
                <li key={index} className="gi-li">
                  <ChevronRightIcon />
                  <a href="#">{thisLink.linkText}</a>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </>
  );
}

export default GridItem;
