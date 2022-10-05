import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar/Navbar.jsx";
import { Footer } from "./component/Footer/Footer.jsx";
import { Header } from "./component/Header/Header.jsx";
import About from "./component/About/About.jsx";
import Skills from "./component/Skills/Skills.jsx";
import { Proyects } from "./component/Proyects/Proyects.jsx";
import { Contact } from "./component/Contact/Contact.jsx";
import { Experiencia_y_Formacion } from "./component/Experiencia_y_Formacion/Experiencia_y_Formacion.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  // const basename = process.env.BASENAME || "/Portafolio";
  const basename = "/Portafolio";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Header />} path="/cabecera" />
            <Route element={<About />} path="/sobremi" />
            <Route element={<Skills />} path="/habilidades" />
            <Route element={<Proyects />} path="/proyectos" />
            <Route element={<Contact />} path="/contacto" />
            <Route element={<Experiencia_y_Formacion />} path="/experienciayformacion" />
            <Route element={<Home />} path="/" />

            <Route element={<h1>Not found!</h1>} />
          </Routes>
           <Footer /> 
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
