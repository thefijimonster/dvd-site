import {React} from "react";
import "../App.css";
import '../index.css';
import MediaQuery from 'react-responsive'
import { Link } from "react-router-dom";
import Back from "./Back";
import SANDSCAPE1 from '../Assets/SANDSCAPE1.gif';
import SANDSCAPE3 from '../Assets/SANDSCAPE3.png';
import SANDSCAPE4 from '../Assets/SANDSCAPE4.png';
import SANDSCAPE5 from '../Assets/SANDSCAPE5.png';
import SANDSCAPE6 from '../Assets/SANDSCAPE6.png';
import SANDSCAPE7 from '../Assets/SANDSCAPE7.png';
import SANDSCAPE8 from '../Assets/SANDSCAPE8.png';
import TEMPLATE from '../Assets/ROTATE-BOOKLET.gif'

const videoPath = 'src/Assets/SANDSCAPE1.mp4';

const STORE = () => {
    return(
    <section>
            {/* <Background></Background> */}
            <MediaQuery minWidth={501}>
            <div id="contentDiv" style={{backgroundColor: '#181818'}}>
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
                    {/* <video style={{ width: '600px', mixBlendMode: 'exclusion'}} autoPlay loop muted className="looping-video">
                        <source src={SANDSCAPE1} type="video/mp4" />
                    </video> */}
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>SANDSCAPE</h4> */}
                    {/* <div style={{width: '100%'}}> */}
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: '-35px'}}>
                            
                            <img src={TEMPLATE} style={{mixBlendMode: 'lighten', marginLeft: '-100px', objectFit: 'cover', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}></img>
                            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '-100px'}}>
                                <p style={{marginTop: '0px', textAlign: 'left', color: 'white', fontWeight: 'normal', fontSize: '20px', lineHeight: '24px'}}>
                                    [PROCESS BOOKLET]
                                </p>
                                <p style={{marginTop: '-20px', textAlign: 'left', color: 'white', fontWeight: 'normal', fontSize: '20px', lineHeight: '24px'}}>
                                    £18
                                </p>
                                <p style={{width: '200px', textAlign: 'left', marginTop: '-10px', fontSize: '10px', lineHeight: '10px'}}>
                                    HAND-MADE PROCESS BOOKLET DETAILING AND DOCUMENTING HOW THE LOUDSPEAKER SYSTEM WAS CREATED
                                    <br></br>
                                    <br></br>
                                    READ-ONLY COPY AVAILABLE AT BEAUBEAU'S CAFE
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    A4 >160GSM PAPER ATTACHED WITH <br></br>X2 M4 NUTS AND BOLTS
                                    {/* <p style={{fontWeight: 'bold', fontSize: '10px', lineHeight: '10px'}}>WHO TF YOU KNOW USING NUTS & BOLTS ON PAPER</p> */}

                                </p>
                                <a href="https://buy.stripe.com/8wMaGF6yL5c2a8U5kk">
                                    <p style={{backgroundColor: 'red', color: 'white', fontSize: '16px'}}>BUY NOW</p>
                                </a>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <p style={{width: '250px', textAlign: 'center', fontSize: '12px', lineHeight: '10px'}}>PROCESS BOOKLET DETAILING AND DOCUMENTING HOW THE LOUDSPEAKER SYSTEM WAS CREATED</p>
                    <p style={{backgroundColor: 'red', color: 'white', fontSize: '16px'}}>BUY NOW</p> */}
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    {/* <video style={{ width: '600px', mixBlendMode: 'exclusion'}} autoPlay loop muted className="looping-video">
                        <source src={SANDSCAPE1} type="video/mp4" />
                    </video> */}
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>SANDSCAPE</h4> */}
                    {/* <div style={{width: '100%'}}> */}
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
                            
                            <img src={TEMPLATE} style={{mixBlendMode: 'normal', objectFit: 'cover', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}></img>
                            <div style={{display: 'flex', flexDirection: 'column', marginTop: '-30px'}}>
                                <p style={{marginTop: '0px', textAlign: 'left', color: 'white', fontWeight: 'normal', fontSize: '20px', lineHeight: '24px'}}>
                                    [PROCESS BOOKLET]
                                </p>
                                <p style={{marginTop: '-20px', textAlign: 'left', color: 'white', fontWeight: 'normal', fontSize: '20px', lineHeight: '24px'}}>
                                    £18
                                </p>
                                <p style={{width: '300px', textAlign: 'left', marginTop: '-10px', fontSize: '10px', lineHeight: '10px'}}>
                                    HAND-MADE PROCESS BOOKLET DETAILING AND DOCUMENTING HOW THE LOUDSPEAKER SYSTEM WAS CREATED
                                    <br></br>
                                    <br></br>
                                    READ-ONLY COPY AVAILABLE AT BEAUBEAU'S CAFE
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    A4 >160GSM PAPER ATTACHED WITH <br></br>X2 M4 NUTS AND BOLTS
                                    <p style={{fontWeight: 'bold', fontSize: '10px', lineHeight: '10px'}}>WHO TF YOU KNOW USING NUTS & BOLTS ON PAPER</p>

                                </p>
                                <a href="https://buy.stripe.com/8wMaGF6yL5c2a8U5kk">
                                    <p style={{backgroundColor: 'red', color: 'white', fontSize: '16px', border: '1px solid white'}}>BUY NOW</p>
                                </a>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <p style={{width: '250px', textAlign: 'center', fontSize: '12px', lineHeight: '10px'}}>PROCESS BOOKLET DETAILING AND DOCUMENTING HOW THE LOUDSPEAKER SYSTEM WAS CREATED</p>
                    <p style={{backgroundColor: 'red', color: 'white', fontSize: '16px'}}>BUY NOW</p> */}
                </div>
            </div>
            </MediaQuery>
        </section>
    );
};

export default STORE;