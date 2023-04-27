import React, { Fragment, useState } from "react";
import { slide02 } from "../Global/Global";
import "./Form.css";
import {
  EnvelopeCheckFill,
  PersonSquare,
  CalendarDay,
  Lock,
  Watch,
} from "react-bootstrap-icons";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
  const [date, setDate] = useState("");
  return (
    <Fragment>
      <div className="img-container ">
        <h1 className="h1w mt-1">Sign Up</h1>

        <div className="loginScreen">
          {/* onSubmit={handleSubmit} */}
          <form>
            <div className="row">
              <div className="col-12 py-4"></div>
            </div>
            <div className="row">
              <div className="col-12 input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <EnvelopeCheckFill size={16} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu correo"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className="input-group-text txtbox  " id="basic-addon2">
                  @mail.com
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <PersonSquare />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="col input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <Lock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value.toString())}
                />
              </div>
            </div>
            <div className="row">
              <div className="col input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <CalendarDay />
                </span>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Dia"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value.toString());
                  }}
                />
              </div>
              <div className="col input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <Watch />
                </span>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Hora"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={hora}
                  onChange={(e) => setHora(e.target.value.toString())}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 py-4 btnIng">
                <button type="submit"  className="btn btn-light">
                  Join The Party
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
