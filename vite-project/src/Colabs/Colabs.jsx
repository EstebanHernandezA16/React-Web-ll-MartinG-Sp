import React, { Fragment } from "react";
import './Colabs.css'
import {col01} from '../Global/Global'

export const Colabs = () =>{


    return(
        <Fragment>
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
                        <img className="img-colabs" src={col01} alt="Colaboration With Tiësto" />
                    </div>
                    <div className="col-8 col-md-8 ">
                        <h1 id="Tiësto">With Tiësto</h1>
                    <p className="textColabs">On 30 July 2017, Garrix invited Guetta on stage to perform the song for the first time, during his mainstage appearance at Tomorrowland 2017. This original version featured female vocals provided by English singer Ellie Goulding. On 21 August, Garrix brought Guetta on stage to play the song once again, during a performance in Ibiza. A short footage captured by someone in the booth surfaced on Instagram. Prior to the performance, Garrix spoke to Capital about the song, calling it a "radio-friendly song" that will be released soon. Garrix posted short studio teasers of the song via Instagram Stories on 19 November, suggesting that it would be released soon.</p>
                    </div>
                </div>
                <hr />
                <div className="row ">
                <div className="col-8 col-md-8 ">
                        <h1 id="Afrojack">With Afrojack</h1>
                    <p className="textColabs">On 30 July 2017, Garrix invited Guetta on stage to perform the song for the first time, during his mainstage appearance at Tomorrowland 2017. This original version featured female vocals provided by English singer Ellie Goulding. On 21 August, Garrix brought Guetta on stage to play the song once again, during a performance in Ibiza. A short footage captured by someone in the booth surfaced on Instagram. Prior to the performance, Garrix spoke to Capital about the song, calling it a "radio-friendly song" that will be released soon. Garrix posted short studio teasers of the song via Instagram Stories on 19 November, suggesting that it would be released soon.</p>
                    </div>
                    <div className="col-4 col-md-4">
                        <img className="img-colabs" src={col01} alt="Colaboration With Afrojack" />
                    </div>
                    
                </div>
                
            </div>

        </Fragment>

    );
}