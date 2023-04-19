import React from "react";

export function History() {
  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img1.jpg?alt=media&token=d6cc9df1-d523-466a-a589-0522afcba708";
  const img2 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img2.jpg?alt=media&token=9ae66c91-a2a0-4a16-b5cf-6f2b9135918e";
  const img3 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img3.jpg?alt=media&token=c4612f6b-26cc-471b-9ada-e1560c52f587";
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2>Martin Garrix</h2>
            <p>
              Martijn Gerard Garritsen (/gæɹɪks/; Amstelveen, 14 de mayo de
              1996), 12 más conocido como Martin Garrix, es un DJ y productor
              neerlandés fundador del sello STMPD RCRDS. Actualmente ocupa el
              puesto #1 en la encuesta realizada en 2022 por la revista DJ
              Magazine. También es conocido por sus seudónimos "Ytram" y "GRX".
            </p>
            <img className="img-fluid w-100" src={img1} alt="" />
          </div>
          <div className="col-12 col-md-3">
            <h2>Origenes</h2>
            <p>
              Ingresó a la encuesta anual Top 100 DJ's realizada por la revista
              DJ Magazine, directamente al puesto 40. En 2014, obtuvo el
              4°puesto y en 2015 fue nombrado 3º. En 2016, 2017, 2018 y 2022 fue
              elegido por la revista como mejor DJ del mundo, colocándolo en el
              puesto número 1. 3​ En 2019 descendió al segundo puesto y en 2020
              al tercero.
            </p>
            <img className="img-fluid w-100" src={img2} alt="imagen2" />
          </div>
          <div className="col-12 col-md-3">
            <h2>DJ</h2>
            <p>
              Su éxito comenzó con el lanzamiento de la canción "Animals", el 17
              de junio de 2013 por la discográfica Spinnin' Records. La canción
              alcanzó el puesto #1 en Bélgica y en Reino Unido, y el puesto #3
              en Irlanda. El sencillo Wizard, producido con Jay Hardway, también
              fue un éxito en numerosos países en 2013.
            </p>
            <img className="img-fluid w-100" src={img3} alt="imagen3" />
          </div>
        </div>
      </div>
    </>
  );
}

//export {History};
