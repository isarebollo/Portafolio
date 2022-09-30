import React from "react";

import playdating from "../../../img/Playdating.jpg";
// import Starwars from "../../../img/starwars.jpg";
import "../../component/Proyects/Proyects.css";

export const Proyects = () => {
  return (
    <>
      <div className="section004">
        <h2 className="text-center title_h2_proyectos">Proyectos</h2>

        <div className="container proyects col-12 ">
          <div className="col-6">
            <div className="card">
              <img src={playdating} />
              <div className="card-body">
                <h5 className="card-title">PLAYDATING</h5>
                <p className="card-text">WebApp de eventos infantiles</p>

                <a href="https://playdating2.herokuapp.com">
                  <button className="btn btn-info">APP</button>
                </a>
                <a href="https://github.com/isarebollo/Child-WebApp-FinalProyect">
                  <button className="btn btn-info">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-6">
          <div className="card">
            <img src={Starwars} />
            <div className="card-body">
              <h5 className="card-title">PLAYDATING</h5>
              <p className="card-text">WebApp de eventos infantiles</p>

              <a href="https://playdating2.herokuapp.com">
                <button className="btn btn-info">APP</button>
              </a>
              <a href="https://github.com/isarebollo/Child-WebApp-FinalProyect">
                <button className="btn btn-info">GitHub</button>
              </a>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};