import React from "react";
import "./History.css";

export function History() {
  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img1.jpg?alt=media&token=d6cc9df1-d523-466a-a589-0522afcba708";
  const img2 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img3.jpg?alt=media&token=25ef29bf-e5c4-4cb2-a0b7-36856a0b0a8f";
  const img3 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img2.jpg?alt=media&token=83b3cbd4-cb5e-4805-b02e-17f67dc0e52e";

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-4">
            <div
              className="card"
              style={{
                width: "20rem",
                paddingTop: "5px",
                backgroundColor: "#090D0E",
                color: "white",
              }}
            >
              <img className="card-img-top" src={img1} alt="Card image cap" />
              <div className="card-body">
                <h3
                  class="card-title"
                  style={{ textAlign: "center", paddingBottom: "25px" }}
                >
                  Martin Garrix
                </h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Martijn Gerard Garritsen (/gæɹɪks/; Amstelveen, 14 de mayo de
                  1996), 12 más conocido como Martin Garrix, es un DJ y
                  productor neerlandés fundador del sello STMPD RCRDS.
                  Actualmente ocupa el puesto #1 en la encuesta realizada en
                  2022 por la revista DJ Magazine. También es conocido por sus
                  seudónimos "Ytram" y "GRX".
                </p>
              </div>
            </div>
          </div>
          {/* <div className="card" style={{width: '18rem'}}>
           <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div> */}
          <div className="col-4 col-md-4">
            <div
              className="card"
              style={{
                width: "20rem",
                paddingTop: "94px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <img className="card-img-top" src={img2} alt="Card image cap" />
              <div className="card-body" style={{ backgroundColor: "#090D0E" }}>
                <h3
                  class="card-title"
                  style={{ textAlign: "center", paddingBottom: "25px" }}
                >
                  Origenes
                </h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Ingresó a la encuesta anual Top 100 DJ's realizada por la
                  revista DJ Magazine, directamente al puesto 40. En 2014,
                  obtuvo el 4°puesto y en 2015 fue nombrado 3º. En 2016, 2017,
                  2018 y 2022 fue elegido por la revista como mejor DJ del
                  mundo, colocándolo en el puesto número 1. 3​ En 2019 descendió
                  al segundo puesto y en 2020 al tercero.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {/* <h2>DJ</h2>
            <p>
              Su éxito comenzó con el lanzamiento de la canción "Animals", el 17
              de junio de 2013 por la discográfica Spinnin' Records. La canción
              alcanzó el puesto #1 en Bélgica y en Reino Unido, y el puesto #3
              en Irlanda. El sencillo Wizard, producido con Jay Hardway, también
              fue un éxito en numerosos países en 2013.
            </p>
            <img className="img-fluid w-100" src={img3} alt="imagen3" /> */}
            <div
              className="card"
              style={{
                width: "20rem",
                paddingTop: "248px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <img className="card-img-top" src={img3} alt="Card image cap" />
              <div className="card-body" style={{ backgroundColor: "#090D0E" }}>
                <h3
                  class="card-title"
                  style={{ textAlign: "center", paddingBottom: "25px" }}
                >
                  ¿One Hit? I DONT THINK SOO
                </h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Su éxito comenzó con el lanzamiento de la canción "Animals",
                  el 17 de junio de 2013 por la discográfica Spinnin' Records.
                  La canción alcanzó el puesto #1 en Bélgica y en Reino Unido, y
                  el puesto #3 en Irlanda. El sencillo Wizard, producido con Jay
                  Hardway, también fue un éxito en numerosos países en 2013.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//export {History};
