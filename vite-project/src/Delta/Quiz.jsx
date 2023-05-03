import React, { Fragment, useState } from "react";
import "./Quiz.css";
import { Globe2, FilePerson, Balloon, VinylFill } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";

export const Quiz = () => {
  // const [quest, setQuest] = useState(false);

  const quests = [
    {
      id: 1,
      q: "From where it's Martin Garrix?",
      o1: "It's from colombia",
      o2: "Amstelveen",
      o3: "American",
      o4: "Who?",
      id_css: 1,
      icon:<Globe2 size={16} style={{marginBottom: '5%'}}/>,
      answer:'Amstelveen',
    },
    {
      id: 2,
      q: "What's his A.K.A? (Also Known As)",
      o1: "Grx",
      o2: "Ricky martin?",
      o3: "Little martin",
      o4: "Jian",
      id_css: "2",
      icon:<FilePerson size={16} style={{marginBottom: '5%'}}/>,
      answer:'Grx',
      
    },
    {
      id: 3,
      q: "How old is he?",
      o1: "undefined",
      o2: "Younger to be The best D",
      o3: "Older than tutankamon",
      o4: "35",
      id_css: "3",
      icon:<Balloon size={16} style={{marginBottom: '5%'}}/>,
      answer:'35',
    },
    {
      id: 4,
      q: "What's his best hit",
      o1: "Animals",
      o2: "Hit? u wanna Hit me?",
      o3: "If you wanna hit me then lets fight :)",
      o4: "Oops i dont know... u got it? ",
      id_css:"4",
      icon:<VinylFill size={16} style={{marginBottom: '5%'}}/>,
      answer:'Animals',
    },
  ];



  const [respuestas, setRespuestas] = useState([]);
  const [resultado, setResultado] = useState([]);

  const handleChange = (i, value) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[i] = value
    setRespuestas(nuevasRespuestas);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Agregar lógica para verificar si la respuestas es correcta o no.
    console.log(respuestas);
    respuestas.map((respuesta,i)=>{
        
         respuestas[i]==quests[i].answer? (console.log('yes') && setResultado([i]=true)): (console.log('no') && setResultado([i]=false));
        return resultado
        console.log(resultado);
        i++
    })
    console.log(resultado);
  };

  return (
    <Fragment>
      <div className="container">
        <h2 className="title-main">Questions</h2>
        <div className="row">

        {quests.map((quest, index) => {
            return(
          <div className="col-6 quest-container">
          <form key={quest.id} onSubmit={handleSubmit}>
            <h5 id={`title${quest.id_css}`} className="Quest-title">{`Quest #${quest.id} ${quest.q}`}</h5>
            <div id={`sub-container${quest.id_css}`} className="sub-container" >   
              <label htmlFor={`respuesta${index}`}>
                <input
                  type="radio"
                  id={`respuesta${index}`}
                  className="CheckItem"
                  value={quest.o1}
                  checked={respuestas[index] === quest.o1}
                  onChange={() => handleChange(index, quest.o1)}
                />
                {quest.o1}
              </label>
            </div>
            <div id={`sub-container${quest.id_css}`} className="sub-container" >   
              <label htmlFor={`respuesta${index}`}>
                <input
                  type="radio"
                  id={`respuesta${index}`}
                  value={quest.o2}
                  checked={respuestas[index] === quest.o2}
                  onChange={() => handleChange(index, quest.o2)}
                />
                {quest.o2}
              </label>
            </div>
            <div id={`sub-container${quest.id_css}`} className="sub-container" >   
              <label htmlFor={`respuesta${index}`}>
                <input
                  type="radio"
                  id={`respuesta${index}`}
                  value={quest.o3}
                  checked={respuestas[index] === quest.o3}
                  onChange={() => handleChange(index, quest.o3)}
                />
                {quest.o3}
              </label>
            </div>
            <div id={`sub-container${quest.id_css}`} className="sub-container" >   
              <label htmlFor={`respuesta${index}`}>
                <input
                  type="radio"
                  id={`respuesta${index}`}
                  value={quest.o4}
                  checked={respuestas[index] === quest.o4}
                  onChange={() => handleChange(index, quest.o4)}
                />
                {quest.o4}
              </label>
            </div>
            <button id={`btn${quest.id}`} className="btn" type="submit"> {quest.icon} Enviar</button>
            {/*Quiero que cada boton sea diferente, para ello cada boton debe tener un id*/ }
            
          </form>
          </div>
            );
        })}
        </div>
      </div>
    </Fragment>
  );
};
