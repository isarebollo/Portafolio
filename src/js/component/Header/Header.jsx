import React from "react";
import "../../component/Header/Header.css";


export const Header = () => {
  return (
    <>
      <div className="section001 ">
        <div className="container">
          <div className="text-aling">
            <h1 className=" header_h1">
              {"<"}Isabel Rebollo{"/>"}
            </h1>

          </div>
          <h2 className="header_h2">
            <span className="span1">Desarrolladora Full-stack</span>
            <br />
            <span className="span&">&</span>
            <br />
            <span className="span2">Técnico en farmacia</span>
          </h2>
          <div className="contact col-12">
            <div className="iconsContact">
              <img
                src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg"
                alt=""
                width="100"
                height="100"
              />
            </div>
            <div className="iconsContact">
              <a href="/Portafolio/contacto">
                <img
                  src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg"
                  alt="gmail"
                  width="100"
                  height="100"
                />
              </a>
            </div>
            <div className="iconsContact">
              <img
                src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                alt="github"
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
