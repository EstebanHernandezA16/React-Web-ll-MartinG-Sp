import React, { Fragment, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./Login.css";
import Swal from "sweetalert2";

export const Login = () => {
  const validationSche = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  const handleSubmit = (values, helpers) => {
    console.log(values);

    const MostrarAlert = () => {
      Swal.fire({
        title: "mmm",
        text: "Testeo",
        icon: "info",
        iconColor: "cyan",
        timer: 3000,
        showCancelButton: true,
        confirmButtonText: "End",
      });
    };
    MostrarAlert();
  };
  //   const MostrarAlert = () => {
  //     Swal.fire({
  //         title:'mmm',
  //         text:'Testeo',
  //         icon:'info',
  //         // icon:'warning',
  //         // icon:'error',
  //         // icon:'question',
  //         // icon:'success',
  //         iconColor:'purple',
  //         showCancelButton: true,
  //         confirmButtonText: 'End'
  //     })

  //   };

  //   const Validate = async(values) =>{
  //     await new Promise((r) => setTimeout(r, 500));

  //     values.lastName.length>= 6? (

  //       Swal.fire({
  //         title:'hint',
  //         text:'thats a good password, more than 6 letters',
  //         icon: 'question',
  //         showCancelButton: false,
  //         confirmButtonText: 'K'
  //       })
  //     ):
  //        (
  //         Swal.fire({
  //           title:'hint',
  //           text:'password not safe, less than 6 letters',
  //           icon: 'warning',
  //           showCancelButton: false,
  //           confirmButtonText: 'K'
  //         })
  //     )

  // values.email.includes('@Mmail.jn')? (
  //   Swal.fire({
  //     title: "Nais",
  //     text: `Welcome user@Mmail.jn `,
  //     icon: "success",
  //     showCancelButton: true,
  //     confirmButtonText: "Yas",
  //   })

  // ) : (Swal.fire({
  //   title:'error',
  //   text:'No corresponde dominio de empresa',
  //   icon: 'error',
  //   iconColor: 'orange',
  //   showCancelButton: false,
  //   confirmButtonText: 'Try again'
  // }));

  // Swal.fire(JSON.stringify(values))

  // Swal.fire({
  //   title: "Titulo",
  //   text: `Datos enviados correctamente, firstname: ${JSON.stringify(
  //     values.firstName
  //   )} lastname: ${JSON.stringify(
  //     values.lastName
  //   )} email: ${JSON.stringify(values.email)} `,
  //   icon: "success",
  //   showCancelButton: true,
  //   confirmButtonText: "Yas",
  // });
  // alert(JSON.stringify(values, null, 2));
  // // Swal.fire('¡Hola, mundo!')

  return (
    <Fragment>
      <div className="img-container ">
        <h1 style={{ marginBottom: "5vh" }}>Sign Up With Formik</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          validationSchema={validationSche}
          onSubmit={handleSubmit}
        >
          {(props) => {
            console.log(props);
            return (
              <Form>
                <label htmlFor="firstName">First Name</label>
                <Field
                  id="firstName"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  name="firstName"
                  placeholder="Jane"
                  value={props.values.firstName}
                />
                {props.errors.firstName && props.touched.firstName && (
                  <p style={{ color: "red" }}>{props.errors.firstName}</p>
                )}
                <label htmlFor="lastName">Last Name</label>
                <Field
                  id="lastName"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  name="lastName"
                  placeholder="Doe"
                  value={props.values.lastName}
                />
                {props.errors.lastName && props.touched.lastName && (
                  <p style={{ color: "blue" }}>{props.errors.lastName}</p>
                )}
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  type="email"
                  value={props.values.email}
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                />
                {props.errors.email && props.touched.email && (
                  <p style={{ color: "yellow" }}>{props.errors.email}</p>
                )}
                <button className="btn btn-light txtbox" type="submit">
                  Submit
                </button>
                {/* <p>{JSON.stringify(props.values)}</p> llevar los datos cuando se haga submit al form */}
                <button className="btn btn-warning txtbox" type="submit">
                  Reset
                </button>
              </Form>
            );
          }}
        </Formik>
        <button
          className="btn btn-light txtbox"
          style={{ marginTop: "-7vh", marginLeft: "5vh" }}
          onClick={() => MostrarAlert()}
        >
          {" "}
          Otro test de alerta
        </button>
      </div>
    </Fragment>
  );
};
