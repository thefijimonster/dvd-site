import {React} from "react";
import "../App.css";
import '../index.css';
import MediaQuery from 'react-responsive'
import { Link } from "react-router-dom";
import Back from "./Back";
import WORKSHOP1 from '../Assets/ORBIT_SPEAKER_CROPPED.gif';

const WORKSHOP = () => {
    return(
    <section>
            {/* <Background></Background> */}
            <MediaQuery minWidth={501}>
            <div id="contentDiv" style={{backgroundColor: 'black'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '-50px',  paddingRight: '8px', paddingLeft: '8px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '450px', marginTop: '-30px'}}>
                        <h style={{textAlign: 'center', textTransform: 'uppercase', color: 'white', fontWeight: 'bold', fontSize: '35px', lineHeight: '30px'}}>
                            Upcoming Loudspeaker Building Workshop
                        </h>
                        <p style={{textAlign: 'center', textTransform: 'uppercase', color: 'white', fontWeight: 'lighter', fontSize: '14px', lineHeight: '14px'}}>
                            Workshop date TBC [end of May]<br></br>
                            Hosted @BeauBeau's Cafe, 4 Gravel Ln, London E1 7AA<br></br><br></br>
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-80px'}}>
                        <img src={WORKSHOP1} style={{mixBlendMode: 'exclusion', width: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                    </div>
                    <p style={{textAlign: 'center', width: '500px', textTransform: 'none', color: 'white', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px', marginTop: '-4px'}}>
                        Participants will learn how to build <span style={{fontWeight: 'bolder', color: 'white'}}>A PAIR</span> of passive speakers<span style={{fontSize: '15px'}}>*</span> designed by me [shown orbiting here] and keep them<br></br><br></br>
                    </p>
                    <p style={{textAlign: 'center', width: '500px', textTransform: 'none', color: 'white', fontWeight: 'lighter', fontSize: '13px', marginTop: '-20px'}}>
                        <span style={{fontSize: '15px'}}>*</span><span style={{fontWeight: 'lighter'}}>Passive speakers require an amplifier</span> - this can be added for a total price of £315
                    </p>
                    <a href="https://buy.stripe.com/14kcON3mz5c26WIcMP">
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '2px'}}><h1 className="projectName" style={{color: 'red'}}>[ RESERVE £265 ]</h1><p className="wordTag">[ RESERVE £265 ]</p></div>
                    </a>
                    {/* <p style={{textAlign: 'center', width: '500px', textTransform: 'none', color: 'white', fontWeight: 'lighter', fontSize: '13px'}}>
                        Passive speakers require an amplifier - this can be added for a total price of £315
                    </p> */}
                    <a href="https://book.stripe.com/3cs6qp6yL5c294Q8wy">
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '10px'}}><h1 className="projectName" style={{color: 'red'}}>[ RESERVE W/ AMPLIFIER £315 ]</h1><p className="wordTag">[ RESERVE W/ AMPLIFIER £315 ]</p></div>
                    </a>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div id="contentDiv" style={{backgroundColor: 'black'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '-50px',  paddingRight: '8px', paddingLeft: '8px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '400px', marginTop: '-30px'}}>
                        <h style={{textAlign: 'center', textTransform: 'uppercase', color: 'white', fontWeight: 'bold', fontSize: '35px', lineHeight: '30px'}}>
                            Upcoming Loudspeaker Building Workshop
                        </h>
                        <p style={{textAlign: 'center', textTransform: 'uppercase', color: 'white', fontWeight: 'lighter', fontSize: '14px', lineHeight: '14px'}}>
                            Workshop date TBC [end of May]<br></br>
                            Hosted @BeauBeau's Cafe, 4 Gravel Ln, London E1 7AA<br></br><br></br>
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-80px'}}>
                        <img src={WORKSHOP1} style={{mixBlendMode: 'exclusion', width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                    </div>
                    <p style={{textAlign: 'center', width: '350px', textTransform: 'none', color: 'white', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px', marginTop: '-4px'}}>
                        Participants will learn how to build <span style={{fontWeight: 'bolder', color: 'white'}}>A PAIR</span> of passive speakers<span style={{fontSize: '15px'}}>*</span> designed by me [shown orbiting here] and keep them<br></br><br></br>
                    </p>
                    <p style={{textAlign: 'center', width: '350px', textTransform: 'none', color: 'white', fontWeight: 'lighter', fontSize: '13px', marginTop: '-20px'}}>
                        <span style={{fontSize: '15px'}}>*</span><span style={{fontWeight: 'lighter'}}>Passive speakers require an amplifier</span> - this can be added for a total price of £315
                    </p>
                    <a href="https://buy.stripe.com/14kcON3mz5c26WIcMP">
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '2px'}}><h1 className="projectName" style={{color: 'red'}}>[ RESERVE £265 ]</h1><p className="wordTag">[ RESERVE £265 ]</p></div>
                    </a>
                    {/* <p style={{textAlign: 'center', width: '500px', textTransform: 'none', color: 'white', fontWeight: 'lighter', fontSize: '13px'}}>
                        Passive speakers require an amplifier - this can be added for a total price of £315
                    </p> */}
                    <a href="https://book.stripe.com/3cs6qp6yL5c294Q8wy">
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '10px'}}><h1 className="projectName" style={{color: 'red'}}>[ RESERVE W/ AMPLIFIER £315 ]</h1><p className="wordTag">[ RESERVE W/ AMPLIFIER £315 ]</p></div>
                    </a>
                </div>
            </div>
            </MediaQuery>
        </section>
    );
};

export default WORKSHOP;