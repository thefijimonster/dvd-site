import '../App.css'
import Background from './Background';
import Back from './Back';

import STEM1 from '../Assets/STEM1.png'
import STEM2 from '../Assets/STEM2.png'
import STEM3 from '../Assets/STEM3.png'
import STEM4 from '../Assets/STEM4.png'
import STEM5 from '../Assets/STEM5.png'
import STEM6 from '../Assets/STEM6.png'
import STEM7 from '../Assets/STEM7.gif'
import STEM8 from '../Assets/STEM8.gif'

import MediaQuery from 'react-responsive';

const STEMPLYR = () => {
    return(
        <section>
            <MediaQuery minWidth={600}>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px', marginBottom: '40px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>STEM PROJECTOR</h4> */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '10px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '600px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            MODELLED, CREATED AND VALIDATED A WORKING LEG LINKAGE MECHANISM FOR THE STEM PROJECTOR EVT2
                            <br></br>
                            <span style={{color: 'white', fontSize: '14px'}}>[ INTERNSHIP ]</span>
                        </p>
                    </div>
                    {/* <p style={{width: '500px', textAlign: 'center', marginTop: '-20px'}}>During my time as a design engineer intern at STEM, I created a working linkage system in a size-constrained system for the Stem Projector.
                    </p> */}
                    <div style={{display: 'flex', height: '500px', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '-160px'}}>
                        {/* <img style={{height: '180px', marginTop: '10px'}} src={STEM1}></img> */}
                        <img className='galleryImg' style={{width: '300px', marginTop: '10px'}} src={STEM2}></img>
                    </div>
                    <p style={{width: '500px', textAlign: 'center', marginTop: '-130px'}}>During my time as a design engineer intern at <a href="https://www.stemplayer.com/stemprojector"><span style={{fontSize: '14px', textDecoration: 'underline', color: 'red', fontWeight: 'bolder'}}>STEM</span></a>, I created a working linkage system in a size-constrained system for the Stem Projector.
                    </p>
                    {/* <p style={{width: '500px', textAlign: 'center', marginTop: '-150px'}}>When the projector is placed on a surface, the spheroid silicon form would morph to project at an angle.
                    </p> */}
                    <img style={{width: '500px', marginTop: '0px'}} src={STEM6}></img>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '-5px',
                    }}>
                        <h4 style={{backgroundColor: 'red'}} className='revealLabel'>[HOVER OVER FOR WORKING DEMO]</h4>
                        <img className='hoverImage' style={{width: '440px', marginTop: '80px'}} src={STEM8}></img>
                    </div>

                    {/* <img src={SKATE1} style={{width: '440px', marginTop: '80px', mixBlendMode: 'exclusion'}}></img> */}
                    {/* <img src={SKATE1} style={{width: '440px', marginTop: '80px', mixBlendMode: 'exclusion'}}></img> */}
                    
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={600} minWidth={500}>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px', marginBottom: '40px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>STEM PROJECTOR</h4> */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '10px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '450px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            MODELLED, CREATED AND VALIDATED A WORKING LEG LINKAGE MECHANISM FOR THE STEM PROJECTOR EVT2
                            <br></br>
                            <span style={{color: 'white', fontSize: '14px'}}>[ INTERNSHIP ]</span>
                        </p>
                    </div>
                    {/* <p style={{width: '500px', textAlign: 'center', marginTop: '-20px'}}>During my time as a design engineer intern at STEM, I created a working linkage system in a size-constrained system for the Stem Projector.
                    </p> */}
                    <div style={{display: 'flex', height: '480px', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '-160px'}}>
                        {/* <img style={{height: '180px', marginTop: '10px'}} src={STEM1}></img> */}
                        <img className='galleryImg' style={{width: '300px', marginTop: '10px'}} src={STEM2}></img>
                    </div>
                    <p style={{width: '480px', textAlign: 'center', marginTop: '-120px'}}>During my time as a design engineer intern at <a href="https://www.stemplayer.com/stemprojector"><span style={{fontSize: '14px', textDecoration: 'underline', color: 'red', fontWeight: 'bolder'}}>STEM</span></a>, I created a working linkage system in a size-constrained system for the Stem Projector.
                    </p>
                    {/* <p style={{width: '500px', textAlign: 'center', marginTop: '-150px'}}>When the projector is placed on a surface, the spheroid silicon form would morph to project at an angle.
                    </p> */}
                    <img style={{width: '480px', marginTop: '0px'}} src={STEM6}></img>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '-5px',
                    }}>
                        <h4 style={{backgroundColor: 'red'}} className='revealLabel'>[HOVER OVER FOR WORKING DEMO]</h4>
                        <img className='hoverImage' style={{width: '440px', marginTop: '80px'}} src={STEM8}></img>
                    </div>
                    
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px', marginBottom: '40px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>STEM PROJECTOR</h4> */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '10px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '350px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            MODELLED, CREATED AND VALIDATED A WORKING LEG LINKAGE MECHANISM FOR THE STEM PROJECTOR EVT2
                            <br></br>
                            <span style={{color: 'white', fontSize: '12px'}}>[ INTERNSHIP ]</span>
                        </p>
                    </div>
                    {/* <p style={{width: '500px', textAlign: 'center', marginTop: '-20px'}}>During my time as a design engineer intern at STEM, I created a working linkage system in a size-constrained system for the Stem Projector.
                    </p> */}
                    <div style={{display: 'flex', height: '500px', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '-160px'}}>
                        {/* <img style={{height: '180px', marginTop: '10px'}} src={STEM1}></img> */}
                        <img className='galleryImg' style={{width: '300px', marginTop: '10px'}} src={STEM2}></img>
                    </div>
                    <p style={{width: '350px', textAlign: 'center', marginTop: '-130px'}}>During my time as a design engineer intern at <a href="https://www.stemplayer.com/stemprojector"><span style={{fontSize: '14px', textDecoration: 'underline', color: 'red', fontWeight: 'bolder'}}>STEM</span></a>, I created a working linkage system in a size-constrained system for the Stem Projector.
                    </p>
                    {/* <p style={{width: '500px', textAlign: 'center', marginTop: '-150px'}}>When the projector is placed on a surface, the spheroid silicon form would morph to project at an angle.
                    </p> */}
                    <img style={{width: '350px', marginTop: '0px'}} src={STEM6}></img>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '-5px',
                    }}>
                        <h4 style={{backgroundColor: 'red'}} className='revealLabel'>[CLICK FOR WORKING DEMO]</h4>
                        <img className='hoverImage' style={{width: '440px', marginTop: '80px'}} src={STEM8}></img>
                    </div>
                    
                </div>
            </div>
            </MediaQuery>
        </section>
    );
}

export default STEMPLYR;