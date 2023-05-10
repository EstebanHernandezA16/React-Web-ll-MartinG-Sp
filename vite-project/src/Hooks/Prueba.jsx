import React, { Fragment, useState, useEffect } from "react";


export const Prueba = () =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{

        // setCount(count+1)

    }
    ,[])
 


    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button type="button" onClick={() => setCount(count+1)} className="btn btn-primary">Click</button>
                        <h2>la cuenta va en {count} </h2>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}