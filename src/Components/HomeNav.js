import React from "react";
import '../App.css';
import { Link } from "react-router-dom";


const HomeNav = () => {

    return (
    // <div style={{
    //     justifyContent: 'center',
    //     width: '100',
    //     display: 'flex',
    //     marginBottom: '20px'
    // }}>
        <Link to="/">
            <img id="dvdLogo" width={80} src={require('../Assets/dvd_logo_white.png')}></img>
        </Link>
    // </div>
  );

};

export default HomeNav;