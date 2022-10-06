import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../../component/Contact/Contact.css";

export const Contact = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const userID = process.env.REACT_APP_USER_ID;


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current,
        userID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="section006 mx-auto" id="formulario_de_contacto">
        <h2 className="text-center title_h2_contacto">Contacto</h2>
      </div>
      <div className="container contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group ">
            <div className="col-md-4">
              <input
                required
                id="fname"
                name="name"
                type="text"
                placeholder="Nombre "
                className="form-control"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-4">
              <input
                required
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                className="form-control"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-4 ">
              <textarea
                required
                className="form-control"
                id="message"
                name="message"
                placeholder="Escribe tu mensaje"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12" id="button_enviar">
              <button
                onClick={handleShow}
                type="submit"
                value="Send"
                className="btn btn-lg"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Mensaje Enviado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            He recibido tu mensaje, en breves me pondré en contacto contigo.
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                handleClose();
                navigate("/");
              }}

            >
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
