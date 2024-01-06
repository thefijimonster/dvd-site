import '../App.css'
import Background from './Background';
// import HorizontalCarousel from './HorizontalCarousel';
import HorizontalMarquee from './HorizontalMarquee';
import { Link } from 'react-router-dom';
import HorizontalTimeline from './HorizontalTimeline';
import HoverImage from './HoverImage';
import Back from './Back';
import ImagePlayer from './ImagePlayer';
import IMAGE2 from '../Assets/ABOUT1.png'
import IMAGE1 from '../Assets/BEAUS4.jpg'
import IMAGE3 from '../Assets/MOUNT2.png'
import IMAGE4 from '../Assets/BASEMENT2.jpg'
import IMAGE5 from '../Assets/DJ1.jpg'
import IMAGE6 from '../Assets/DJ2.png'
import IMAGE7 from '../Assets/TRAVSPRESENTS6.jpg'
import IMAGE8 from '../Assets/DS3.png'
import IMAGE9 from '../Assets/BEAUS10.jpg'
import IMAGE10 from '../Assets/BEAUS11.png'
import IMAGE11 from '../Assets/BASEMENT3.png'
import IMAGE12 from '../Assets/DVD_ROTATE2.gif'

import MediaQuery from 'react-responsive';

const AboutPage = () => {

    // const images = [IMAGE1, IMAGE1, IMAGE2, IMAGE6, IMAGE8, IMAGE10];
    // const images = [IMAGE1, IMAGE1, IMAGE1, IMAGE12]
    const intervalDuration = 600;

    return(
        <section>
            <MediaQuery minWidth={600}>
            <Background></Background>
            <div id="contentDiv">
                    <Back></Back>
                    <div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '75px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'center'}}>
                            {/* <img style={{width: '300px', mixBlendMode: 'lighten'}}  src={require('../Assets/DVD_ROTATE2.gif')}></img> */}
                            <p style={{width: '500px', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '28px', lineHeight: '19px', marginBottom: '0px', marginTop: '-20px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'red'}}>CURRENTLY LOOKING<br></br>FOR AN INTERNSHIP</p>
                            <p style={{width: '500px', textAlign: 'left', fontSize: '11px', marginTop: '10px'}}>
                                I am looking for a <span style={{color: 'red'}}>3/6-month internship</span> at a studio/company that is able to offer a inter-disciplinary role spanning design, culture and creative technology, starting late april/early march.
                                <br></br><br></br>
                                <span style={{color: 'white', fontSize: '12px', fontWeight: 'bold'}}>PLEASE CONTACT ME IF YOU HAVE ANY ENQURIES -> DAVIDCHEN02@ICLOUD.COM</span>
                            </p>
                            
                            {/* <p style={{width: '100%', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '24px', lineHeight: '19px', marginBottom: '30px', marginTop: '-20px', border: '1px solid white', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'red'}}>CLICK HERE TO<br></br>GET IN TOUCH</p> */}
                            {/* <ImagePlayer images={images} intervalDuration={intervalDuration} /> */}
                            <img style={{width: '500px', height: '400px', objectFit: 'cover'}} src={require('../Assets/BEAUS4.jpg')}></img>

                            {/* <h4 style={{backgroundColor: 'red', fontSize: '30px', marginTop: '-30px'}}>ABOUT ME</h4> */}
                            <div style={{display: 'flex'}}>
                                
                            <p style={{width: '500px', textAlign: 'left', fontSize: '11px'}}>
                                Currently studying <span style={{color: 'red', fontSize: '12px'}}>Design Engineering MEng [3rd year]</span> at the <span style={{color: 'red', fontSize: '12px', fontWeight: 'bold'}}>Dyson School of Design Engineering</span> at Imperial College London. I carry a holistic cross-disciplinary approach to my practise.
                            {/* <br></br>
                            <br></br>
                            GROWING UP IN A HOUSEHOLD WITH NO MUSIC, I ENSURED THAT THE REST OF MY LIFE WOULD BE FILLED WITH IT. */}
                            </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', width: '500px', justifyContent: 'center', flexDirection: 'row', marginTop: '-20px'}}>
                            <img style={{width: '140px', objectFit: 'contain', mixBlendMode: 'lighten', marginRight: '-20px'}} src={require('../Assets/DVD_ROTATE2.gif')}></img>
                            <img style={{width: '140px', objectFit: 'contain', filter: 'invert(100%)', mixBlendMode: 'lighten'}} src={require('../Assets/DYSON.png')}></img>
                            <img style={{width: '125px', marginLeft: '6px', objectFit: 'contain', filter: 'invert(100%)', mixBlendMode: 'lighten'}} src={require('../Assets/DYSON2.png')}></img>
                        </div>
                        <div style={{gap: '4px', textAlign: 'center', display: 'none', flexDirection: 'column', justifyContent: 'center', marginTop: '-20px', marginBottom: '20px'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '20px', marginTop: '14px', color: 'white', paddingTop: '2px', paddingBottom: '2px'}}>HARD SKILLS</h4>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>VISUAL AND CREATIVE DIRECTION</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], BEAUBEAU'S CHESS CLUB COLLABORATION [PERSONAL PROJECT], SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], TRAVSPRESENTS [FREELANCE], DVD [PERSONAL PROJECT], STEM - KANO PC [INTERNSHIP], SANDSCAPE [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ENTREPRENEURSHIP</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>HOMEMADE - PLACED 1ST NATIONALLY [INTERNATIONAL HACKATHON TO FIGHT COVID], NOTEHUB [FOUNDED COMPANY IN SIXTH FORM AND RAISED OVER £20K IN FUNDING], SPEAKER KIT WORKSHOPS [PERSONAL PROJECT WORKING TO BRING DIY AUDIO CULTURE TO YOUTH CULTURE IN LONDON]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ELECTRONICS ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], SANDSCAPE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], STEM PROJECTOR [INTERNSHIP], RHEX ROBOT [UNIVERSITY PROJECT], SELF-BALANCING SEGWAY [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>SPEAKER DESIGN + ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], BEAUBEAU'S CHESS CLUB COLLABORATION [PERSONAL PROJECT], COMMISIONED SPEAKER PROJECT W/ @ELIJAH [FREELANCE], SPEAKER COLLABORATION WITH SLAWN [PERSONAL PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>KEYSHOT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>BEOSCAPE BRIGHT - INDUSTRIAL DESIGN MODULE [UNIVERSITY PROJECT], SANDSCAPE [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>3D CAD MODELLING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], SANDSCAPE [UNIVERSITY PROJECT], LEOHACK 2022 HACKATHON [UNIVERSITY HACKATHON], CARBON NEUTRAL HOUSING - SUSTAINABLE DESIGN MODULE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], STEM PROJECTOR [INTERNSHIP]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MUSIC VIDEO DIRECTION</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], MERKY ACE [FREELANCE], RENZ [FREELANCE], TRAVSPRESENTS [FREELANCE], CADELL [FREELANCE], SQUINTZ [FREELANCE], GRANDMIXXER [FREELANCE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>VIDEOGRAPHY</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], TRAVSPRESENTS [FREELANCE], LIVING ROOM SESSIONS [PERSONAL PROJECT], STEM - KANO PC CAMPAIGN [INTERNSHIP], ROTATION POLICY EVENT VIDEOGRAPHY [FREELANCE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>PHOTOGRAPHY</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>ROTATION POLICY EVENT PHOTOGRAPHY [FREELANCE], SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], STEM - KANO PC [INTERNSHIP], SPEAKER DOCUMENTATION BOOKLET [PERSONAL PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'red', fontWeight: 'bold'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MECHATRONICS ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>STEM PROJECTOR [INTERNSHIP], SANDSCAPE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], LEOHACK 2022 HACKATHON [UNIVERSITY HACKATHON]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>UI/UX DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>TRAVSPRESENTS.TV, NOTEHUB, DVD, NATIONAL COVID HACKATHON [1ST PLACE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>FULL-STACK SOFTWARE DEVELOPMENT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>TRAVSPRESENTS.TV, NOTEHUB, DVD</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>DATA SCIENCE AND ML</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>HEART ATTACK PREDICTION, BEOSCAPE BRIGHT, NOTEHUB</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MOBILE APP DEVELOPMENT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>NOTEHUB, GEOG PRE-U APP, NATIONAL COVID HACKATHON [1ST PLACE], FUTURE LABS LTD MVP</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>GRAPHIC DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORD, SPEAKER DESIGN 001/002, TRAVSPRESENTS, DVD, STEM - KANO PC, SANDSCAPE</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>SUSTAINABLE SYSTEM DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ADDITIVE 3D MANUFACTURING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>WORKSHOP SKILLS</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>RAPID PROTOTYPING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        </div>
                        <div style={{gap: '0px', textAlign: 'center', display: 'none', flexDirection: 'column', justifyContent: 'center', marginTop: '-16px', marginBottom: '40px'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '20px'}}>SOFT SKILLS</h4>
                        <p style={{fontSize: '12px', marginTop: '-16px'}}>PROBLEM-SOLVING</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>ETHICAL AWARENESS</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>ADAPTABILITY</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>CULTURAL SENSITIVITY</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>LEADERSHIP</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>TEAMWORK</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>COMMUNICATION</p>
                        </div>
                        
                        </div>
                    </div>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={500} maxWidth={600}>
            <Background></Background>
            <div id="contentDiv">
                    <Back></Back>
                    <div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '75px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'center'}}>
                            {/* <img style={{width: '300px', mixBlendMode: 'lighten'}}  src={require('../Assets/DVD_ROTATE2.gif')}></img> */}
                            <p style={{width: '500px', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '28px', lineHeight: '19px', marginBottom: '0px', marginTop: '-20px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'red'}}>CURRENTLY LOOKING<br></br>FOR AN INTERNSHIP</p>
                            <p style={{width: '500px', textAlign: 'left', fontSize: '11px', marginTop: '10px'}}>
                                I am looking for a <span style={{color: 'red'}}>3/6-month internship</span> at a studio/company that is able to offer a inter-disciplinary role spanning design, culture and creative technology, starting late april/early march.
                                <br></br><br></br>
                                <span style={{color: 'white', fontSize: '12px', fontWeight: 'bold'}}>PLEASE CONTACT ME IF YOU HAVE ANY ENQURIES -> DAVIDCHEN02@ICLOUD.COM</span>
                            </p>
                            
                            {/* <p style={{width: '100%', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '24px', lineHeight: '19px', marginBottom: '30px', marginTop: '-20px', border: '1px solid white', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'red'}}>CLICK HERE TO<br></br>GET IN TOUCH</p> */}
                            {/* <ImagePlayer images={images} intervalDuration={intervalDuration} /> */}
                            <img style={{width: '500px', height: '400px', objectFit: 'cover'}} src={require('../Assets/BEAUS4.jpg')}></img>

                            {/* <h4 style={{backgroundColor: 'red', fontSize: '30px', marginTop: '-30px'}}>ABOUT ME</h4> */}
                            <div style={{display: 'flex'}}>
                                
                            <p style={{width: '500px', textAlign: 'left', fontSize: '11px'}}>
                                Currently studying <span style={{color: 'red', fontSize: '12px'}}>Design Engineering MEng [3rd year]</span> at the <span style={{color: 'red', fontSize: '12px', fontWeight: 'bold'}}>Dyson School of Design Engineering</span> at Imperial College London. I carry a holistic cross-disciplinary approach to my practise.
                            {/* <br></br>
                            <br></br>
                            GROWING UP IN A HOUSEHOLD WITH NO MUSIC, I ENSURED THAT THE REST OF MY LIFE WOULD BE FILLED WITH IT. */}
                            </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', width: '500px', justifyContent: 'center', flexDirection: 'row', marginTop: '-20px'}}>
                            <img style={{width: '140px', objectFit: 'contain', mixBlendMode: 'lighten', marginRight: '-20px'}} src={require('../Assets/DVD_ROTATE2.gif')}></img>
                            <img style={{width: '140px', objectFit: 'contain', filter: 'invert(100%)', mixBlendMode: 'lighten'}} src={require('../Assets/DYSON.png')}></img>
                            <img style={{width: '125px', marginLeft: '6px', objectFit: 'contain', filter: 'invert(100%)', mixBlendMode: 'lighten'}} src={require('../Assets/DYSON2.png')}></img>
                        </div>
                        <div style={{gap: '4px', textAlign: 'center', display: 'none', flexDirection: 'column', justifyContent: 'center', marginTop: '-20px', marginBottom: '20px'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '20px', marginTop: '14px', color: 'white', paddingTop: '2px', paddingBottom: '2px'}}>HARD SKILLS</h4>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>VISUAL AND CREATIVE DIRECTION</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], BEAUBEAU'S CHESS CLUB COLLABORATION [PERSONAL PROJECT], SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], TRAVSPRESENTS [FREELANCE], DVD [PERSONAL PROJECT], STEM - KANO PC [INTERNSHIP], SANDSCAPE [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ENTREPRENEURSHIP</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>HOMEMADE - PLACED 1ST NATIONALLY [INTERNATIONAL HACKATHON TO FIGHT COVID], NOTEHUB [FOUNDED COMPANY IN SIXTH FORM AND RAISED OVER £20K IN FUNDING], SPEAKER KIT WORKSHOPS [PERSONAL PROJECT WORKING TO BRING DIY AUDIO CULTURE TO YOUTH CULTURE IN LONDON]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ELECTRONICS ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], SANDSCAPE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], STEM PROJECTOR [INTERNSHIP], RHEX ROBOT [UNIVERSITY PROJECT], SELF-BALANCING SEGWAY [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>SPEAKER DESIGN + ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], BEAUBEAU'S CHESS CLUB COLLABORATION [PERSONAL PROJECT], COMMISIONED SPEAKER PROJECT W/ @ELIJAH [FREELANCE], SPEAKER COLLABORATION WITH SLAWN [PERSONAL PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>KEYSHOT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>BEOSCAPE BRIGHT - INDUSTRIAL DESIGN MODULE [UNIVERSITY PROJECT], SANDSCAPE [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>3D CAD MODELLING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], SANDSCAPE [UNIVERSITY PROJECT], LEOHACK 2022 HACKATHON [UNIVERSITY HACKATHON], CARBON NEUTRAL HOUSING - SUSTAINABLE DESIGN MODULE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], STEM PROJECTOR [INTERNSHIP]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MUSIC VIDEO DIRECTION</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], MERKY ACE [FREELANCE], RENZ [FREELANCE], TRAVSPRESENTS [FREELANCE], CADELL [FREELANCE], SQUINTZ [FREELANCE], GRANDMIXXER [FREELANCE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>VIDEOGRAPHY</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], TRAVSPRESENTS [FREELANCE], LIVING ROOM SESSIONS [PERSONAL PROJECT], STEM - KANO PC CAMPAIGN [INTERNSHIP], ROTATION POLICY EVENT VIDEOGRAPHY [FREELANCE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>PHOTOGRAPHY</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>ROTATION POLICY EVENT PHOTOGRAPHY [FREELANCE], SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], STEM - KANO PC [INTERNSHIP], SPEAKER DOCUMENTATION BOOKLET [PERSONAL PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'red', fontWeight: 'bold'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MECHATRONICS ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>STEM PROJECTOR [INTERNSHIP], SANDSCAPE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], LEOHACK 2022 HACKATHON [UNIVERSITY HACKATHON]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>UI/UX DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>TRAVSPRESENTS.TV, NOTEHUB, DVD, NATIONAL COVID HACKATHON [1ST PLACE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>FULL-STACK SOFTWARE DEVELOPMENT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>TRAVSPRESENTS.TV, NOTEHUB, DVD</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>DATA SCIENCE AND ML</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>HEART ATTACK PREDICTION, BEOSCAPE BRIGHT, NOTEHUB</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MOBILE APP DEVELOPMENT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>NOTEHUB, GEOG PRE-U APP, NATIONAL COVID HACKATHON [1ST PLACE], FUTURE LABS LTD MVP</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>GRAPHIC DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORD, SPEAKER DESIGN 001/002, TRAVSPRESENTS, DVD, STEM - KANO PC, SANDSCAPE</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>SUSTAINABLE SYSTEM DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ADDITIVE 3D MANUFACTURING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>WORKSHOP SKILLS</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>RAPID PROTOTYPING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        </div>
                        <div style={{gap: '0px', textAlign: 'center', display: 'none', flexDirection: 'column', justifyContent: 'center', marginTop: '-16px', marginBottom: '40px'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '20px'}}>SOFT SKILLS</h4>
                        <p style={{fontSize: '12px', marginTop: '-16px'}}>PROBLEM-SOLVING</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>ETHICAL AWARENESS</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>ADAPTABILITY</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>CULTURAL SENSITIVITY</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>LEADERSHIP</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>TEAMWORK</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>COMMUNICATION</p>
                        </div>
                        
                        </div>
                    </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <Background></Background>
            <div id="contentDiv">
                    <Back></Back>
                    <div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '75px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'center'}}>
                            {/* <img style={{width: '300px', mixBlendMode: 'lighten'}}  src={require('../Assets/DVD_ROTATE2.gif')}></img> */}
                            <p style={{width: '400px', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '28px', lineHeight: '19px', marginBottom: '0px', marginTop: '-20px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'red'}}>CURRENTLY LOOKING<br></br>FOR AN INTERNSHIP</p>
                            <p style={{width: '400px', textAlign: 'left', fontSize: '11px', marginTop: '10px'}}>
                                I am looking for a <span style={{color: 'red'}}>3/6-month internship</span> at a studio/company that is able to offer a inter-disciplinary role spanning design, culture and creative technology, starting late april/early march.
                                <br></br><br></br>
                                <span style={{color: 'white', fontSize: '12px', fontWeight: 'bold'}}>PLEASE CONTACT ME IF YOU HAVE ANY ENQURIES -> DAVIDCHEN02@ICLOUD.COM</span>
                            </p>
                            
                            {/* <p style={{width: '100%', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '24px', lineHeight: '19px', marginBottom: '30px', marginTop: '-20px', border: '1px solid white', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'red'}}>CLICK HERE TO<br></br>GET IN TOUCH</p> */}
                            {/* <ImagePlayer images={images} intervalDuration={intervalDuration} /> */}
                            <img style={{width: '400px', height: '300px', objectFit: 'cover'}} src={require('../Assets/BEAUS4.jpg')}></img>

                            {/* <h4 style={{backgroundColor: 'red', fontSize: '30px', marginTop: '-30px'}}>ABOUT ME</h4> */}
                            <div style={{display: 'flex'}}>
                                
                            <p style={{width: '400px', textAlign: 'left', fontSize: '11px'}}>
                                Currently studying <span style={{color: 'red', fontSize: '12px'}}>Design Engineering MEng [3rd year]</span> at the <span style={{color: 'red', fontSize: '12px', fontWeight: 'bold'}}>Dyson School of Design Engineering</span> at Imperial College London. I carry a holistic cross-disciplinary approach to my practise.
                            {/* <br></br>
                            <br></br>
                            GROWING UP IN A HOUSEHOLD WITH NO MUSIC, I ENSURED THAT THE REST OF MY LIFE WOULD BE FILLED WITH IT. */}
                            </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', width: '400px', justifyContent: 'center', flexDirection: 'row', marginTop: '-20px'}}>
                            <img style={{width: '140px', objectFit: 'contain', mixBlendMode: 'lighten', marginRight: '-20px'}} src={require('../Assets/DVD_ROTATE2.gif')}></img>
                            <img style={{width: '140px', objectFit: 'contain', filter: 'invert(100%)', mixBlendMode: 'lighten'}} src={require('../Assets/DYSON.png')}></img>
                            <img style={{width: '125px', marginLeft: '6px', objectFit: 'contain', filter: 'invert(100%)', mixBlendMode: 'lighten'}} src={require('../Assets/DYSON2.png')}></img>
                        </div>
                        <div style={{gap: '4px', textAlign: 'center', display: 'none', flexDirection: 'column', justifyContent: 'center', marginTop: '-20px', marginBottom: '20px'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '20px', marginTop: '14px', color: 'white', paddingTop: '2px', paddingBottom: '2px'}}>HARD SKILLS</h4>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>VISUAL AND CREATIVE DIRECTION</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], BEAUBEAU'S CHESS CLUB COLLABORATION [PERSONAL PROJECT], SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], TRAVSPRESENTS [FREELANCE], DVD [PERSONAL PROJECT], STEM - KANO PC [INTERNSHIP], SANDSCAPE [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ENTREPRENEURSHIP</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>HOMEMADE - PLACED 1ST NATIONALLY [INTERNATIONAL HACKATHON TO FIGHT COVID], NOTEHUB [FOUNDED COMPANY IN SIXTH FORM AND RAISED OVER £20K IN FUNDING], SPEAKER KIT WORKSHOPS [PERSONAL PROJECT WORKING TO BRING DIY AUDIO CULTURE TO YOUTH CULTURE IN LONDON]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ELECTRONICS ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], SANDSCAPE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], STEM PROJECTOR [INTERNSHIP], RHEX ROBOT [UNIVERSITY PROJECT], SELF-BALANCING SEGWAY [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>SPEAKER DESIGN + ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], BEAUBEAU'S CHESS CLUB COLLABORATION [PERSONAL PROJECT], COMMISIONED SPEAKER PROJECT W/ @ELIJAH [FREELANCE], SPEAKER COLLABORATION WITH SLAWN [PERSONAL PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>KEYSHOT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>BEOSCAPE BRIGHT - INDUSTRIAL DESIGN MODULE [UNIVERSITY PROJECT], SANDSCAPE [UNIVERSITY PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>3D CAD MODELLING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], SANDSCAPE [UNIVERSITY PROJECT], LEOHACK 2022 HACKATHON [UNIVERSITY HACKATHON], CARBON NEUTRAL HOUSING - SUSTAINABLE DESIGN MODULE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], STEM PROJECTOR [INTERNSHIP]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MUSIC VIDEO DIRECTION</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], MERKY ACE [FREELANCE], RENZ [FREELANCE], TRAVSPRESENTS [FREELANCE], CADELL [FREELANCE], SQUINTZ [FREELANCE], GRANDMIXXER [FREELANCE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>VIDEOGRAPHY</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORDS CAMPAIGN [FREELANCE], TRAVSPRESENTS [FREELANCE], LIVING ROOM SESSIONS [PERSONAL PROJECT], STEM - KANO PC CAMPAIGN [INTERNSHIP], ROTATION POLICY EVENT VIDEOGRAPHY [FREELANCE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>PHOTOGRAPHY</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>ROTATION POLICY EVENT PHOTOGRAPHY [FREELANCE], SPEAKER ENGINEERING PROJECT [PERSONAL PROJECT], STEM - KANO PC [INTERNSHIP], SPEAKER DOCUMENTATION BOOKLET [PERSONAL PROJECT]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'red', fontWeight: 'bold'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MECHATRONICS ENGINEERING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>STEM PROJECTOR [INTERNSHIP], SANDSCAPE [UNIVERSITY PROJECT], BEOSCAPE BRIGHT [UNIVERSITY PROJECT], LEOHACK 2022 HACKATHON [UNIVERSITY HACKATHON]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>UI/UX DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>TRAVSPRESENTS.TV, NOTEHUB, DVD, NATIONAL COVID HACKATHON [1ST PLACE]</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>FULL-STACK SOFTWARE DEVELOPMENT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>TRAVSPRESENTS.TV, NOTEHUB, DVD</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>DATA SCIENCE AND ML</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>HEART ATTACK PREDICTION, BEOSCAPE BRIGHT, NOTEHUB</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>MOBILE APP DEVELOPMENT</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>NOTEHUB, GEOG PRE-U APP, NATIONAL COVID HACKATHON [1ST PLACE], FUTURE LABS LTD MVP</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>GRAPHIC DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>OBLIGATED RECORD, SPEAKER DESIGN 001/002, TRAVSPRESENTS, DVD, STEM - KANO PC, SANDSCAPE</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>SUSTAINABLE SYSTEM DESIGN</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>ADDITIVE 3D MANUFACTURING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>WORKSHOP SKILLS</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p className='projectName' style={{fontSize: '12px', marginTop: '-16px', color: 'red', fontWeight: 'bold'}}>RAPID PROTOTYPING</p>
                            <p style={{marginTop: '-16px', fontSize: '12px', width: '500px', backgroundColor: 'red', color: 'black', fontWeight: 'bold'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                        </div>
                        </div>
                        <div style={{gap: '0px', textAlign: 'center', display: 'none', flexDirection: 'column', justifyContent: 'center', marginTop: '-16px', marginBottom: '40px'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '20px'}}>SOFT SKILLS</h4>
                        <p style={{fontSize: '12px', marginTop: '-16px'}}>PROBLEM-SOLVING</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>ETHICAL AWARENESS</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>ADAPTABILITY</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>CULTURAL SENSITIVITY</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>LEADERSHIP</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>TEAMWORK</p>
                        <p style={{fontSize: '12px', marginTop: '-12px'}}>COMMUNICATION</p>
                        </div>
                        
                        </div>
                    </div>
            </div>
            </MediaQuery>
        </section>
    );
}

export default AboutPage;