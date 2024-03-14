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
            <MediaQuery minWidth={401}>
            <div id="contentDiv" style={{backgroundColor: 'black'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '-50px',  paddingRight: '8px', paddingLeft: '8px'}}>
                    
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-100px'}}>
                        <img src={WORKSHOP1} style={{mixBlendMode: 'exclusion', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', width: '350px'}}>
                        <p style={{textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            UPCOMING LOUDSPEAKER BUILDING WORKSHOP
                            <br></br><br></br>
                            PRE-SALE OPENS APRIL 1ST
                            <br></br><br></br>
                            £295 [ONE TIME PAYMENT, NO HIDDEN FEES]
                            <br></br><br></br>
                            SPACES LIMITED TO TEN PARTICIPANTS
                        </p>
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={400}>
            <div id="contentDiv" style={{backgroundColor: 'black'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '-50px',  paddingRight: '8px', paddingLeft: '8px'}}>
                    
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-100px'}}>
                        <img src={WORKSHOP1} style={{mixBlendMode: 'exclusion', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', width: '350px'}}>
                        <p style={{textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            UPCOMING LOUDSPEAKER BUILDING WORKSHOP
                            <br></br><br></br>
                            PRE-SALE OPENS APRIL 1ST
                            <br></br><br></br>
                            £295 [ONE TIME PAYMENT, NO HIDDEN FEES]
                            <br></br><br></br>
                            SPACES LIMITED TO TEN PARTICIPANTS
                        </p>
                    </div>
                </div>
            </div>
            </MediaQuery>
        </section>
    );
};

export default WORKSHOP;