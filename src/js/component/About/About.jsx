import React from "react";
import "../../component/About/About.css";


const About = () => {
  return (
    <>
      <div className="section002">
        <h2 className="title_h2">Sobre mí</h2>
        
        <div className="container_about">
          <div className="div_info">
            <p className="info1">
              <strong>
                {" "}
                <u> Programadora Full Stack</u>
              </strong>
            </p>
            <p className="text_info">
              Después de trabajar como Técnico de Farmacia 👩🏽‍💼, me enfrento a
              este nuevo reto, trabajar en el mundo de la tecnología, el cual
              siempre me ha llamado la atención.{" "}
            </p>

            <p className="text_info">
              En el Bootcamp de 4Geeks Academy, he aprendido{" "}
              <strong>
                HTML, CSS, Bootstrap, JavaScript, React, Flux, Python, Flask,
                SQLAlchemy y Git
              </strong>{" "}
            </p>
            <p className="text_info">
              Me considero una
              <strong>
                {" "}
                persona comprometida, honesta, responsable, con mucha curiosidad{" "}
              </strong>
              en saber como funciona todo, muchas ganas de aprender y seguir
              profundizando en los conocimientos que ya poseo
            </p>
            <p className="text_info">
              Estoy en búsqueda de mi primera{" "}
              <strong>oportunidad laboral IT</strong>, mientras tanto, estoy
              reforzándo mis conocimientos creando pequeños{" "}
              <strong>proyectos propios.</strong>
            </p>
          </div>

          <div>
            <img
              className="emoji"
              src="https://img1.freepng.es/20180328/kpw/kisspng-emoji-heart-iphone-love-emoji-5abb33e56ab9c3.3783402715222179574372.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
