import React from "react";

import "../../component/Navbar/Navbar.css";


export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="text" href="/Portafolio/" aria-current="page">

            <strong> {"<"}IR{"/>"} </strong>
          </a>

          <a className="text" href="/Portafolio/sobremi">
            <strong> Sobre mi</strong>
          </a>
          <a className="text" href="/Portafolio/experienciayformacion">
            <strong> Formación y Experiencia</strong>
          </a>
          <a className="text" href="/Portafolio/habilidades">
            <strong> Habilidades</strong>
          </a>

          <a className="text" href="/Portafolio/proyectos">
            <strong> Proyectos</strong>
          </a>

          <a className="text" href="/Portafolio/contacto">
            <strong> Contacto</strong>
          </a>
        </div>
      </nav>
    </>
  );
};
