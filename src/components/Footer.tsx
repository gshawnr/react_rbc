import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import GridItem from "./GridItem";
import cdicImage from "../assets/images/cdic-digital-symbol-en.svg";

import "./Footer.css";

function Footer() {
  const socialIconStyle = {
    color: "#fff",
    backgroundColor: "transparent",
    height: "27px",
    width: "27px",
    marginLeft: "25px",
  };
  return (
    <footer>
      <div className="ft">
        <div className="ft-grid">
          <div className="gi-container">
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
          <div className="gi-container">
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
          <div className="gi-container">
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
          <div className="gi-container">
            <GridItem
              headerText="Protecting Your Money"
              headerlinks={[
                {
                  linkText: "Canada Deposit Insurance Corporation Member Info",
                },
              ]}
              itemImage={cdicImage}
            />
          </div>
        </div>
      </div>
      <div className="fb">
        <div className="fb-container">
          <div className="fb-left">
            <p>
              Royal Bank of Canada Website,
              <span className="fb-nowrap"> &copy; 1995-2023</span>
            </p>
            <p className="fb-left-links fb-nowrap">
              <a className="fb-left-link" href="#">
                Legal
              </a>
              {" | "}{" "}
              <a className="fb-left-link" href="#">
                Accessibility
              </a>{" "}
              {" | "}
              <a className="fb-left-link" href="#">
                Privacy & Security
              </a>
              {" | "}
              <a className="fb-left-link" href="#">
                Interest Based Advertising
              </a>
            </p>
          </div>
          <div className="fb-right">
            <ul className="fb-social-links">
              <li key="facebook">
                <a href="#" aria-label="facebook">
                  <FacebookIcon style={socialIconStyle} />
                </a>
              </li>
              <li key="instagram">
                <a href="#" aria-label="instagram">
                  <InstagramIcon style={socialIconStyle} />
                </a>
              </li>
              <li key="twitter">
                <a href="#" aria-label="twitter">
                  <TwitterIcon style={socialIconStyle} />
                </a>
              </li>
              <li key="youtube">
                <a href="#" aria-label="youtube">
                  <YouTubeIcon style={socialIconStyle} />
                </a>
              </li>
              <li key="linkedin">
                <a href="#" aria-label="linkedin">
                  <LinkedInIcon style={socialIconStyle} />
                </a>
              </li>
            </ul>
            <div className="fb-to-top">
              <a className="fb-to-top-link" href="#top" aria-label="top">
                <ArrowUpwardIcon sx={{ fontSize: 25, marginLeft: "20px" }} />
                <p>Top</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
