import React, { Fragment, useState } from "react";
import { Formik, Field, Form } from "formik";
import "./Login.css";
import Swal from "sweetalert2";

export const Login = () => {
  const MostrarAlert = () => {
    Swal.fire({
        title:'mmm',
        text:'Testeo',
        icon:'info',
        // icon:'warning',
        // icon:'error',
        // icon:'question',
        // icon:'success',
        iconColor:'purple',
        showCancelButton: true,
        confirmButtonText: 'End'
    })
    
  };

  return (
    <Fragment>
      <div className="img-container ">
        <h1 style={{marginBottom: '5vh'}}>Sign Up With Formik</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));

            // Swal.fire(JSON.stringify(values))
            Swal.fire({
              title: "Titulo",
              text: `Datos enviados correctamente, firstname: ${JSON.stringify(
                values.firstName
              )} lastname: ${JSON.stringify(
                values.lastName
              )} email: ${JSON.stringify(values.email)} `,
              icon: "success",
              showCancelButton: true,
              confirmButtonText: "Yas",
            });
            // alert(JSON.stringify(values, null, 2));
            // // Swal.fire('¡Hola, mundo!')
          }}
        >
          <Form>
            
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName"  placeholder="Jane" />
            
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="ejemplo@gmail.com"
              type="email"
            />
            <button className="btn btn-light txtbox" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
        <button className="btn btn-light txtbox" style={{marginTop: '-7vh'}} onClick={() => MostrarAlert()}> Otro test de alerta</button>
      </div>
    </Fragment>
  );
};
