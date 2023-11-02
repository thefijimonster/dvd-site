import '../App.css'
import Background from './Background';
import SANDSCAPE1 from '../Assets/SANDSCAPE1.gif';
import SANDSCAPE3 from '../Assets/SANDSCAPE3.png';
import SANDSCAPE4 from '../Assets/SANDSCAPE4.png';
import SANDSCAPE5 from '../Assets/SANDSCAPE5.png';
import SANDSCAPE6 from '../Assets/SANDSCAPE6.png';
import SANDSCAPE7 from '../Assets/SANDSCAPE7.png';
import SANDSCAPE8 from '../Assets/SANDSCAPE8.png';
import Back from './Back';

const SNDSCPE = () => {
    const videoPath = 'src/Assets/SANDSCAPE1.mp4';

    return(
        <section>
            {/* <Background></Background> */}
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px'}}>
                    {/* <video style={{ width: '600px', mixBlendMode: 'exclusion'}} autoPlay loop muted className="looping-video">
                        <source src={SANDSCAPE1} type="video/mp4" />
                    </video> */}
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>SANDSCAPE</h4> */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '-50px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '600px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            CREATING AN INTERACTION-CENTERED SYSTEM EXCERCISING AN APPLICATION OF PHYSICAL COMPUTING
                            <br></br>
                            <span style={{color: 'white', fontSize: '14px'}}>[ UNIVERSITY PROJECT ]</span>
                        </p>
                    </div>
                    <img src={SANDSCAPE1} style={{mixBlendMode: 'exclusion', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                    <p style={{width: '500px', textAlign: 'center'}}>JAPANESE DRY GARDEN [KARESANSUI] TEMPLES ARE EPHEMERAL IN NATURE, DOWN TO THE RAKED SAND AND POSITIONING OF ROCKS, WHICH SYMBOLISE NATURAL ELEMENTS. THIS PROJECT WAS A EXPLORATION OF INTERACTION-INDUCED METAMORPHOSIS IN A TRADITIONALLY UNCHANGING ENVIRONMENT.</p>
                    {/* <h3 style={{marginTop: '20px'}}>[USER INTERACTION]</h3> */}
                    <div style={{display: 'flex', columnGap: '20px', marginTop: '10px', marginBottom: '20px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img className='invert' src={SANDSCAPE3} style={{mixBlendMode: 'lighten', width: '180px'}}></img>
                            <p style={{textAlign: 'center', width: '180px', marginTop: '25px'}}>PLACE OBJECT IN SANDBOX</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img className='invert' src={SANDSCAPE4} style={{mixBlendMode: 'lighten', width: '160px'}}></img>
                            <p style={{textAlign: 'center', width: '180px', marginTop: '15px'}}>SANDSCAPE DETECTS OBJECT AND PROCEEDS TO DRAW CONCENTRIC SHAPES AROUND THE OBJECT.</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img className='invert' src={SANDSCAPE5} style={{mixBlendMode: 'lighten', width: '180px'}}></img>
                            <p style={{textAlign: 'center', width: '180px', marginTop: '25px'}}>REMOVE OBJECT AND MOVE OR PLACE A NEW OBJECT IN SANDBOX</p>
                        </div>
                    </div>
                    {/* <h3 style={{marginTop: '10px', marginBottom: '20px', width: '150px', textAlign: 'center'}}>[HOW IT WORKS]</h3> */}
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', marginBottom: '50px'}}>
                        <img className='galleryImg' src={SANDSCAPE8} style={{mixBlendMode: 'lighten', width: '250px', filter: 'grayscale(100%) contrast(80%)'}}></img>
                        <img className='galleryImg' src={SANDSCAPE7} style={{mixBlendMode: 'lighten', width: '250px', filter: 'grayscale(100%) contrast(80%)'}}></img>
                        <img className='galleryImg' src={SANDSCAPE6} style={{mixBlendMode: 'lighten', width: '250px', filter: 'grayscale(100%) contrast(80%)'}}></img>
                        {/* <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img className='bw-image' src={SANDSCAPE8} style={{mixBlendMode: 'lighten', width: '100px'}}></img>
                            <p style={{textAlign: 'left', width: '380px', marginLeft: '20px', lineHeight: '14px'}}>
                                <span style={{color: 'red'}}>VIDEO</span> WAS STREAMED LOCALLY FROM AN <span style={{color: 'red'}}>ESP32 CAMERA</span>. VIDEO WAS PROCESSED USING <span style={{color: 'red'}}>SCIKIT-IMAGE</span> FOR EDGE-DETECTION.
                                POST-PROCESSED IMAGE WAS <span style={{color: 'red'}}>CONVERTED TO AN SVG</span> WHICH WAS THEN PASSED TO THE GRBL INTERPRETER.
                                THE <span style={{color: 'red'}}>GRBL INTERPRETER</span> CREATES A PATH IN <span style={{color: 'red'}}>GCODE</span> FOR THE STEPPER MOTORS TO FOLLOW.
                            </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img className='bw-image' src={SANDSCAPE7} style={{mixBlendMode: 'lighten', width: '100px'}}></img>
                            <p style={{textAlign: 'left', width: '380px', marginLeft: '20px', lineHeight: '14px'}}>
                                THE XY-GANTRY CONSISTS OF <span style={{color: 'red'}}>2 ALUMINIUM EXTRUSIONS</span>, GT2 BELTS AND <span style={{color: 'red'}}>STEPPER MOTORS</span>.
                                THE MOTORS WERE DRIVEN BY <span style={{color: 'red'}}>MOTOR DRIVERS</span> THAT WERE CONNECTED TO AN <span style={{color: 'red'}}>ARDUINO UNO</span> VIA A CNC SHIELD.
                                THIS ALLOWED THE SPEED AND DIRECTION OF THE MOTORS TO BE CONTROLLED.
                            </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '40px', marginTop: '5px'}}>
                            <img className='bw-image' src={SANDSCAPE6} style={{mixBlendMode: 'lighten', width: '100px'}}></img>
                            <p style={{textAlign: 'left', width: '380px', marginLeft: '20px', lineHeight: '14px'}}>
                                A <span style={{color: 'red'}}>FERROMAGNETIC STEEL BALL</span> ON TOP OF THE SAND <span style={{color: 'red'}}>FOLLOWED</span> THE PATH OF A <span style={{color: 'red'}}>NEODYMIUM MAGNET</span> ATTACHED TO THE GANTRY. 
                                THE <span style={{color: 'red'}}>GCODE</span> WAS <span style={{color: 'red'}}>COMMUNICATED</span> TO THE STEPPER MOTORS VIA THE ARDUINO USING <span style={{color: 'red'}}>‘UNIVERSAL GCODE PLATFORM’</span>.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SNDSCPE;