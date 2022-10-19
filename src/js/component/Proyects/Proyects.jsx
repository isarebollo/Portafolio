import React from "react";

import PlayDating from "./../../../img/Playdating.jpg";
import Semaforo from "./../../../img/Semaforo.jpg";
import StarWars from "./../../../img/StarWars.jpg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import "./../../component/Proyects/Proyects.css";

export const Proyects = () => {
  return (
    <>
      <div className="section004">
        <h2 className="text-center title_h2_proyectos">Proyectos</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card text-center">

                <img src={PlayDating} className="card-img-top" alt="Proyecto Playdating"></img>
                <div className="card-body">
                  <h5 className="card-title">PlayDating</h5>
                  <p className="card-text">Web de Eventos Infantiles en los que pasar un rato divertido.</p>
                  <a href="https://play-dating-1.herokuapp.com"  target="_blank" rel="noreferrer">
                    <button  className="btn btn-outline-info"> <i id="btnicon"> <AiOutlineEye /></i> </button>
                  </a>
                  <a href="https://github.com/isarebollo/PlayDating"  target="_blank" rel="noreferrer">

                    <button  className="btn btn-outline-info"> <i id="btnicon"><BsGithub /></i></button></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center">
                <img src={StarWars} className="card-img-top" alt="Proyecto StarWars"></img>
                <div className="card-body">
                  <h5 className="card-title">STARWARS DATABANK</h5>
                  <p className="card-text">Informacion de los personajes, vehiculos y planetas de la serie.</p>
                  {/*<a href=""  target="_blank" rel="noreferrer">

                     <button  className="btn btn-outline-info"> <i id="btnicon"> <AiOutlineEye /></i> </button> 
                  </a>*/}
                  
                  <a href="https://github.com/isarebollo/StarWars-DataBank"  target="_blank" rel="noreferrer">
                    <button  className="btn btn-outline-info"> <i id="btnicon"><BsGithub /></i></button>
                  </a>

                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center">
                <img src={Semaforo} className="card-img-top" alt="Proyecto Semáforo"></img>
                <div className="card-body">
                  <h5 className="card-title">TRAFFIC LIGHT</h5>
                  <p className="card-text">Semafóro creado con ReactJS que cambia de color de varias maneras.</p>
                  <a href="https://trafficlight-semaforo.netlify.app/"  target="_blank"rel="noreferrer">
                    <button  className="btn btn-outline-info"> <i id="btnicon"> <AiOutlineEye /></i> </button>
                  </a>
                  <a href="https://github.com/isarebollo/Traffic-Light"  target="_blank" rel="noreferrer">
                    <button  className="btn btn-outline-info"> <i id="btnicon"><BsGithub /></i></button>

                  </a>

                </div>
              </div>
            </div>
          </div>


        </div>

      </div>

    </>
  );
};


