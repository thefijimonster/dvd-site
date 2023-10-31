import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
// import Marquee from "react-fast-marquee";

const Back = () => {

    return (
        <div className="back" style={{position: 'fixed', top: '0'}}>
            <Link to="/"><h4 style={{color: "white", backgroundColor: 'red'}}>BACK</h4></Link>
        </div>
  );

};

export default Back;