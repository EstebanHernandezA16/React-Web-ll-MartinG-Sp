import React, { Fragment } from "react";
import "./Colabs.css";
import { col01, col02, col03, col04 } from "../Global/Global";

export const Colabs = () => {
  let ite = 0;
  const collabs = [
    {
      name: "David Guetta",
      city: "Ibiza",
      song: "So Far Away",
      img: { col01 }.col01,
      desc: "On 30 July 2017, Garrix invited Guetta on stage to perform the song for the first time, during his mainstage appearance at Tomorrowland 2017. This original version featured female vocals provided by English singer Ellie Goulding. On 21 August, Garrix brought Guetta on stage to play the song once again, during a performance in Ibiza. A short footage captured by someone in the booth surfaced on Instagram. Prior to the performance, Garrix spoke to Capital about the song, calling it a 'radio-friendly song' that will be released soon. Garrix posted short studio teasers of the song via Instagram Stories on 19 November, suggesting that it would be released soon.",
      id: 1,
      id_css: "David",
    },
    {
      name: "Tiësto",
      city: "Las Vegas",
      song: "The Only Way is Up",
      img: { col02 }.col02,
      desc: "'The Only Way Is Up' is a song by Dutch DJs and record producers Martin Garrix and Tiësto. The song premiered through a commercial ad presented by 7UP entitled 'Team UP', which featured both artists. The collaborative track was released through Tiësto's Musical Freedom label as a digital download by Beatport. It was originally called 'Voices' until it was released with the 7UP campaign and renamed 'The Only Way Is Up'. This commercial was filmed at the desert outside Las Vegas.",
      id: 2,
      id_css: "Tiësto",
    },
    {
      name: "Afrojack",
      city: "Beatport",
      song: "Turn Up The Speakers",
      img: { col03 }.col03,
      desc: "'Turn Up the Speakers' is a song written, produced and performed by Dutch DJs and record producers Afrojack and Martin Garrix. It was released as a digital download on 25 August 2014 on Beatport and on 22 September 2014 on iTunes, and marks the first and only collaborative work between the two artists. The track has charted in Austria, Belgium and the Netherlands.",
      id: 3,
      id_css: "Afrojack",
    },
    {
      name: "Jay Hardway",
      city: "Nimega (Netherlands)",
      song: "Wizard",
      img: { col04 }.col04,
      desc: "'Wizard' is a song by Dutch DJs and record producers Martin Garrix and Jay Hardway. A music video to accompany the release of 'Wizard' was first released onto YouTube on 19 November 2013 at a total length of three minutes and thirty-seven seconds (actual length is three minutes and thirty-one seconds due to the record label's introduction). The clip features clips of Garrix and Hardway performing together as well as clips of people dancing to the song. The video has over 200 million views. Garrix's Vevo channel had also uploaded its music video on 13 February 2014 but not available for worldwide.",
      id: 4,
      id_css: "Hardway",
    },
  ];

  return (
    <Fragment>
      {/* <div  className="container" style={{marginTop: '30px'}}>
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
                
            </div> */}
      <div className="container" style={{ marginTop: "30px" }}>
        {collabs.map((collab) => {
          if (ite === 0 || ite % 2 === 0) {
            {
              ite = ite + 1;
            }
            return (
              <div
                className="row"
                key={collab.id}
                style={{ paddingTop: "20px" }}
              >
                <div className="col-8 col-md-8 ">
                  <h1 id={collab.id_css}>With {collab.name}</h1>
                  <p className="textColabs">{collab.desc}</p>
                </div>
                <div className="col-4 col-md-4">
                  <img
                    className="img-colabs"
                    src={collab.img}
                    alt="Colaboration With David Guetta"
                  />
                </div>
              </div>
            );
          } else {
            {
              ite = ite + 1;
            }
            return (
              <div
                className="row"
                key={collab.id}
                style={{ paddingTop: "20px" }}
              >
                <div className="col-4 col-md-4">
                  <img
                    className="img-colabs"
                    src={collab.img}
                    alt="Colaboration With David Guetta"
                  />
                </div>
                <div className="col-8 col-md-8">
                  <h1 id={collab.id_css}>With {collab.name}</h1>
                  <p className="textColabs">{collab.desc}</p>
                </div>
              </div>
            );
            {
              ite = ite + 1;
            }
          }
        })}
      </div>
    </Fragment>
  );
};
