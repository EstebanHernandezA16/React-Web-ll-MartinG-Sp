import React, { Fragment } from "react";
import '../Colabs/Colabs.css'
import {col01, col02, col03} from '../Global/Global'


export const Members = () =>{
let ite=0;
// const nombre ="Esteban H"
// //Colaboraciones
// const CollabsArr=[
//     {name: "David Guetta",
//      city: "Ibiza",
//      song: "Soo Far Away",
//      img: "",
//      desc: ""    
//     },
//     {name: "Tiësto",
//     city: "Ibiza",
//     song: "Soo Far Away",
//     img: "",
//     desc: "" 
//     },
//     {name: "Afrojack",
//      city: "The moon",
//      song: "Turn up the speakers",
//      img: "",
//      desc: ""
//     },
//     {name: "Yisus",
//      city: "Fly me",
//      song: "{last 2 song in order asc}",
//      img:"",
//      desc:"",
//     }
const collabs= [
    {
        name:"David Guetta",
        city:"Ibiza",
        song:"So Far Away",
        img:{col01},
        desc:"On 30 July 2017, Garrix invited Guetta on stage to perform the song for the first time, during his mainstage appearance at Tomorrowland 2017. This original version featured female vocals provided by English singer Ellie Goulding. On 21 August, Garrix brought Guetta on stage to play the song once again, during a performance in Ibiza. A short footage captured by someone in the booth surfaced on Instagram. Prior to the performance, Garrix spoke to Capital about the song, calling it a 'radio-friendly song' that will be released soon. Garrix posted short studio teasers of the song via Instagram Stories on 19 November, suggesting that it would be released soon.",
        id:1
    },
    {
      name:"Tiësto",
      city:"Las Vegas",
      song:"The Only Way is Up",
      img:{col02},
      desc:"'The Only Way Is Up' is a song by Dutch DJs and record producers Martin Garrix and Tiësto. The song premiered through a commercial ad presented by 7UP entitled 'Team UP', which featured both artists. The collaborative track was released through Tiësto's Musical Freedom label as a digital download by Beatport. It was originally called 'Voices' until it was released with the 7UP campaign and renamed 'The Only Way Is Up'. This commercial was filmed at the desert outside Las Vegas.",  
      id:2  
    },{
        name:"Afrojack",
        city:"Beatport",
        song:"Turn Up The Speakers",
        img:{col03},
        desc:"'Turn Up the Speakers' is a song written, produced and performed by Dutch DJs and record producers Afrojack and Martin Garrix. It was released as a digital download on 25 August 2014 on Beatport and on 22 September 2014 on iTunes, and marks the first and only collaborative work between the two artists. The track has charted in Austria, Belgium and the Netherlands.",
        id:3
    }
];

    // <h1>Ejemplo de {nombre}</h1>
    //         {/* Se mapean los arreglos solamente */}
    //         {CollabsArr.map((CollabArr) => {
    //             return(
    //                 <div key={CollabArr.id}>
    //                 <h1>{CollabArr.name}</h1>
    //                 </div>
    //             );
    //         })}

    
    /*Entregables:
    *1.Proyecto con Home: Banner, Historia del artista, y Footer
    *2.Componente Integrantes/Collabs : nombre, foto, descripcion, min 4
    *3.Componente Tienda: Foto, Nombre, Precio, Descripcion
    *4.Componente Fan: RETO diseño libre pero se necesita que haga un formulario para registrar fanaticos
     con nombre, fecha-nac, correo, password y aparte el formulario debe tener un text que al responder 5 retorne una respuesta y si se puede un sonido*/ 
//];

    return(
        <Fragment>
            {collabs.map((collab)=>{
                if(ite==0 || ite%2 ==0){
                    //Lado izquierdo
                }else{
                    //lado Derecho
                }
            })}
             <div  className="container" style={{marginTop: '30px'}}>
                <div className="row">
                    <div className="col-8 col-md-8 ">
                        <h1 id="david">With David Guetta</h1>
                    <p className="textColabs">On 30 July 2017, Garrix invited Guetta on stage to perform the song for the first time, during his mainstage appearance at Tomorrowland 2017. This original version featured female vocals provided by English singer Ellie Goulding. On 21 August, Garrix brought Guetta on stage to play the song once again, during a performance in Ibiza. A short footage captured by someone in the booth surfaced on Instagram. Prior to the performance, Garrix spoke to Capital about the song, calling it a "radio-friendly song" that will be released soon. Garrix posted short studio teasers of the song via Instagram Stories on 19 November, suggesting that it would be released soon.</p>
                    </div>
                    <div className="col-4 col-md-4">
                        <img className="img-colabs" src={col01} alt="Colaboration With David Guetta" />
                    </div>
                </div>
                <hr />
                <div className="row ">
                    <div className="col-4 col-md-4">
                        <img className="img-colabs" src={col02} alt="Colaboration With Tiësto" />
                    </div>
                    <div className="col-8 col-md-8 ">
                        <h1 id="Tiësto">With Tiësto</h1>
                    <p className="textColabs">"The Only Way Is Up" is a song by Dutch DJs and record producers Martin Garrix and Tiësto. The song premiered through a commercial ad presented by 7UP entitled "Team UP", which featured both artists. The collaborative track was released through Tiësto's Musical Freedom label as a digital download by Beatport. It was originally called "Voices" until it was released with the 7UP campaign and renamed "The Only Way Is Up". This commercial was filmed at the desert outside Las Vegas.</p>
                    </div>
                </div>
                <hr />
                <div className="row ">
                <div className="col-8 col-md-8 ">
                        <h1 id="Afrojack">With Afrojack</h1>
                    <p className="textColabs">"Turn Up the Speakers" is a song written, produced and performed by Dutch DJs and record producers Afrojack and Martin Garrix. It was released as a digital download on 25 August 2014 on Beatport and on 22 September 2014 on iTunes, and marks the first and only collaborative work between the two artists. The track has charted in Austria, Belgium and the Netherlands.</p>
                    </div>
                    <div className="col-4 col-md-4">
                        <img className="img-colabs" src={col03} alt="Colaboration With Afrojack" />
                    </div>
                    
                </div>
                
            </div>

            







        </Fragment>
    );
}