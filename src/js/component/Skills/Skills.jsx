import React from "react";
import "../../component/Skills/Skills.css";


const Skills = () => {
  return (
    <>
      <div className="section003">
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
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="70"
                  height="70"
                />
              </div>
              <div className="iconsSkills">
                {/* css */}

                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="70"
                  height="70"
                />
              </div>
              <div className="iconsSkills">
                {/* Js */}

                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="70"
                  height="70"
                />
              </div>

              <div className="iconsSkills">
                {/* REACTJS */}

                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="70"
                  height="70"
                />
              </div>

              <div className="iconsSkills">
                {/* BOOTSTRAP */}

                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="70"
                  height="70"
                />
              </div>

              <div className="iconsSkills">
                {/* JEST */}

                <img
                  src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg"
                  alt="jest"
                  width="70"
                  height="70"
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
                  src="https://www.vectorlogo.zone/logos/python/python-vertical.svg"
                  alt="python"
                  width="70"
                  height="70"
                />
              </div>
              <div className="iconsSkills">
                {/* FLASK */}

                <img
                  src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-ar21.svg"
                  alt="flask"
                  width="70"
                  height="70"
                />
              </div>

              <div className="iconsSkills">
                {/* JEST */}{" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="70"
                  height="70"
                />
              </div>
              <div className="iconsSkills">
                {/*Postgres  */}

                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="70"
                  height="70"
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
                  src="https://www.vectorlogo.zone/logos/github/github-ar21.svg"
                  alt="github"
                  width="70"
                  height="70"
                />
              </div>
              <div className="iconsSkills">
                {/* GIT */}

                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
                  alt="git"
                  width="70"
                  height="70"
                />
              </div>
              <div className="iconsSkills">
                {/* Gitpod */}

                <img
                  src="https://www.vectorlogo.zone/logos/gitpodio/gitpodio-ar21.svg"
                  alt="git"
                  width="70"
                  height="70"
                />
              </div>
              <div className="iconsSkills">
                {/* Vscode */}

                <img
                  src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg"
                  alt="git"
                  width="70"
                  height="70"
                />
              </div>

              <div className="iconsSkills">
                {/* Insomnia */}

                <img
                  src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png"
                  alt="heroku"
                  width="60"
                  height="60"
                />
              </div>
              <div className="iconsSkills">
                {/* Heroku */}

                <img
                  src="https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg"
                  alt="heroku"
                  width="70"
                  height="70"
                />
              </div>
              <div className="iconsSkills">
                {/* Postman */}

                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg"
                  alt="postman"
                  width="70"
                  height="70"
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
