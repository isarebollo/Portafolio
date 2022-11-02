import React from "react";


import PlayDating from "./../../../img/Playdating.jpg";
import Semaforo from "./../../../img/Semaforo.jpg";
import StarWars from "./../../../img/StarWars.jpg";
import TodoList from "./../../../img/TodoList.jpg";
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

                  <div className="row">
                    <div className="d-flex flex-row justify-content-center ms-1">
                      <div className="me-3">
                        <a href="https://play-dating-1.herokuapp.com/" target="_blank" rel="noreferrer">
                          <button className="btn btn-outline-info"> <i> <AiOutlineEye /></i> </button>
                        </a>
                      </div>
                      <div >
                        <a href="https://github.com/isarebollo/PlayDating" target="_blank" rel="noreferrer">
                          <button className="btn btn-outline-info"> <i><BsGithub /></i></button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center">
                <img src={StarWars} className="card-img-top" alt="Proyecto StarWars"></img>
                <div className="card-body">
                  <h5 className="card-title">STARWARS DATABANK</h5>
                  <p className="card-text">Informacion de los personajes, vehiculos y planetas de la serie.</p>

                  <div className="row">
                    <div className="d-flex flex-row justify-content-center">

                      <div >
                        <a href="https://github.com/isarebollo/StarWars-DataBank" target="_blank" rel="noreferrer">
                          <button className="btn btn-outline-info"> <i ><BsGithub /></i></button>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
         

            <div className="col">
              <div className="card text-center">
                <img src={TodoList} className="card-img-top" alt="Proyecto Semáforo"></img>
                <div className="card-body">
                  <h5 className="card-title">TODO LIST</h5>
                  <p className="card-text">Lista con las tareas pendientes que tengas por hacer.</p>

                  <div className="row">
                    <div className="d-flex flex-row justify-content-center">
                      <div className="me-3">
                        {/* <a href="https://trafficlight-semaforo.netlify.app/" target="_blank" rel="noreferrer">
                          <button className="btn btn-outline-info"> <i> <AiOutlineEye /></i> </button>
                        </a> */}
                      </div>
                      <div >
                        <a href="https://github.com/isarebollo/TodoList" target="_blank" rel="noreferrer">
                          <button className="btn btn-outline-info"> <i><BsGithub /></i></button>

                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-center">
                <img src={Semaforo} className="card-img-top" alt="Proyecto Semáforo"></img>
                <div className="card-body">
                  <h5 className="card-title">TRAFFIC LIGHT</h5>
                  <p className="card-text">Semafóro creado con ReactJS que cambia de color de varias maneras.</p>

                  <div className="row">
                    <div className="d-flex flex-row justify-content-center">
                      <div className="me-3">
                        <a href="https://trafficlight-semaforo.netlify.app/" target="_blank" rel="noreferrer">
                          <button className="btn btn-outline-info"> <i> <AiOutlineEye /></i> </button>
                        </a>
                      </div>
                      <div >
                        <a href="https://github.com/isarebollo/Traffic-Light" target="_blank" rel="noreferrer">
                          <button className="btn btn-outline-info"> <i><BsGithub /></i></button>

                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>

      </div>

    </>
  );
};


