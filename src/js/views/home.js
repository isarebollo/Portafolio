import React from "react";
import About from "../component/About/About.jsx";
import { Header } from "../component/Header/Header.jsx";

import "../../styles/home.css";

import Skills from "../component/Skills/Skills.jsx";
import { Proyects } from "../component/Proyects/Proyects.jsx";
import { Contact } from "../component/Contact/Contact.jsx";
import { Experiencia_y_Formacion } from "../component/Experiencia_y_Formacion/Experiencia_y_Formacion.jsx";

export const Home = () => {
  return (
    <>

      <Header />
      <About />
      <Skills />
      <Experiencia_y_Formacion />
      <Proyects />
      <Contact />
    </>
  );
};
