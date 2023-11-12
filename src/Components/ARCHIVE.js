import '../App.css'
import Background from './Background';
import Back from './Back';
import ArchiveComp from './ArchiveComp';

import MediaQuery from 'react-responsive';

const ARCHIVE = () => {
    return(
        <section>
            <MediaQuery minWidth={600}>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', textAlign: 'left', marginTop: '80px', marginBottom: '35px'}}>
                    {/* <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '30px', textAlign: 'center', width: '160px'}}>ARCHIVE</h4>
                    </div> */}

                    <div className='divider'>
                        <p style={{color: 'white', fontWeight: 'bolder'}}>2023</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    
                    <div>
                        
                        <div className="archiveTitle">
                            <a href="https://travspresents.tv">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS.TV" category="WEB DESIGN, GRAPHIC DESIGN, FULL-STACK DEVELOPMENT" resources="LINK"/>
                            </a>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '450px'}} src={require('../Assets/TRAVSPRESENTS2.png')}></img>
                            {/* <img className="galleryImg"  src={require('../Assets/TRAVSPRESENTS3.png')}></img> */}
                            {/* <img className="galleryImg"  src={require('../Assets/TRAVSPRESENTS4.png')}></img> */}
                            {/* <img className="galleryImg" style={{mixBlendMode: 'exclusion', width: '240px'}} src={require('../Assets/TRAVSPRESENTS5.png')}></img> */}
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="CHARLIE DARK" category="PHOTOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/CHARLIE1.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/CHARLIE2.jpg')}></img>
                            {/* <img className="galleryImg" width={200} src={require('../Assets/CHARLIE3.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/CHARLIE4.jpg')}></img>
                        </div>
                    </div>

                    {/* <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="QUASI-STELLAR RADIO" category="VIDEOGRAPHY, VISUAL DIRECTION, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer' style={{justifyContent: 'center', alignItems: 'center'}}>
                            <img className="galleryImg" height={130} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO1.png')}></img>
                            <img className="galleryImg" width={160} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO3.png')}></img>
                            <img className="galleryImg" height={130} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO2.png')}></img>
                        </div>
                    </div> */}

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [ADIDAS X TRENCH TRENCH TRENCH]" category="VIDEOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{alignItems: 'center'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/ADIDAS2.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px', height: '140px'}} src={require('../Assets/ADIDAS1.png')}></img>
                        </div>
                    </div>

                    <a href="https://www.youtube.com/watch?v=ecAW9v0PC_g&t=243s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [NTS]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{alignItems: 'center'}}>
                            <img className="galleryImg" style={{width: '190px', height: '120px'}} src={require('../Assets/NTS2.png')}></img>
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/NTS1.gif')}></img>
                            <img className="galleryImg" style={{width: '190px', height: '120px'}} src={require('../Assets/NTS3.png')}></img>
                        </div>
                    </div>
                    </a>
                    
                    <a href="https://www.youtube.com/watch?v=pemL1jVN0qw&t=1451s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [KINDRED]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED5.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=M4zCjrp626E&t=51s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [NOVELIST 3.5 LAUNCH]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [MANGA ST HILAIRE @ JAZZ CAFE]" category="VIDEOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            {/* <img className="galleryImg" style={{width: '140px'}} src={require('../Assets/MANGA1.png')}></img>
                            <img className="galleryImg" style={{width: '140px'}} src={require('../Assets/MANGA2.png')}></img> */}
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA3.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA6.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA5.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA4.png')}></img>
                        </div>
                    </div>
                    
                    <a href="https://www.youtube.com/watch?v=fodasXB_sOM">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [JUST JAM LIVE - TIM & BARRY]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=YHWSFYn93Jg">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [POUND & YAM]" category="VIDEOGRAPHY, GRAPHIC DESIGN, GENERATIVE ART"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/PY1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/PY2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://dvd-folio.s3.eu-west-2.amazonaws.com/SPKRDSGN001.pdf">
                    <div>
                        <div className="archiveTitle" >
                            <ArchiveComp date="2023" title="SPEAKER DESIGN PROJECT 001" category="PRODUCT DESIGN, SPEAKER ENGINEERING" resources="PDF"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR5.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="SPEAKER DESIGN PROJECT 002" category="PRODUCT DESIGN, SPEAKER ENGINEERING"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '0px'}}>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0025.jpg')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0022.jpg')}></img>
                            <img className="galleryImg" style={{width: '280px'}} src={require('../Assets/SPEAKER10.png')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0024.jpg')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0023.jpg')}></img>
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="BEOSCAPE BRIGHT" category="DESIGN ENGINEERING, PRODUCT DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/BEOSCAPE1.png')}></img>
                            <img className="galleryImg" style={{width: '300px'}} src={require('../Assets/BEOSCAPE2.png')}></img>
                            {/* <img className="galleryImg" style={{width: '330px', filter: 'invert(100%)', mixBlendMode: 'exclusion'}} src={require('../Assets/BEOSCAPE4.png')}></img> */}
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/BEOSCAPE3.png')}></img>
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="THE CARPET SHOP - DECISIVE SOUNDS" category="DJ"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS5.png')}></img>
                        </div>
                    </div>

                    <ArchiveComp date="2023" title="THE CARPET SHOP - KAIDI TATHAM" category="DJ"/>
                    
                    <a href="https://www.mixcloud.com/Kindred_ldn/dvd-15823/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="KINDRED RADIO [15.08.23]" category="DJ" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}} src={require('../Assets/KINDRED1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.mixcloud.com/Kindred_ldn/dvd-14323/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="KINDRED RADIO [14.03.23]" category="DJ" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}} src={require('../Assets/KINDRED1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=6xR8e2J3gPw">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="CADELL - THE RIGHT ONE WILL COME" category="MUSIC VIDEO, GRAPHPIC DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/CADELL1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <ArchiveComp date="2023" title="ROTATION POLICY VISUAL DIRECTION" category="PHOTOGRAPHY, GRAPHIC DESIGN"/>

                    <a href="https://www.youtube.com/watch?v=7rOC2Qovt4U">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="OBLIGATED RECORDS 001 [NOVELIST x SUSSTRAPPERAZZI - MERCY]]" category="MUSIC VIDEO, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY1.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY2.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY3.jpg')}></img>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY4.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY5.jpg')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=1WFVIDFY-3A">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="OBLIGATED RECORDS 002 [MERKY ACE - LOCKSTOCK]" category="VIDEOGRRAPHY, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK3.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div className='divider'>
                        <p style={{color: 'white', fontWeight: 'bolder'}}>2022</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="STEM - KANO PC SKATEBOARD CAMPAIGN" category="VIDEOGRAPHY, CREATIVE DIRECTION, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC3.png')}></img>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC4.png')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC5.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC6.png')}></img>
                        </div>
                    </div>
                
                    <div>
                        <div className="archiveTitle">
                        <ArchiveComp date="2022" title="STEM - STEM PROJECTOR LEG MECHANISM" category="DESIGN ENGINEERING"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '220px'}} src={require('../Assets/STEM1.png')}></img>
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/STEM4.png')}></img>
                            {/* <img className="galleryImg" style={{width: '140px', filter:'contrast(90%)'}} src={require('../Assets/STEM8.gif')}></img> */}
                            <img className="galleryImg" style={{width: '220px'}} src={require('../Assets/STEM2.png')}></img>
                        </div>
                    </div>
                    
                    <div>
                        <div className="archiveTitle">
                        <ArchiveComp date="2022" title="SANDSCAPE" category="DESIGN ENGINEERING, PRODUCT DESIGN, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE6.png')}></img>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE7.png')}></img>
                            <img className="galleryImg" style={{filter: 'contrast(120%)', width: '190px'}} src={require('../Assets/SANDSCAPE9.png')}></img>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE8.png')}></img>
                            <img className="galleryImg" style={{filter: 'contrast(120%)', width: '190px'}} src={require('../Assets/SANDSCAPE10.png')}></img>
                        </div>
                    </div>

                    <a href="https://www.youtube.com/watch?v=NQRSO8owtgM">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="RENZ - PULLUPINADINGER" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg"  style={{ width: '160px'}}  src={require('../Assets/RNZ2.png')}></img>
                            <img className="galleryImg"  style={{ width: '160px'}}  src={require('../Assets/RNZ5.png')}></img>
                            <img className="galleryImg"  style={{width: '160px'}}  src={require('../Assets/RNZ3.png')}></img>
                            <img className="galleryImg"  style={{ width: '180px'}}  src={require('../Assets/RNZ4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=bp2wd4aw6nc">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="RENZ - LOOSE" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/RENZ2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=PVKp6gsR43o">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="SQUINTZ - FEEL GOOD" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/SQUINTZ1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/SQUINTZ2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=4lQFWpsfUQg">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="OBLIG X RINSE CHRISTMAS SET" category="VIDEOGRAPHY, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}}  src={require('../Assets/OBLIG1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <ArchiveComp date="2022" title="LEOHACK - IMPERIAL SPACE SOCIETY" category="HACKATHON"/>

                    {/* <ArchiveComp date="2021" title="TOOTHBRUSH CIRCULAR ECONOMY" category="DESIGN ENGINEERING"/> */}

                    <div className='divider'>
                        <p style={{color: 'white', fontWeight: 'bolder'}}>2021</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    <a href="https://www.techforgood.net/articles/stem-breaking-the-vicious-circle">
                    <ArchiveComp date="2021" title="HOMEMADE - WON NATIONAL COVID HACKATHON FIRST PLACE" category="HACKATHON, START UP"/>
                    </a>
                    
                    <a href="https://www.notehub.co.uk/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2021" title="NOTEHUB" category="START UP"/>
                        </div>
                        <div className='gllryContainer'>
                            {/* <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/NOTEHUB1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/NOTEHUB2.png')}></img> */}
                            <img className="galleryImg" style={{width: '260px'}}  src={require('../Assets/NOTEHUB3.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div className='divider'>
                        <p style={{color: 'white', fontWeight: 'bolder'}}>WIP</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>
                    <ArchiveComp date="NOW" title="ELI1AH [CLOSE THE APP. MAKE THE TING.] PORTFOLIO WEBSITE DESIGN" category="WEB DESIGN, GRAPHIC DESIGN, SOFTWARE ENGINEERING"/>
                    <ArchiveComp date="NOW" title="SOUTH LONDON SPACE AGENCY [CARRETA FREESTYLE - GRANDMIXXER]" category="MUSIC VIDEO, GRAPHIC DESIGN"/>
                    <ArchiveComp date="NOW" title="ICRADIO EVENT DIRECTION" category="CREATIVE DIRECTION"/>
                    <ArchiveComp date="NOW" title="OBLIGATED RECORDS 004" category="CREATIVE DIRECTION, GRAPHIC DESIGN"/>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={500} maxWidth={600}>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'left', marginTop: '80px', marginBottom: '35px'}}>
                    {/* <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '30px', textAlign: 'center', width: '160px'}}>ARCHIVE</h4>
                    </div> */}

                    <div className='divider' style={{width: '500px'}}>
                        <p style={{color: 'red', fontWeight: 'bolder', fontSize: '16px'}}>2023</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    
                    <div>
                        
                        <div className="archiveTitle">
                            <a href="https://travspresents.tv">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS.TV" category="WEB DESIGN, GRAPHIC DESIGN, FULL-STACK DEVELOPMENT" resources="LINK"/>
                            </a>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '450px'}} src={require('../Assets/TRAVSPRESENTS2.png')}></img>
                            {/* <img className="galleryImg"  src={require('../Assets/TRAVSPRESENTS3.png')}></img> */}
                            {/* <img className="galleryImg"  src={require('../Assets/TRAVSPRESENTS4.png')}></img> */}
                            {/* <img className="galleryImg" style={{mixBlendMode: 'exclusion', width: '240px'}} src={require('../Assets/TRAVSPRESENTS5.png')}></img> */}
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="CHARLIE DARK" category="PHOTOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/CHARLIE1.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/CHARLIE2.jpg')}></img>
                            {/* <img className="galleryImg" width={200} src={require('../Assets/CHARLIE3.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/CHARLIE4.jpg')}></img>
                        </div>
                    </div>

                    {/* <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="QUASI-STELLAR RADIO" category="VIDEOGRAPHY, VISUAL DIRECTION, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer' style={{justifyContent: 'center', alignItems: 'center'}}>
                            <img className="galleryImg" height={130} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO1.png')}></img>
                            <img className="galleryImg" width={160} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO3.png')}></img>
                            <img className="galleryImg" height={130} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO2.png')}></img>
                        </div>
                    </div> */}

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [ADIDAS X TRENCH TRENCH TRENCH]" category="VIDEOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{alignItems: 'center'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/ADIDAS2.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px', height: '140px'}} src={require('../Assets/ADIDAS1.png')}></img>
                        </div>
                    </div>

                    <a href="https://www.youtube.com/watch?v=ecAW9v0PC_g&t=243s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [NTS]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{alignItems: 'center'}}>
                            <img className="galleryImg" style={{width: '190px', height: '120px'}} src={require('../Assets/NTS2.png')}></img>
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/NTS1.gif')}></img>
                            <img className="galleryImg" style={{width: '190px', height: '120px'}} src={require('../Assets/NTS3.png')}></img>
                        </div>
                    </div>
                    </a>
                    
                    <a href="https://www.youtube.com/watch?v=pemL1jVN0qw&t=1451s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [KINDRED]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED5.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=M4zCjrp626E&t=51s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [NOVELIST 3.5 LAUNCH]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [MANGA ST HILAIRE @ JAZZ CAFE]" category="VIDEOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            {/* <img className="galleryImg" style={{width: '140px'}} src={require('../Assets/MANGA1.png')}></img>
                            <img className="galleryImg" style={{width: '140px'}} src={require('../Assets/MANGA2.png')}></img> */}
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA3.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA6.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA5.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA4.png')}></img>
                        </div>
                    </div>
                    
                    <a href="https://www.youtube.com/watch?v=fodasXB_sOM">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [JUST JAM LIVE - TIM & BARRY]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=YHWSFYn93Jg">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [POUND & YAM]" category="VIDEOGRAPHY, GRAPHIC DESIGN, GENERATIVE ART"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/PY1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/PY2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://dvd-folio.s3.eu-west-2.amazonaws.com/SPKRDSGN001.pdf">
                    <div>
                        <div className="archiveTitle" >
                            <ArchiveComp date="2023" title="SPEAKER DESIGN PROJECT 001" category="PRODUCT DESIGN, SPEAKER ENGINEERING" resources="PDF"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR5.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="SPEAKER DESIGN PROJECT 002" category="PRODUCT DESIGN, SPEAKER ENGINEERING"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '0px'}}>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0025.jpg')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0022.jpg')}></img>
                            <img className="galleryImg" style={{width: '280px'}} src={require('../Assets/SPEAKER10.png')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0024.jpg')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0023.jpg')}></img>
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="BEOSCAPE BRIGHT" category="DESIGN ENGINEERING, PRODUCT DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/BEOSCAPE1.png')}></img>
                            <img className="galleryImg" style={{width: '300px'}} src={require('../Assets/BEOSCAPE2.png')}></img>
                            {/* <img className="galleryImg" style={{width: '330px', filter: 'invert(100%)', mixBlendMode: 'exclusion'}} src={require('../Assets/BEOSCAPE4.png')}></img> */}
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/BEOSCAPE3.png')}></img>
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="THE CARPET SHOP - DECISIVE SOUNDS" category="DJ"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS5.png')}></img>
                        </div>
                    </div>

                    <ArchiveComp date="2023" title="THE CARPET SHOP - KAIDI TATHAM" category="DJ"/>
                    
                    <a href="https://www.mixcloud.com/Kindred_ldn/dvd-15823/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="KINDRED RADIO [15.08.23]" category="DJ" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}} src={require('../Assets/KINDRED1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.mixcloud.com/Kindred_ldn/dvd-14323/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="KINDRED RADIO [14.03.23]" category="DJ" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}} src={require('../Assets/KINDRED1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=6xR8e2J3gPw">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="CADELL - THE RIGHT ONE WILL COME" category="MUSIC VIDEO, GRAPHPIC DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/CADELL1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <ArchiveComp date="2023" title="ROTATION POLICY VISUAL DIRECTION" category="PHOTOGRAPHY, GRAPHIC DESIGN"/>

                    <a href="https://www.youtube.com/watch?v=7rOC2Qovt4U">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="OBLIGATED RECORDS 001 [NOVELIST x SUSSTRAPPERAZZI - MERCY]]" category="MUSIC VIDEO, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY1.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY2.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY3.jpg')}></img>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY4.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY5.jpg')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=1WFVIDFY-3A">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="OBLIGATED RECORDS 002 [MERKY ACE - LOCKSTOCK]" category="VIDEOGRRAPHY, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK3.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div className='divider' style={{width: '500px'}}>
                        <p style={{color: 'red', fontWeight: 'bolder', fontSize: '16px'}}>2022</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="STEM - KANO PC SKATEBOARD CAMPAIGN" category="VIDEOGRAPHY, CREATIVE DIRECTION, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC3.png')}></img>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC4.png')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC5.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC6.png')}></img>
                        </div>
                    </div>
                
                    <div>
                        <div className="archiveTitle">
                        <ArchiveComp date="2022" title="STEM - STEM PROJECTOR LEG MECHANISM" category="DESIGN ENGINEERING"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '220px'}} src={require('../Assets/STEM1.png')}></img>
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/STEM4.png')}></img>
                            {/* <img className="galleryImg" style={{width: '140px', filter:'contrast(90%)'}} src={require('../Assets/STEM8.gif')}></img> */}
                            <img className="galleryImg" style={{width: '220px'}} src={require('../Assets/STEM2.png')}></img>
                        </div>
                    </div>
                    
                    <div>
                        <div className="archiveTitle">
                        <ArchiveComp date="2022" title="SANDSCAPE" category="DESIGN ENGINEERING, PRODUCT DESIGN, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE6.png')}></img>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE7.png')}></img>
                            <img className="galleryImg" style={{filter: 'contrast(120%)', width: '190px'}} src={require('../Assets/SANDSCAPE9.png')}></img>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE8.png')}></img>
                            <img className="galleryImg" style={{filter: 'contrast(120%)', width: '190px'}} src={require('../Assets/SANDSCAPE10.png')}></img>
                        </div>
                    </div>

                    <a href="https://www.youtube.com/watch?v=NQRSO8owtgM">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="RENZ - PULLUPINADINGER" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg"  style={{ width: '160px'}}  src={require('../Assets/RNZ2.png')}></img>
                            <img className="galleryImg"  style={{ width: '160px'}}  src={require('../Assets/RNZ5.png')}></img>
                            <img className="galleryImg"  style={{width: '160px'}}  src={require('../Assets/RNZ3.png')}></img>
                            <img className="galleryImg"  style={{ width: '180px'}}  src={require('../Assets/RNZ4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=bp2wd4aw6nc">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="RENZ - LOOSE" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/RENZ2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=PVKp6gsR43o">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="SQUINTZ - FEEL GOOD" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/SQUINTZ1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/SQUINTZ2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=4lQFWpsfUQg">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="OBLIG X RINSE CHRISTMAS SET" category="VIDEOGRAPHY, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}}  src={require('../Assets/OBLIG1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <ArchiveComp date="2022" title="LEOHACK - IMPERIAL SPACE SOCIETY" category="HACKATHON"/>

                    {/* <ArchiveComp date="2021" title="TOOTHBRUSH CIRCULAR ECONOMY" category="DESIGN ENGINEERING"/> */}

                    <div className='divider' style={{width: '500px'}}>
                        <p style={{color: 'red', fontWeight: 'bolder', fontSize: '16px'}}>2021</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    <a href="https://www.techforgood.net/articles/stem-breaking-the-vicious-circle">
                    <ArchiveComp date="2021" title="HOMEMADE - WON NATIONAL COVID HACKATHON FIRST PLACE" category="HACKATHON, START UP"/>
                    </a>
                    
                    <a href="https://www.notehub.co.uk/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2021" title="NOTEHUB" category="START UP"/>
                        </div>
                        <div className='gllryContainer'>
                            {/* <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/NOTEHUB1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/NOTEHUB2.png')}></img> */}
                            <img className="galleryImg" style={{width: '260px'}}  src={require('../Assets/NOTEHUB3.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div className='divider' style={{width: '500px'}}>
                        <p style={{color: 'red', fontWeight: 'bolder', fontSize: '16px'}}>WIP</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>
                    <ArchiveComp date="NOW" title="ELI1AH [CLOSE THE APP. MAKE THE TING.] PORTFOLIO WEBSITE DESIGN" category="WEB DESIGN, GRAPHIC DESIGN, SOFTWARE ENGINEERING"/>
                    <ArchiveComp date="NOW" title="SOUTH LONDON SPACE AGENCY [CARRETA FREESTYLE - GRANDMIXXER]" category="MUSIC VIDEO, GRAPHIC DESIGN"/>
                    <ArchiveComp date="NOW" title="ICRADIO EVENT DIRECTION" category="CREATIVE DIRECTION"/>
                    <ArchiveComp date="NOW" title="OBLIGATED RECORDS 004" category="CREATIVE DIRECTION, GRAPHIC DESIGN"/>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'left', marginTop: '80px', marginBottom: '35px', width: '380px'}}>
                    {/* <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <h4 style={{backgroundColor: 'red', fontSize: '30px', textAlign: 'center', width: '160px'}}>ARCHIVE</h4>
                    </div> */}

                    <div className='divider'>
                        <p style={{color: 'red', fontWeight: 'bolder', width: '350px', fontSize: '16px'}}>2023</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    
                    <div>
                        
                        <div className="archiveTitle">
                            <a href="https://travspresents.tv">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS.TV" category="WEB DESIGN, GRAPHIC DESIGN, FULL-STACK DEVELOPMENT" resources="LINK"/>
                            </a>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '380px'}} src={require('../Assets/TRAVSPRESENTS2.png')}></img>
                            {/* <img className="galleryImg"  src={require('../Assets/TRAVSPRESENTS3.png')}></img> */}
                            {/* <img className="galleryImg"  src={require('../Assets/TRAVSPRESENTS4.png')}></img> */}
                            {/* <img className="galleryImg" style={{mixBlendMode: 'exclusion', width: '240px'}} src={require('../Assets/TRAVSPRESENTS5.png')}></img> */}
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="CHARLIE DARK" category="PHOTOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/CHARLIE1.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/CHARLIE2.jpg')}></img>
                            {/* <img className="galleryImg" width={200} src={require('../Assets/CHARLIE3.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/CHARLIE4.jpg')}></img>
                        </div>
                    </div>

                    {/* <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="QUASI-STELLAR RADIO" category="VIDEOGRAPHY, VISUAL DIRECTION, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer' style={{justifyContent: 'center', alignItems: 'center'}}>
                            <img className="galleryImg" height={130} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO1.png')}></img>
                            <img className="galleryImg" width={160} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO3.png')}></img>
                            <img className="galleryImg" height={130} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO2.png')}></img>
                        </div>
                    </div> */}

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [ADIDAS X TRENCH TRENCH TRENCH]" category="VIDEOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{alignItems: 'center'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/ADIDAS2.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px', height: '140px'}} src={require('../Assets/ADIDAS1.png')}></img>
                        </div>
                    </div>

                    <a href="https://www.youtube.com/watch?v=ecAW9v0PC_g&t=243s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [NTS]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{alignItems: 'center'}}>
                            <img className="galleryImg" style={{width: '190px', height: '120px'}} src={require('../Assets/NTS2.png')}></img>
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/NTS1.gif')}></img>
                            <img className="galleryImg" style={{width: '190px', height: '120px'}} src={require('../Assets/NTS3.png')}></img>
                        </div>
                    </div>
                    </a>
                    
                    <a href="https://www.youtube.com/watch?v=pemL1jVN0qw&t=1451s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [KINDRED]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/TPKINDRED5.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=M4zCjrp626E&t=51s">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [NOVELIST 3.5 LAUNCH]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/NOVELIST4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [MANGA ST HILAIRE @ JAZZ CAFE]" category="VIDEOGRAPHY"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            {/* <img className="galleryImg" style={{width: '140px'}} src={require('../Assets/MANGA1.png')}></img>
                            <img className="galleryImg" style={{width: '140px'}} src={require('../Assets/MANGA2.png')}></img> */}
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA3.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA6.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA5.png')}></img>
                            <img className="galleryImg" style={{width: '180px'}} src={require('../Assets/MANGA4.png')}></img>
                        </div>
                    </div>
                    
                    <a href="https://www.youtube.com/watch?v=fodasXB_sOM">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [JUST JAM LIVE - TIM & BARRY]" category="VIDEOGRAPHY" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/JUSTJAM4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=YHWSFYn93Jg">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="TRAVSPRESENTS [POUND & YAM]" category="VIDEOGRAPHY, GRAPHIC DESIGN, GENERATIVE ART"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/PY1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/PY2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://dvd-folio.s3.eu-west-2.amazonaws.com/SPKRDSGN001.pdf">
                    <div>
                        <div className="archiveTitle" >
                            <ArchiveComp date="2023" title="SPEAKER DESIGN PROJECT 001" category="PRODUCT DESIGN, SPEAKER ENGINEERING" resources="PDF"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/SPKR5.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="SPEAKER DESIGN PROJECT 002" category="PRODUCT DESIGN, SPEAKER ENGINEERING"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '0px'}}>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0025.jpg')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0022.jpg')}></img>
                            <img className="galleryImg" style={{width: '280px'}} src={require('../Assets/SPEAKER10.png')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0024.jpg')}></img>
                            <img className="galleryImg" style={{width: '120px'}} src={require('../Assets/SPKR0023.jpg')}></img>
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="BEOSCAPE BRIGHT" category="DESIGN ENGINEERING, PRODUCT DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/BEOSCAPE1.png')}></img>
                            <img className="galleryImg" style={{width: '300px'}} src={require('../Assets/BEOSCAPE2.png')}></img>
                            {/* <img className="galleryImg" style={{width: '330px', filter: 'invert(100%)', mixBlendMode: 'exclusion'}} src={require('../Assets/BEOSCAPE4.png')}></img> */}
                            <img className="galleryImg" style={{width: '160px'}} src={require('../Assets/BEOSCAPE3.png')}></img>
                        </div>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="THE CARPET SHOP - DECISIVE SOUNDS" category="DJ"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS3.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS4.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/DS5.png')}></img>
                        </div>
                    </div>

                    <ArchiveComp date="2023" title="THE CARPET SHOP - KAIDI TATHAM" category="DJ"/>
                    
                    <a href="https://www.mixcloud.com/Kindred_ldn/dvd-15823/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="KINDRED RADIO [15.08.23]" category="DJ" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}} src={require('../Assets/KINDRED1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.mixcloud.com/Kindred_ldn/dvd-14323/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="KINDRED RADIO [14.03.23]" category="DJ" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}} src={require('../Assets/KINDRED1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=6xR8e2J3gPw">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="CADELL - THE RIGHT ONE WILL COME" category="MUSIC VIDEO, GRAPHPIC DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/CADELL1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <ArchiveComp date="2023" title="ROTATION POLICY VISUAL DIRECTION" category="PHOTOGRAPHY, GRAPHIC DESIGN"/>

                    <a href="https://www.youtube.com/watch?v=7rOC2Qovt4U">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="OBLIGATED RECORDS 001 [NOVELIST x SUSSTRAPPERAZZI - MERCY]]" category="MUSIC VIDEO, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY1.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY2.jpg')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY3.jpg')}></img>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY4.jpg')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/MERCY5.jpg')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=1WFVIDFY-3A">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2023" title="OBLIGATED RECORDS 002 [MERKY ACE - LOCKSTOCK]" category="VIDEOGRRAPHY, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/LOCKSTOCK3.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div className='divider'>
                        <p style={{color: 'red', fontWeight: 'bolder', width: '350px', fontSize: '16px'}}>2022</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="STEM - KANO PC SKATEBOARD CAMPAIGN" category="VIDEOGRAPHY, CREATIVE DIRECTION, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC2.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC3.png')}></img>
                            {/* <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC4.png')}></img> */}
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC5.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}} src={require('../Assets/KANOPC6.png')}></img>
                        </div>
                    </div>
                
                    <div>
                        <div className="archiveTitle">
                        <ArchiveComp date="2022" title="STEM - STEM PROJECTOR LEG MECHANISM" category="DESIGN ENGINEERING"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '220px'}} src={require('../Assets/STEM1.png')}></img>
                            <img className="galleryImg" style={{width: '260px'}} src={require('../Assets/STEM4.png')}></img>
                            {/* <img className="galleryImg" style={{width: '140px', filter:'contrast(90%)'}} src={require('../Assets/STEM8.gif')}></img> */}
                            <img className="galleryImg" style={{width: '220px'}} src={require('../Assets/STEM2.png')}></img>
                        </div>
                    </div>
                    
                    <div>
                        <div className="archiveTitle">
                        <ArchiveComp date="2022" title="SANDSCAPE" category="DESIGN ENGINEERING, PRODUCT DESIGN, GRAPHIC DESIGN"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE6.png')}></img>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE7.png')}></img>
                            <img className="galleryImg" style={{filter: 'contrast(120%)', width: '190px'}} src={require('../Assets/SANDSCAPE9.png')}></img>
                            <img className="galleryImg" style={{filter: 'grayscale(100%)', width: '190px'}} src={require('../Assets/SANDSCAPE8.png')}></img>
                            <img className="galleryImg" style={{filter: 'contrast(120%)', width: '190px'}} src={require('../Assets/SANDSCAPE10.png')}></img>
                        </div>
                    </div>

                    <a href="https://www.youtube.com/watch?v=NQRSO8owtgM">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="RENZ - PULLUPINADINGER" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg"  style={{ width: '160px'}}  src={require('../Assets/RNZ2.png')}></img>
                            <img className="galleryImg"  style={{ width: '160px'}}  src={require('../Assets/RNZ5.png')}></img>
                            <img className="galleryImg"  style={{width: '160px'}}  src={require('../Assets/RNZ3.png')}></img>
                            <img className="galleryImg"  style={{ width: '180px'}}  src={require('../Assets/RNZ4.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=bp2wd4aw6nc">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="RENZ - LOOSE" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/RENZ2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=PVKp6gsR43o">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="SQUINTZ - FEEL GOOD" category="MUSIC VIDEO" resources="LINK"/>
                        </div>
                        <div className='gllryContainer' style={{gap: '20px'}}>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/SQUINTZ1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/SQUINTZ2.png')}></img>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=4lQFWpsfUQg">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2022" title="OBLIG X RINSE CHRISTMAS SET" category="VIDEOGRAPHY, GRAPHIC DESIGN" resources="LINK"/>
                        </div>
                        <div className='gllryContainer'>
                            <img className="galleryImg" style={{width: '240px'}}  src={require('../Assets/OBLIG1.png')}></img>
                        </div>
                    </div>
                    </a>

                    <ArchiveComp date="2022" title="LEOHACK - IMPERIAL SPACE SOCIETY" category="HACKATHON"/>

                    {/* <ArchiveComp date="2021" title="TOOTHBRUSH CIRCULAR ECONOMY" category="DESIGN ENGINEERING"/> */}

                    <div className='divider'>
                        <p style={{color: 'red', fontWeight: 'bolder', width: '350px', fontSize: '16px'}}>2021</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>

                    <a href="https://www.techforgood.net/articles/stem-breaking-the-vicious-circle">
                    <ArchiveComp date="2021" title="HOMEMADE - WON NATIONAL COVID HACKATHON FIRST PLACE" category="HACKATHON, START UP"/>
                    </a>
                    
                    <a href="https://www.notehub.co.uk/">
                    <div>
                        <div className="archiveTitle">
                            <ArchiveComp date="2021" title="NOTEHUB" category="START UP"/>
                        </div>
                        <div className='gllryContainer'>
                            {/* <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/NOTEHUB1.png')}></img>
                            <img className="galleryImg" style={{width: '200px'}}  src={require('../Assets/NOTEHUB2.png')}></img> */}
                            <img className="galleryImg" style={{width: '260px'}}  src={require('../Assets/NOTEHUB3.png')}></img>
                        </div>
                    </div>
                    </a>

                    <div className='divider'>
                        <p style={{color: 'red', fontWeight: 'bolder', width: '350px', fontSize: '16px'}}>WIP</p>
                        <span style={{border: '0.5px solid white'}}></span>
                    </div>
                    <div style={{marginTop: '20px'}}>
                    <ArchiveComp date="NOW" title="ELI1AH [CLOSE THE APP. MAKE THE TING.] PORTFOLIO WEBSITE DESIGN" category="WEB DESIGN, GRAPHIC DESIGN, SOFTWARE ENGINEERING"/>
                    </div>
                    <div style={{marginTop: '20px'}}>
                    <ArchiveComp date="NOW" title="SOUTH LONDON SPACE AGENCY [CARRETA FREESTYLE - GRANDMIXXER]" category="MUSIC VIDEO, GRAPHIC DESIGN"/>
                    </div>
                    <ArchiveComp date="NOW" title="ICRADIO EVENT DIRECTION" category="CREATIVE DIRECTION"/>
                    <ArchiveComp date="NOW" title="OBLIGATED RECORDS 004" category="CREATIVE DIRECTION, GRAPHIC DESIGN"/>
                </div>
            </div>
            </MediaQuery>
        </section>
    );
}

export default ARCHIVE;