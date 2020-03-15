import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = (): JSX.Element => (
  <div style={{ textAlign: "center", padding: "10px 0", fontSize: "20px" }}>
    <p>
      <a
        href="https://twitter.com/kyoncy_site"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Icon name="twitter" style={{ color: "#1da1f2" }} />
        @kyoncy_site
      </a>
    </p>
  </div>
);

export default Footer;
