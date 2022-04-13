import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <div className="footer">
      <h2>© 2022 Makers</h2>
      <IconButton href="https://www.instagram.com/" style={{ color: "white" }}>
        <InstagramIcon />
      </IconButton>
      <IconButton href="https://ru-ru.facebook.com/" style={{ color: "white" }}>
        <FacebookIcon />
      </IconButton>
      <IconButton href="https://twitter.com/twi" style={{ color: "white" }}>
        <TwitterIcon />
      </IconButton>
      <IconButton href="https://ru.linkedin.com/" style={{ color: "white" }}>
        <LinkedInIcon />
      </IconButton>
      <IconButton href="https://www.google.com/" style={{ color: "white" }}>
        <GoogleIcon />
      </IconButton>
    </div>
  );
};

export default Footer;
