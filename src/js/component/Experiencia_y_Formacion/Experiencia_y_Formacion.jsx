import React from "react";
import "../../component/Experiencia_y_Formacion/Experiencia_y_Formacion.css";

import { GiBookmarklet } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";

import CertificadoAngularBasico from "./../../../img/Certificado Angular Basico.jpg";
import CertificadoJavaBasico from "./../../../img/Certificado Java Basico.jpg";
import CertificadoScrum from "./../../../img/Certifiado Scrum.png";
import Certificado4Geeks from "./../../../img/Certificado Bootcamp 4geeks.jpg";

export const Experiencia_y_Formacion = () => {
  return (
    <div className="section005">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title_h2_datos text-center mb-4">Formación</h2>
            <div className="row">
              <div className="col-md-6">
                {/* ... Bloque de formación ... */}
                <div className="formacion_data">
                  <h3>
                    <i>
                      <GiBookmarklet />
                    </i>{" "}
                    <u className="title"> Desarrolladora Full-Stack</u>
                  </h3>
                  <h6>2022 - 4Geeks Academy,Madrid</h6>
                  <p>
                    <span>
                      <strong> Tecnologías aprendidas</strong>
                    </span>
                    <ul>
                      <li>
                        Front-End: HTML5 | CSS3 | JavaScript | ReactJS| Bootstrap
                        | Jest
                      </li>
                      <li>
                        Back-End: Python | Flask | SQL | SQLalchemy | mySQL |
                        PostgreSQL
                      </li>
                    </ul>
                    <span>
                      <strong>Herramientas</strong>
                    </span>
                    <ul>
                      <li> Git | Github | Gipod | VS Code | Trello | Insomnia | Postman | Heroku </li>
                    </ul>
                  </p>
                </div>

              </div>
              <div className="col-md-6">
                {/* ... Bloque de CGM Técnico en Farmacia ... */}
                <div className="formacion_data">
                  <h3>
                    <i>
                      <GiBookmarklet />
                    </i>{" "}
                    <u className="title">CGM Técnico en Farmacia</u>
                  </h3>
                  <h6>
                    2015/2017 - IES Jaime Ferrán Clúa, San Fernando de Henares
                  </h6>
                  <p>
                    <ul>
                      <li>
                        Asistir en la dispensación de productos farmacéuticos y
                        parafarmaceuticos.
                      </li>
                      <li>
                        Realizar la venta de productos parafarmacéuticos,
                        fomentando la promoción de la salud.
                      </li>

                      <li>
                        Asistir en la elaboración de fórmulas magistrales,
                        preparados oficinales, dietéticos y cosméticos.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h2 className="title_h2_datos text-center mb-4">Cursos y Certificaciones</h2>
            {/* ... Primer bloque de cursos y certificaciones ... */}
            <div className="row">

              <div className="col-6">

                <div className="formacion_data ">
                  <h3> <i>
                    <TbCertificate />
                  </i>{" "}
                    <u className="title">Angular Básico</u>
                  </h3>
                  <h6>05-2023 - OpenBootcamp </h6>
                  <img className="img-fluid img-small" src={CertificadoAngularBasico} alt="Certificado Angular Básico" />
                </div>
              </div>
              <div className="col-6">

                <div className="formacion_data">
                  <h3> <i>
                    <TbCertificate />
                  </i>{" "}
                    <u className="title">Java Básico</u>
                  </h3>
                  <h6>04-2023 - OpenBootcamp </h6>
                  <img className="img-fluid img-small" src={CertificadoJavaBasico} alt="Certificado Java Básico" />
                </div>
              </div>
            </div>
            {/* ... Segundo bloque de cursos y certificaciones ... */}
            <div className="row">
              <div className="col-6">

                <div className="formacion_data ">
                  <h3> <i>
                    <TbCertificate />
                  </i>{" "}
                    <u className="title">SCRUM</u>
                  </h3>
                  <h6>09-2022 - ScrumStudy </h6>
                  <img className="img-fluid img-small" src={CertificadoScrum} alt="Certificado Scrum" />
                </div>
              </div>
              <div className="col-6">

                <div className="formacion_data ">
                  <h3> <i>
                    <TbCertificate />
                  </i>{" "}
                    <u className="title">Full Stack Software Development</u>
                  </h3>
                  <h6>08-2022 - 4Geeks Academy </h6>
                  <img className="img-fluid img-small" src={Certificado4Geeks} alt="Certificado 4GeeksAcademy" />
                </div>
              </div>
            </div>

          </div>

          <div className="col-12">
            <h2 className="title_h2_datos text-center mb-4">Experiencia Profesional</h2>
            <div className="row">
              <div className="col-md-6">
                {/* ... Bloque de Técnico en Farmacia y Parafarmacia ... */}
                <div className="formacion_data ">
                  <h3> <i>
                    <MdWork />
                  </i>{" "}
                    <u className="title"> Técnico en Farmacia y Parafarmacia.</u>
                  </h3>
                  <h6>2017/2021 - Farmacia María Casas Galvez </h6>
                  <p>
                    <ul>
                      <li>Atención al paciente diariamente.</li>
                      <li>
                        Dispensación de medicamentos y productos de parafarmacia.
                      </li>
                      <li>
                        Control del 70% del almacén con software Farmatic y
                        distintas tareas administrativas.
                      </li>
                      <li>
                        Asistir en la realización de análisis clínicos elementales
                        y normalizados {"(glucosa y tensión arterial)"}
                      </li>
                      <li>
                        Colaborar en la promoción, protección de la salud,
                        prevención de enfermedades y educación sanitaria
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
