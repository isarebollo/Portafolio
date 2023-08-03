import React from "react";
import "../../component/About/About.css";



const About = () => {
  return (
    <>
      <div className="section002">
        <h2 className="title_h2">Sobre mí</h2>


        <div className="div_info col-8">

          <p className="text_info">
            Después de una etapa como <strong>Técnico de Farmacia</strong> , decidí dar un giro hacia mi verdadera pasión: la tecnología. <br />
            Mi recorrido me llevó al <strong>Bootcamp de 4Geeks Academy</strong> , donde me sumergí en un intensivo programa de formación que abarcó una amplia gama de tecnologías y herramientas.
          </p>

          <p className="text_info">
            Durante mi tiempo en el bootcamp, adquirí un sólido conocimiento de lenguajes de programación como <strong>HTML,CSS, JavaScript y Python</strong>, así como frameworks como <strong>React y  Flask</strong> . <br />
            Además, aprendí a diseñar y desarrollar aplicaciones web modernas, utilizando las mejores prácticas de la industria.
          </p>
          {/* <p> He utilizado <strong>Git</strong> como control de versiones y  <strong>Vs Code</strong> para trabajar.</p> */}
          <p className="text_info">
            Mi curiosidad innata y mi deseo de comprender en profundidad cómo funcionan las cosas me impulsan constantemente a <strong> buscar soluciones creativas y a mejorar mis habilidades técnicas</strong>. Mi enfoque comprometido y mi ética laboral sólida me permiten <strong>abordar proyectos con responsabilidad y entregar resultados de calidad </strong> . Además, mi <strong>actitud de aprendizaje continuo</strong>  me impulsa a seguir perfeccionando mis conocimientos y afrontar nuevos desafíos con entusiasmo.
          </p>
          <p className="text_info">
            Actualmente, estoy en busca de mi <strong>primera oportunidad laboral</strong>  en el campo de la tecnología, donde pueda aplicar mis habilidades y contribuir al crecimiento de un equipo innovador. Mientras tanto, sigo <strong>fortaleciendo mis conocimientos</strong> a través de cursos de formación y trabajando en emocionantes proyectos personales.

          </p>
          <p className="text_info" >
            Si estás buscando a una desarrolladora con un deseo ardiente de crecimiento, ¡estoy lista para unirme a tu equipo y marcar juntos la diferencia!

          </p>
        </div>



      </div>

    </>
  );
};

export default About;
