import React from "react";
import '../App.css';
import Background from "./Background";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const HomePage = () => {

    return (
        <section>
            {/* <Background></Background> */}
            <div id="contentDiv">
                {/* <Marquee>hello</Marquee> */}
                <div>
                    <Link to="/ABOUT"><h1>ABOUT</h1></Link>
                    <Link to="/WORK"><h1>WORK</h1></Link>
                    <Link to="/CONTACT"><h1>CONTACT</h1></Link>
                </div>
            </div>
        </section>
    );

};

export default HomePage;

            {/* <div style={{
                    width: '100%',
                    height: '30px',
                    bottom: '0',
                    overflowX: 'hidden',
                    overflowY: 'scroll',
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                    marginBottom: '100px',
                    mixBlendMode: 'exclusion'
                }}>
                    <marquee id="contactMarquee" scrollAmount="8" style={{
                        color: 'black',
                        fontSize: '12px',
                        fontFamily: 'Press',
                    }}>email davidchen02@icloud.com for more info</marquee>
            </div> */}