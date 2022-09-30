import React from "react";
import "../../component/Footer/Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="contact">
      <div className="iconsContact">
        <a href="https://www.linkedin.com/in/isabelrebollo/">
          <BsLinkedin />
        </a>
      </div>
      <div className="iconsContact">
        <GoMail />
      </div>
      <div className="iconsContact">
        <a href="https://github.com/isarebollo">
          <FiGithub />
        </a>
      </div>
    </div>
  </footer>
);
