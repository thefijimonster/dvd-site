import React from "react";
import '../App.css';
import Background from "./Background";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
// import HorizontalCarousel from "./HorizontalCarousel";
import HorizontalMarquee from "./HorizontalMarquee";
import HorizontalScroll from "./HorizontalScroll";
import HoverImage from "./HoverImage";
import Back from "./Back";
import DVDLogo from "./DVDBOUNCE";
import MediaQuery from 'react-responsive'

const WorkPage = () => {

    return (
        <section >
            <MediaQuery maxWidth={500}>
                <DVDLogo/>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh', width: '100vw'}}>
                    <h1 style={{textAlign: 'center', fontSize: '30px', color: 'red'}}>[ VIEW ON DESKTOP ]</h1>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={500}>
            {/* <Background></Background> */}
            <div id="contentDiv">
                <DVDLogo/>
                {/* <div style={{position: 'fixed', top: '0'}}>
                    <Link to="/"><h4 style={{color: 'white', backgroundColor: 'red'}}>BACK</h4></Link>
                </div> */}
                    {/* <HorizontalMarquee> */}
                    {/* <HomeNav></HomeNav> */}
                    
                    <div style={{
                        // display: 'flex',
                        // border: '1px solid green',
                        // width: '100%',
                        // margin: '20px'
                    }}>
                        {/* <p style={{width: '300px', textAlign: 'center', marginBottom: '30px'}}>Currently studying at Dyson School of Design Engineering at Imperial College London</p> */}
                    {/* <HorizontalScroll> */}
                    <Link to="/ABOUT"><h1 className="titleButton">[ABOUT]</h1></Link>
                    <br></br>
                    {/* <h1 className="titleButton">[WORK]</h1> */}
                    {/* <br></br> */}
                    {/* <HoverImage imageSrc={require('../Assets/PAGE_12.png')} altText="Popup Image" width="1200"></HoverImage> */}
                    <div style={{position:"relative", display: 'flex', flexDirection: 'column'}}>
                    <Link to="/SPKRDSGN"><div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify'}}><h1 className="projectName">SPEAKER SYSTEM</h1><p className="wordTag">SPEAKER ENGINEERING</p></div></Link>
                    </div>
                    {/* <HoverImage imageSrc={require('../Assets/PAGE_12.png')} altText="Popup Image" width="1200">P
                    <Link to="/OBGTRCDS"><h1>OBLIGATED RECORDS</h1></Link></HoverImage> */}
                    <HoverImage imageSrc={require('../Assets/PAGE_12.png')} altText="Popup Image" width="1200">
                    <Link to="/TRVPRNTS"><div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify'}}><h1 className="projectName">TRAVSPRESENTS.TV</h1><p className="wordTag">SOFTWARE DEVELOPMENT</p></div></Link></HoverImage>
                    {/* <HoverImage imageSrc={require('../Assets/PAGE_12.png')} altText="Popup Image" width="1200">
                    <Link to="/BSCPBRGHT"><h1>BEOSCAPE BRIGHT</h1></Link></HoverImage> */}
                    {/* <br></br>
                    <h2>2022</h2> */}
                    <HoverImage imageSrc={require('../Assets/PAGE_12.png')} altText="Popup Image" width="1200">
                    <Link to="/STEMPJCTR"><div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify'}}><h1 className="projectName">STEM PROJECTOR</h1><p className="wordTag">DESIGN ENGINEERING</p></div></Link></HoverImage>
                    <HoverImage imageSrc={require('../Assets/PAGE_12.png')} altText="Popup Image" width="1200">
                    <Link to="/SNDSCPE"><div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify'}}><h1 className="projectName">SANDSCAPE</h1><p className="wordTag">PHYSICAL COMPUTING</p></div></Link></HoverImage>
                    <br></br>
                    <HoverImage imageSrc={require('../Assets/PAGE_12.png')} altText="Popup Image" width="1200">
                    <Link to="/MSCVIDS"><div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify'}}><h1 className="projectName">MUSIC VIDEOS</h1><p className="wordTag">VISUAL DIRECTION</p></div></Link>
                    </HoverImage>
                    <HoverImage imageSrc={require('../Assets/PAGE_12.png')} altText="Popup Image" width="1200">
                    <Link to="/ARCHIVE"><h1>ARCHIVE</h1></Link>
                    </HoverImage>
                    <br></br>
                    <Link to="/CONTACT"><h1 className="titleButton">[CONTACT]</h1></Link>
                    
                    {/* </HorizontalScroll> */}
                    </div>
            </div>
            </MediaQuery>
        </section>
    );

};

export default WorkPage;