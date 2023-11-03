import '../App.css'
import Background from './Background';
// import HorizontalCarousel from './HorizontalCarousel';
import HorizontalMarquee from './HorizontalMarquee';
import { Link } from 'react-router-dom';
import HorizontalTimeline from './HorizontalTimeline';
import HoverImage from './HoverImage';
import Back from './Back';

const AboutPage = () => {
    return(
      <section>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <img className="galleryImg" style={{width: '240px'}}  src={require('../Assets/ABOUT3.png')}></img>
                        {/* <h4 style={{backgroundColor: 'red', fontSize: '30px', marginTop: '-30px'}}>ABOUT ME</h4> */}
                        <p style={{width: '500px', textAlign: 'center', paddingLeft: '20px', fontSize: '11px', marginTop: '20px'}}>
                            Currently studying <span style={{color: 'red'}}>Design Engineering MEng [3rd year]</span> at the Dyson School of Design Engineering at Imperial College London.
                            I carry a holistic cross-disciplinary approach to my passion of bridging design, creative tech, engineering and culture.
                        <br></br>
                        <br></br>
                        I am looking for a <span style={{color: 'red'}}>6-month internship</span> at a studio/company that is able to offer a inter-disciplinary role spanning design, culture and creative technology.
                        {/* <br></br>
                        <br></br>
                        GROWING UP IN A HOUSEHOLD WITH NO MUSIC, I ENSURED THAT THE REST OF MY LIFE WOULD BE FILLED WITH IT. */}
                        </p>
                    </div>
                    <div style={{gap: '12px', textAlign: 'center', display: 'none', flexDirection: 'column', justifyContent: 'center', marginTop: '-12px'}}>
                    <h4 style={{backgroundColor: 'red', fontSize: '20px', marginTop: '14px'}}>HARD SKILLS</h4>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>VISUAL AND CREATIVE DIRECTION</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>OBLIGATED RECORDS, SPEAKER DESIGN 001/002, TRAVSPRESENTS, DVD, STEM - KANO PC, SANDSCAPE</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>ELECTRONICS ENGINEERING</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>SPEAKER DESIGN + ENGINEERING</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>SPEAKER DESIGN 001, SPEAKER DESIGN 002</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>KEYSHOT</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>BEOSCAPE BRIGHT, SANDSCAPE</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>3D CAD MODELLING</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>SPEAKER DESIGN 001/002, SANDSCAPE, LEOHACK 2022 HACKATHON, CARBON NEUTRAL HOUSING, BEOSCAPE BRIGHT, STEM PROJECTOR</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>MUSIC VIDEO DIRECTION</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>OBLIGATED RECORDS 001/002, MERKY ACE, RENZ, CADELL, SQUINTZ, GRANDMIXXER</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>VIDEOGRAPHY</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>OBLIGATED RECORDS 001/002, TRAVSPRESENTS, LIVING ROOM SESSIONS, STEM - KANO PC</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>PRODUCT AND EVENT PHOTOGRAPHY</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>ROTATION POLICY, SPEAKER DESIGN 001/002, STEM - KANO PC</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>MECHATRONICS ENGINEERING</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>STEM PROJECTOR, SANDSCAPE, BEOSCAPE BRIGHT, LEOHACK 2022 HACKATHON, </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>UI/UX DESIGN</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>TRAVSPRESENTS.TV, NOTEHUB, DVD, NATIONAL COVID HACKATHON [1ST PLACE]</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>FULL-STACK SOFTWARE DEVELOPMENT</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>TRAVSPRESENTS.TV, NOTEHUB, DVD</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>DATA SCIENCE AND ML</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>HEART ATTACK PREDICTION, BEOSCAPE BRIGHT, NOTEHUB</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>MOBILE APP DEVELOPMENT</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>NOTEHUB, GEOG PRE-U APP, NATIONAL COVID HACKATHON [1ST PLACE], FUTURE LABS LTD MVP</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>GRAPHIC DESIGN</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>OBLIGATED RECORD, SPEAKER DESIGN 001/002, TRAVSPRESENTS, DVD, STEM - KANO PC, SANDSCAPE</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>SUSTAINABLE SYSTEM DESIGN</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>ADDITIVE 3D MANUFACTURING</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>WOODWORKING</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className='projectName' style={{fontSize: '12px', marginTop: '-16px'}}>RAPID PROTOTYPING</p>
                        <p className="wordTag" style={{marginTop: '-16px', fontSize: '12px'}}>SPEAKER DESIGN 001/002, SANDSCAPE, BEOSCAPE BRIGHT, </p>
                    </div>
                    </div>
                    <div style={{gap: '0px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '-16px', marginBottom: '40px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '20px'}}>SOFT SKILLS</h4>
                    <p style={{fontSize: '12px', marginTop: '-16px'}}>PROBLEM-SOLVING</p>
                    <p style={{fontSize: '12px', marginTop: '-12px'}}>ETHICAL AWARENESS</p>
                    <p style={{fontSize: '12px', marginTop: '-12px'}}>ADAPTABILITY</p>
                    <p style={{fontSize: '12px', marginTop: '-12px'}}>CULTURAL SENSITIVITY</p>
                    <p style={{fontSize: '12px', marginTop: '-12px'}}>LEADERSHIP</p>
                    <p style={{fontSize: '12px', marginTop: '-12px'}}>TEAMWORK</p>
                    <p style={{fontSize: '12px', marginTop: '-12px'}}>COMMUNICATION</p> */}
                    </div>
                    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;