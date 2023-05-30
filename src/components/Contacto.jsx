import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/logo_uno.jpg";
import "../styles/Contacto.css";

function validate(input) {
  const regexName = /^[a-zA-Z ]+$/;
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const regexNumber = /^[0-9]+$/;

  const { userPhone, userEmail, user_name, city, message } = input;
  let errors = {};

  //name
  if (!regexName.test(user_name)) {
    errors.user_name = "Nombre no valido.";
  } else if (user_name === 0) {
    errors.user_name = "Ingrese un nombre por favor.";
  } else if (user_name.length < 2) {
    errors.user_name = "Ingrese un nombre mas largo.";
  }

  //lastname
  if (!regexName.test(city)) {
    errors.city = "Apellido no valido.";
  } else if (city === 0) {
    errors.city = "Ingrese un apellido por favor.";
  } else if (city.length < 2) {
    errors.city = "Ingrese un apellido mas largo.";
  }

  //email
  if (!regexEmail.test(userEmail)) {
    errors.userEmail = "Email no valido.";
  } else if (userEmail === 0) {
    errors.userEmail = "Ingrese un email por favor";
  }

  if (message === 0) {
    errors.message = "Ingrese un mensaje por favor";
  } else if (message.length < 4) {
    errors.message = "Ingrese un mensaje mas largo por favor.";
  }

  //phone

  if (!regexNumber.test(userPhone)) {
    errors.userPhone = "Solo se permiten valores numéricos y mayores a 0.";
  } else if (userPhone.length > 15) {
    errors.userPhone = "El valor no debe superar los 15 números.";
  }

  return errors;
}

const Contacto = () => {
  const sectionRef = useRef();

  const form = useRef();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    userPhone: "",
    user_name: "",
    city: "",
    userEmail: "",
    message: "",
  });

  function handleChange(e) {
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (input.user_name && input.city && input.userEmail.length > 0) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_3n8k6u3",
          "template_1oo44g8",
          form.current,
          "Rko1XW3XD9cViNbHW"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      alert("Mensaje Enviado con éxito");
      setInput({
        userPhone: "",
        user_name: "",
        city: "",
        userEmail: "",
        message: "",
      });
    } else {
      e.preventDefault();
      alert("complete los espacios vacios");
    }
  };

  return (
    <div className="contact-form-container" id="contact" ref={sectionRef}>
      <div className="contain">
        <div className="contact_title">
          <h1>Contact</h1>
        </div>
        <form
          className="first_contain"
          ref={form}
          onSubmit={(e) => sendEmail(e)}
        >
          <div className="second_contain">
            <div className="name">
              <input
                type="text"
                placeholder="Nombre"
                name="user_name"
                onChange={(e) => handleChange(e)}
                value={input.user_name}
              />
              {errors.user_name && <h4>{errors.user_name}</h4>}
            </div>
            <div className="ciudad">
              <input
                type="text"
                placeholder="Ciudad"
                name="city"
                onChange={(e) => handleChange(e)}
                value={input.city}
              />
              {errors.city && <h4>{errors.city}</h4>}
            </div>
          </div>

          <div className="third_component">
            <div className="phone">
              <input
                type="text"
                placeholder="Whatsapp"
                name="userPhone"
                onChange={(e) => handleChange(e)}
                value={input.userPhone}
              />
              {errors.userPhone && <h4>{errors.userPhone}</h4>}
            </div>

            <div className="email">
              <input
                type="text"
                placeholder="Email"
                name="userEmail"
                onChange={(e) => handleChange(e)}
                value={input.userEmail}
              />
              {errors.userEmail && <h4>{errors.userEmail}</h4>}
            </div>
          </div>

          <div className="message">
            <textarea
              type="text"
              placeholder="Mensaje"
              name="message"
              onChange={(e) => handleChange(e)}
              value={input.message}
            />
            {errors.message && <h4>{errors.message}</h4>}
          </div>
          <div className="send">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
      <div className="img_contact">
        <img src={logo} alt="logo_band" />
      </div>
    </div>
  );
};

export default Contacto;
