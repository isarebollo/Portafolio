import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../../component/Contact/Contact.css";

export const Contact = () => {


  const [textoAlerta, setTextoAlerta] = useState("");
  const [show, setShow] = useState(false);

  const modalManager = (texto) => {
    setTextoAlerta(texto);
    handleShow();
  };

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
          handleShow()
          modalManager("He recibido tu mensaje, en breves me pondré en contacto contigo, gracias.")
          console.log(result);
        })
      .catch(
        (error) => {
          handleShow()
          modalManager("El mensaje no se pudo enviar. Puede mandarlo a isarebollo@gmail.com y me pondré en contacto contigo en la mayor brevedad posible, gracias")
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
      <div >  <h5 className="header_h5">
        <span>Si tienes un proyecto interesante, tu empresa busca alguien con ganas de aportar valor o simplemente estas interesado en que colaboremos juntos.</span>
        <br />
        <br />
        <span> Escríbeme y me pondré en contacto contigo lo antes posible.</span>
      </h5></div>
      <div className="container contact">

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group ">

            <div className="mb-2 row">
              <input type="text" name="name" placeholder="Name" className="form-control" required />
            </div>
            <div className="mb-2 row">
              <input type="email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" name="email" placeholder="Email"
                className="form-control" required />
            </div>
            <div className="row d-flex" >
              <textarea className="form-control" name="message" placeholder="Message..." required />
            </div>
            <div className="col-md-12" id="button_enviar">
              <button type="submit" className="btn" value="Send" >Enviar</button>
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
            {textoAlerta}

          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                handleClose();
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
