import React from "react";

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
      <h1 className="gi-header">{headerText}</h1>
      <ul className="gi-ul">
        {headerlinks?.map((thisLink) => {
          return (
            <li className="gi-li">
              <a href="#">{thisLink.linkText}</a>
            </li>
          );
        })}
      </ul>
      {footerText ? (
        <>
          <h1 className="gi-footer">{footerText}</h1>
          <ul className="gi-ul">
            {footerlinks?.map((thisLink) => {
              return (
                <li className="gi-li">
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
