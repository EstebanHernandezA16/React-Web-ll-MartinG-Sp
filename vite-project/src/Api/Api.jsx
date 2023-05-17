import React, { Fragment, useState, useEffect } from "react";
import "./Api.css";
import { ClientId, ClientL, GrxId } from "../Global/Global";
/*
*Peticiones con Token, primero se verifica que necesito para hacer la peticion y recibir el token,
 ahora en react al momento de hacer el fetch es importante controlar que no se actualice a cada rato el token, para ello se debe sacar el tiempo de expiracion del token y hacer un condicional para que solo se actualice cuando el tiempo se expire
*Ahora aqui va un ejemplo traido por gpt

*/
export const Api = () => {
  const [token, setToken] = useState(null);
  const [tokenExpiration, setTokenExpiration] = useState("");
  const [tokenAlert, setTokenAlert] = useState(true);
  const [songs, setSongs] = useState([]);
  const songsCuantity = 10;
  const ArtistId = { GrxId }.GrxId;
  /*{"CO","Colombia"},*/
  const countryCode = "CO";
  const sptfEndpoint = "https://accounts.spotify.com/api/token";

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch(sptfEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " + btoa({ ClientId }.ClientId + ":" + { ClientL }.ClientL),
        },
        body: "grant_type=client_credentials",
      });
      const data = await response.json();

      setToken(data.access_token);
      const expiresIn = new Date().getTime() + data.expires_in * 1000;
      setTokenExpiration(expiresIn);

      //   tokenAlert && token!=null? alert(token) && setTokenAlert(false) : null
    };

    if (new Date().getTime() > tokenExpiration) {
      fetchToken();
    }

    if (token !== null) {
      const fetchSongs = async () => {
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${ArtistId}/top-tracks?market=${countryCode}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setSongs(data.tracks.slice(0, songsCuantity));
        console.log(songs);
      };

      fetchSongs();
    }
  }, [tokenExpiration]);

  if (tokenAlert && token != null) {
    console.log("Nuevo token : " + token);
    setTokenAlert(false);
    // setTimeout(fetchSongs, 4000)
  }

  return (
    <Fragment>
      <div className="container-api">
        <h1>Component Api</h1>
        <h3 className="h3-Api">Your Personal access token of Spotify</h3>
        <p className="p-Api" style={{ textAlign: "center" }}>
          {token}
        </p>
        <div className="row row-Api">
          {songs.map((song, i) => {
            return (
              <>
                {i == songs.length - 1 ? (
                  <>
                    <div key={song.id} className="col-4 col-4-Api lastSong">
                      {/* <h3 className="h3-Api" style={{marginBottom: '20%'}}> And the last song its</h3> */}
                      <p className="p-Api-songName " key={song.id}>
                        {" "}
                        {song.name}
                      </p>
                      <img
                        src={song.album.images[0].url}
                        alt="imagen"
                        height={song.album.images[1].height}
                        width={song.album.images[1].width}
                        style={{ margin: "0,2%", marginLeft: "20%" }}
                      />
                      {song.preview_url ? (
                        <>
                          <iframe
                            src={song.preview_url}
                            style={{ width: "100%", marginLeft: "17.5%" }}
                          ></iframe>{" "}
                        </>
                      ) : (
                        <>
                          <p>{`${song.name} no cuenta con vista previa`}</p>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {/* <div className="col-4 col-4-Api">
                <h3></h3>
              <p className="p-Api-songName" key={song.id}>{song.name}</p>
              <img src={song.album.images[0].url} alt="" width={song.album.images[1].width} height={song.album.images[1].height} style={{margin: '0,2%', marginLeft: '35%'}} />
              {song.preview_url? <><iframe src={song.preview_url} style={{width: '100%', marginLeft: '17.5%'}}></iframe> </> :<><p className="info-text">{`${song.name} no cuenta con vista previa`}</p></>}
              </div> */}
                    <div
                      className="card"
                      style={{ width: "18rem", backgroundColor: "black" }}
                    >
                      <img
                        className="card-img-top w-100 img-fluid"
                        src={song.album.images[0].url}
                        alt="imagen"
                        height={song.album.images[1].height}
                        width={song.album.images[1].width}
                        style={{ margin: "0,2%" }}
                      />
                      <div className="card-body">
                        <h5 className="p-Api-songName card-title" key={song.id}>
                          {song.name}
                        </h5>
                        <p className="card-text">
                          Collab:{" "}
                          {song.artists[1] ? song.artists[1].name : "No"}
                        </p>
                        <p className="card-text">
                          Popularity: {song.popularity}
                        </p>
                        <p className="card-text">
                          Release date: {song.album.release_date}
                        </p>
                        {song.preview_url ? (
                          <>
                            <iframe
                              src={song.preview_url}
                              style={{ width: "100%", marginLeft: "17.5%" }}
                            ></iframe>{" "}
                          </>
                        ) : (
                          <>
                            <p>{`${song.name} no cuenta con vista previa`}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
