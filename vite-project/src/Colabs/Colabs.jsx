import React, { Fragment } from "react";
import './Colabs.css'


export const Colabs = () =>{
const col01 = "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/Col01.jpg?alt=media&token=575b762d-aa00-4e45-815c-dfc0317dfbfb"

    return(
        <Fragment>
            <div  className="container">
                <div className="row david">
                    <div className="col-8 col-md-8 ">
                        <h1>With David Guetta</h1>
                    <p className="textColabs">On 30 July 2017, Garrix invited Guetta on stage to perform the song for the first time, during his mainstage appearance at Tomorrowland 2017. This original version featured female vocals provided by English singer Ellie Goulding.[1][2] On 21 August, Garrix brought Guetta on stage to play the song once again, during a performance in Ibiza.[3] A short footage captured by someone in the booth surfaced on Instagram.[4][5] Prior to the performance, Garrix spoke to Capital about the song, calling it a "radio-friendly song" that will be released soon.[6] Garrix posted short studio teasers of the song via Instagram Stories on 19 November, suggesting that it would be released soon.[7][8]</p>
                    </div>
                    <div className="col-4 col-md-4">
                        <img src={col01} alt="Colabs1" />
                    </div>
                </div>
            </div>
            
        </Fragment>

    );
}