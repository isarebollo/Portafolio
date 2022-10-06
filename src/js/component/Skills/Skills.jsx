import React from "react";
import "../../component/Skills/Skills.css";


const Skills = () => {
  return (
    <>
      <div className="section003 mx-auto">
        <h2 className="title_h2_skill"> Habilidades</h2>
        <div className="container ">
          <h6 className="h6_info">
            Estas son las tecnologias y herramientas con las que trabajo y me siento más cómoda:
          </h6>

          <div className="col-12">
            <div>
              {" "}
              <h2 className="Skillh2">
                {" "}
                <u>Front </u>{" "}
              </h2>
            </div>

            <div className="Skills SkillFronted col-4">
              <div className="iconsSkills">
                {/* html */}

                <img
                  src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                  alt="html5"

                />
              </div>
              <div className="iconsSkills">
                {/* css */}

                <img
                  src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                  alt="css3"

                />
              </div>
              <div className="iconsSkills">
                {/* Js */}

                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"

                />
              </div>

              <div className="iconsSkills">
                {/* REACTJS */}

                <img
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                  alt="react"

                />
              </div>

              <div className="iconsSkills">
                {/* BOOTSTRAP */}

                <img
                  src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
                  alt="bootstrap"

                />
              </div>

              <div className="iconsSkills">
                {/* JEST */}

                <img
                  src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                  alt="jest"

                />
              </div>
            </div>
            <div>
              {" "}
              <h2 className="Skillh2">
                <u>Back</u>{" "}
              </h2>
            </div>
            {/* ------------------------------------------------------------------BACK */}
            <div className="Skills SkillsBack col-4">
              <div className="iconsSkills">
                {/* PYTHON */}

                <img
                  src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                  alt="python"

                />
              </div>
              <div className="iconsSkills">
                {/* FLASK */}

                <img
                  src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
                  alt="flask"

                />
              </div>

              <div className="iconsSkills">
                {/*MYSQL */}{" "}
                <img
                  src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
                  alt="mysql"

                />
              </div>
              <div className="iconsSkills">
                {/*Postgres  */}

                <img
                  src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                  alt="postgresql"

                />
              </div>
            </div>
            <div>
              <h2 className="Skillh2">
                <u> Herramientas</u>
              </h2>
            </div>
            <div className=" Skills herramientas col-4">
              <div className="iconsSkills">
                {/* github */}
                <img
                  src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                  alt="github"

                />
              </div>
              <div className="iconsSkills">
                {/* GIT */}

                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"

                />
              </div>
              <div className="iconsSkills">
                {/* Gitpod */}

                <img
                  src="https://www.vectorlogo.zone/logos/gitpodio/gitpodio-icon.svg"
                  alt="gitpod"

                />
              </div>
              <div className="iconsSkills">
                {/* Vscode */}

                <img
                  src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
                  alt="git"

                />
              </div>

              <div className="iconsSkills">
                {/* Insomnia */}

                <img
                  src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png"
                  alt="insomnia"

                />
              </div>
              <div className="iconsSkills">
                {/* Heroku */}

                <img
                  src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
                  alt="heroku"

                />
              </div>
              <div className="iconsSkills">
                {/* Postman */}

                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"

                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Skills;
