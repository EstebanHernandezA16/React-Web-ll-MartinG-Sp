import React, { Fragment, useState } from "react";
import './Quiz.css'

export const Quiz = () => {
    const [quest, setQuest] = useState(false);


    return (
        <Fragment>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>How Much u know About..</h1>
                <p>1# From where it's Martin Garrix?</p>
                {/* <div className="btn-group">
                    <button className="btn btn-info btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Small button
                    </button>
                    <div className="dropdown-menu">
                        Its chinesse obvious
                    </div>
                </div> */}
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        1#
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">It's from colombia</button>
                        <button className="dropdown-item" type="button">Maybe Spain</button>
                        <button className="dropdown-item" type="button">American</button>
                        <button className="dropdown-item" type="button">Who?</button>
                    </div>
                </div>
                <br />
                <p>2# What's his A.k.a</p>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        2#
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Grx</button>
                        <button className="dropdown-item" type="button">Ricky martin?</button>
                        <button className="dropdown-item" type="button">Darin</button>
                        <button className="dropdown-item" type="button">Jian</button>
                    </div>
                </div>

                
                <p>3# How old is he?</p>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        3#
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">-1</button>
                        <button className="dropdown-item" type="button">Younger to be The best Dj</button>
                        <button className="dropdown-item" type="button">Older than tutankamon</button>
                        <button className="dropdown-item" type="button">35</button>
                    </div>
                </div>

                <p>4# What's his best hit</p>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        4#
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Animals</button>
                        <button className="dropdown-item" type="button">best what? </button>
                        <button className="dropdown-item" type="button">Virus</button>
                        <button className="dropdown-item" type="button">Oops i dont know</button>
                    </div>
                </div>


            </div>
        </Fragment>
    );
}