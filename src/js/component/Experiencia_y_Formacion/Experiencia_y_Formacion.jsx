import React from "react";
import "../../component/Experiencia_y_Formacion/Experiencia_y_Formacion.css";

import { GiBookmarklet } from "react-icons/gi";
import {MdWork} from "react-icons/md";


export const Experiencia_y_Formacion = () => {
  return (
    <>
      <div className="section005">
        <div className="container ">
          <h2 className="title_h2_datos"> Formación </h2>
          <div className="col-12 data">
            <div className="col-6  ">
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
            <div className="col-6 ">
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
            <div className="col-6"> 
           
              <h2 className="title_h2_datos "> Experiencia </h2>
              <div className="formacion_data">
                <h3> <i>
                    <MdWork />
                  </i>{" "}
                  <u className="title"> Técnico en Farmacia y Parafarmacia,</u>
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
    </>
  );
};
