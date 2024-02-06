import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer--section">
      <FaTwitter className="footer-icons" />
      <FaFacebook className="footer-icons" />
      <FaInstagramSquare className="footer-icons" />
      <FaGithub className="footer-icons" />
    </div>
  );
};

export default Footer;
