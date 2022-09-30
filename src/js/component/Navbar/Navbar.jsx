import React from "react";

import "../../component/Navbar/Navbar.css";


export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="text" href="/" aria-current="page">
            
             <strong> {"<"}IR{"/>"} </strong> 
          </a>

          <a className="text" href="/sobremi">
          <strong> Sobre mi</strong>
          </a>
          <a className="text" href="/experienciayformacion">
          <strong> Formación y Experiencia</strong>
          </a>
          <a className="text" href="/habilidades">
          <strong> Habilidades</strong>
          </a>

          <a className="text" href="/proyectos">
          <strong> Proyectos</strong>
          </a>

          <a className="text" href="/contacto">
          <strong> Contacto</strong>
          </a>
        </div>
      </nav>
    </>
  );
};
