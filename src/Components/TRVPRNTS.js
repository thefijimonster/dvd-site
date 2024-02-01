import Background from "./Background";
import '../App.css'
import Back from "./Back";
import TRAVSPRESENTS1 from '../Assets/TRAVSPRESENTS1.gif'
import TRAVSPRESENTS2 from '../Assets/TRAVSPRESENTS2.png'
import TRAVSPRESENTS3 from '../Assets/TRAVSPRESENTS3.png'
import TRAVSPRESENTS4 from '../Assets/TRAVSPRESENTS4.png'
import TRAVSPRESENTS5 from '../Assets/TRAVSPRESENTS5.png'
import MediaQuery from "react-responsive";
import BASEMENT1 from '../Assets/BASEMENT2.jpg'
import tp_1 from '../Assets/tp_1.jpg'
import tp_2 from '../Assets/tp_2.jpg'
import tp_3 from '../Assets/tp_3.jpg'
import tp_4 from '../Assets/tp_4.jpg'
import tp_5 from '../Assets/tp_5.jpg'
import tp_6 from '../Assets/tp_6.jpg'
import tp_7 from '../Assets/tp_7.jpg'
import tp_8 from '../Assets/tp_8.jpg'
import tp_9 from '../Assets/tp_9.jpg'
import tp_10 from '../Assets/tp_10.jpg'
import tp_11 from '../Assets/tp_11.jpg'
import tp_12 from '../Assets/tp_12.jpg'
import tp_13 from '../Assets/tp_13.jpg'

import MAG_1 from '../Assets/BASEMENT1.jpg'

const TRVPRNTS = () => {
    return(
        <section>
            {/* <Background></Background> */}
            <MediaQuery minWidth={600}>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>TRAVSPRESENTS.TV</h4> */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '600px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            WEB DEVELOPMENT PROJECT INCORPORATING SOFTWARE ENGINEERING AND GRAPHIC DESIGN TO CREATE A DIGITAL EXTENSION OF A LEADING PLATFORM IN UK CULTURE
                            <br></br>
                            <span style={{color: 'white', fontSize: '14px'}}>[ COMMISIONED PROJECT ]</span>
                        </p>
                    </div>
                    <a href="https://www.travspresents.tv/">
                        <img src={TRAVSPRESENTS1} style={{mixBlendMode: 'exclusion', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-65px'}}></img>
                    </a>
                    <p style={{width: '500px', textAlign: 'center', marginTop: '-45px'}}>In addition to my creative direction role, I created our website [travspresents.tv]. This includes coding and optimizing the platform to ensure a seamless experience creating a digital extension of the platform. The website resonates with the dynamic energy of the artists and the evolving essence of the new era.</p>
                    <img src={TRAVSPRESENTS2} style={{mixBlendMode: 'exclusion', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}></img>
                    <img className="invert" src={TRAVSPRESENTS3} style={{mixBlendMode: 'exclusion', width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}></img>
                    <p style={{width: '500px', textAlign: 'center'}}>Stripe, a dynamic and secure payment gateway, was integrated into the online store.</p>
                    <h3>[CLICK THE T-SHIRT TO ENTER THE SITE]</h3>
                    <a href="https://www.travspresents.tv/">
                        <img className="invert-on-hover" src={TRAVSPRESENTS5} style={{mixBlendMode: 'exclusion', width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '20px'}}></img>
                    </a>
                    <div style={{width: '600px', textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '600px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            The visual direction of our events platform including videography of our events and radio shows
                            <br></br>
                            {/* <span style={{color: 'white', fontSize: '14px'}}>[ COMMISIONED PROJECT ]</span> */}
                        </p>
                        </div>
                        <img src={BASEMENT1} width={600}></img>
                        <p>[Camby for The Basement Mag Issue #3, 2023]</p>
                        <h3 style={{color: 'white', marginTop: '30px'}}>SET ARCHIVE [2023]</h3>
                        <div style={{display: 'block', marginTop: '10px', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div style={{width: '30%'}}>
                                    <img src={tp_1} width={200}></img>
                                    {/* <p>Travs Presents: KIBO + Friends</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_6} width={200}></img>
                                    {/* <p>General Courts + Friends (Featuring Duppy, Kruz Leone, Razor, Renz + More)</p> */}
                                </div>

                                <div style={{width: '30%'}}>
                                    <img src={tp_5} width={200}></img>
                                    {/* <p>1st Birthday Set (Featuring Sbk, Duppy, Shakes, Rolla, Logan + More)</p> */}
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                <div style={{width: '30%'}}>
                                    <img src={tp_3} width={200}></img>
                                    {/* <p>End of Year Set (2022) w/ Renz, Jawnino, JPntn, Kibo, Micofcourse + More</p> */}
                                </div>

                                <div style={{width: '30%'}}>
                                    <img src={tp_4} width={200}></img>
                                    {/* <p>M.I.C, Duppy, Melvillous, Logan, Jafro, Namesbliss + More</p> */}
                                </div>

                                <div style={{width: '30%'}}>
                                    <img src={tp_2} width={200}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                            </div>
                        </div>

                        <h3 style={{color: 'white', marginTop: '30px'}}>SET ARCHIVE [2024]</h3>

                        <div style={{marginTop: '10px', display: 'block', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div style={{width: '30%'}}>
                                    <img src={tp_7} width={200}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_8} width={200}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_9} width={200}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                <div style={{width: '30%'}}>
                                    <img src={tp_13} width={200}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_10} width={200}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_11} width={200}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                <div style={{width: '30%'}}>
                                    <img src={tp_12} width={200}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                            </div>
                        </div>

                        <h3 style={{color: 'white', marginTop: '40px'}}>PUBLICATIONS</h3>
                        <a href="https://www.complex.com/music/a/naz-hamdi/travs-presents-interview">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>COMPLEX UK - WITH TRAVSPRESENTS AT HELM, GRIME 3.0 IS IN SAFE HANDS</p>
                        </a>
                        <a href="https://www.linkedin.com/in/david-c-0244ba140/overlay/1705249159523/single-media-viewer?type=LINK&profileId=ACoAACI-7pwBHiKNNCTJNYQ3u8TlOvhSselsOOw&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BMYBjRvaUTMm%2BgVuFviqe4w%3D%3D">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>BASEMENT APPROVED ISSUE 03 - BAR FOR BAR</p>
                        </a>
                        <a href="https://guap.co/travs-presents-is-the-heartbeat-of-a-grime-resurgence-travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>GUAP.CO - TRAVSPRESENTS IS THE HEARTBEAT OF A GRIME RESURGENCE</p>
                        </a>
                        {/* <a href="https://documenteverything.substack.com/p/travs-presents-is-reinvigorating">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>DOCUMENT EVERYTHING - TRAVSPRESENTS IS REINVIGORATING GRIME THROUGH PURE INSTINCT</p>
                        </a> */}

                        <h3 style={{color: 'white', marginTop: '30px'}}>ONLINE PRESENCE</h3>
                        <a href="https://www.nts.live/shows/travs-presents">
                            <p style={{fontWeight: 'bold'}}>TRAVSPRESENTS ON NTS</p>
                        </a>
                        <a href="https://rinse.fm/shows/travs-presents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON RINSE.FM</p>
                        </a>
                        <a href="https://kindredeverything.com/TRAVS-PRESENTS-26-7-22">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON KINDRED LDN</p>
                        </a>
                        <a href="https://www.youtube.com/@travspresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON YOUTUBE</p>
                        </a>
                        <a href="https://twitter.com/TravsPresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON X</p>
                        </a>
                        <a href="https://www.instagram.com/travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON INSTAGRAM</p>
                        </a>
                        <a href="https://www.instagram.com/travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON INSTAGRAM</p>
                        </a>
                        <a href="https://www.tiktok.com/@travspresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON TIK TOK</p>
                        </a>
                        
                        {/* <img src={MAG_1} width={'500'} style={{marginTop: '20px'}}></img> */}
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={600} minWidth={500}>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>TRAVSPRESENTS.TV</h4> */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '450px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            WEB DEVELOPMENT PROJECT INCORPORATING SOFTWARE ENGINEERING AND GRAPHIC DESIGN TO CREATE A DIGITAL EXTENSION OF A LEADING PLATFORM IN UK CULTURE
                            <br></br>
                            <span style={{color: 'white', fontSize: '14px'}}>[ COMMISIONED PROJECT ]</span>
                        </p>
                    </div>
                    {/* <h3>[CLICK THE SPINNING LOGO TO ENTER THE SITE]</h3> */}
                    <a href="https://www.travspresents.tv/">
                        <img src={TRAVSPRESENTS1} style={{mixBlendMode: 'exclusion', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-65px'}}></img>
                    </a>
                    <p style={{width: '500px', textAlign: 'center', marginTop: '-45px'}}>In addition to my creative direction role, I created our website [travspresents.tv]. This includes coding and optimizing the platform to ensure a seamless experience creating a digital extension of the platform. The website resonates with the dynamic energy of the artists and the evolving essence of the new era.</p>
                    <img src={TRAVSPRESENTS2} style={{mixBlendMode: 'exclusion', width: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}></img>
                    <img className="invert" src={TRAVSPRESENTS3} style={{mixBlendMode: 'exclusion', width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}></img>
                    <p style={{width: '500px', textAlign: 'center'}}>Stripe, a dynamic and secure payment gateway, was integrated into the online store.</p>
                    <h3>[CLICK THE T-SHIRT TO ENTER THE SITE]</h3>
                    <a href="https://www.travspresents.tv/">
                        <img className="invert-on-hover" src={TRAVSPRESENTS5} style={{mixBlendMode: 'exclusion', width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '30px'}}></img>
                    </a>
                        
                    <div style={{width: '500px', textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '450px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            The visual direction of our events platform including videography of our events and radio shows
                            <br></br>
                            {/* <span style={{color: 'white', fontSize: '14px'}}>[ COMMISIONED PROJECT ]</span> */}
                        </p>
                        </div>
                        <img src={BASEMENT1} width={500}></img>
                        <p>[Camby for The Basement Mag Issue #3, 2023]</p>
                        <h3 style={{color: 'white', marginTop: '30px'}}>SET ARCHIVE [2023]</h3>
                        <div style={{display: 'block', marginTop: '10px', width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_1} width={180}></img>
                                    {/* <p>Travs Presents: KIBO + Friends</p> */}
                                {/* </div> */}
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_6} width={180}></img>
                                    {/* <p>General Courts + Friends (Featuring Duppy, Kruz Leone, Razor, Renz + More)</p> */}
                                {/* </div> */}

                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_5} width={180}></img>
                                    {/* <p>1st Birthday Set (Featuring Sbk, Duppy, Shakes, Rolla, Logan + More)</p> */}
                                {/* </div> */}
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_3} width={180}></img>
                                    {/* <p>End of Year Set (2022) w/ Renz, Jawnino, JPntn, Kibo, Micofcourse + More</p> */}
                                {/* </div> */}

                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_4} width={180}></img>
                                    {/* <p>M.I.C, Duppy, Melvillous, Logan, Jafro, Namesbliss + More</p> */}
                                {/* </div> */}

                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_2} width={180}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                            </div>
                        </div>

                        <h3 style={{color: 'white', marginTop: '30px'}}>SET ARCHIVE [2024]</h3>

                        <div style={{marginTop: '10px', display: 'block', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div style={{width: '30%'}}>
                                    <img src={tp_7} width={180}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_8} width={180}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_9} width={180}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                <div style={{width: '30%'}}>
                                    <img src={tp_13} width={180}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_10} width={180}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={tp_11} width={180}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                <div style={{width: '30%'}}>
                                    <img src={tp_12} width={180}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                </div>
                            </div>
                        </div>

                        <h3 style={{color: 'white', marginTop: '40px'}}>PUBLICATIONS</h3>
                        <a href="https://www.complex.com/music/a/naz-hamdi/travs-presents-interview">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>COMPLEX UK - WITH TRAVSPRESENTS AT HELM, GRIME 3.0 IS IN SAFE HANDS</p>
                        </a>
                        <a href="https://www.linkedin.com/in/david-c-0244ba140/overlay/1705249159523/single-media-viewer?type=LINK&profileId=ACoAACI-7pwBHiKNNCTJNYQ3u8TlOvhSselsOOw&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BMYBjRvaUTMm%2BgVuFviqe4w%3D%3D">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>BASEMENT APPROVED ISSUE 03 - BAR FOR BAR</p>
                        </a>
                        <a href="https://guap.co/travs-presents-is-the-heartbeat-of-a-grime-resurgence-travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>GUAP.CO - TRAVSPRESENTS IS THE HEARTBEAT OF A GRIME RESURGENCE</p>
                        </a>
                        {/* <a href="https://documenteverything.substack.com/p/travs-presents-is-reinvigorating">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>DOCUMENT EVERYTHING - TRAVSPRESENTS IS REINVIGORATING GRIME THROUGH PURE INSTINCT</p>
                        </a> */}

                        <h3 style={{color: 'white', marginTop: '30px'}}>ONLINE PRESENCE</h3>
                        <a href="https://www.nts.live/shows/travs-presents">
                            <p style={{fontWeight: 'bold'}}>TRAVSPRESENTS ON NTS</p>
                        </a>
                        <a href="https://rinse.fm/shows/travs-presents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON RINSE.FM</p>
                        </a>
                        <a href="https://kindredeverything.com/TRAVS-PRESENTS-26-7-22">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON KINDRED LDN</p>
                        </a>
                        <a href="https://www.youtube.com/@travspresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON YOUTUBE</p>
                        </a>
                        <a href="https://twitter.com/TravsPresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON X</p>
                        </a>
                        <a href="https://www.instagram.com/travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON INSTAGRAM</p>
                        </a>
                        <a href="https://www.instagram.com/travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON INSTAGRAM</p>
                        </a>
                        <a href="https://www.tiktok.com/@travspresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON TIK TOK</p>
                        </a>
                        
                        {/* <img src={MAG_1} width={'500'} style={{marginTop: '20px'}}></img> */}
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>TRAVSPRESENTS.TV</h4> */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '380px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            WEB DEVELOPMENT PROJECT INCORPORATING SOFTWARE ENGINEERING AND GRAPHIC DESIGN TO CREATE A DIGITAL EXTENSION OF A LEADING PLATFORM IN UK CULTURE
                            <br></br>
                            <span style={{color: 'white', fontSize: '12px'}}>[ COMMISIONED PROJECT ]</span>
                        </p>
                    </div>
                    <a href="https://www.travspresents.tv/">
                        <img src={TRAVSPRESENTS1} style={{mixBlendMode: 'exclusion', width: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-65px'}}></img>
                    </a>
                    <p style={{width: '350px', textAlign: 'center', marginTop: '-45px', fontSize: '12px'}}>In addition to my creative direction role, I created our website [travspresents.tv]. This includes coding and optimizing the platform to ensure a seamless experience creating a digital extension of the platform. The website resonates with the dynamic energy of the artists and the evolving essence of the new era.</p>
                    <img src={TRAVSPRESENTS2} style={{mixBlendMode: 'exclusion', width: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}></img>
                    <img className="invert" src={TRAVSPRESENTS3} style={{mixBlendMode: 'exclusion', width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}></img>
                    <p style={{width: '350px', textAlign: 'center'}}>Stripe, a dynamic and secure payment gateway, was integrated into the online store.</p>
                    <h3>[CLICK THE T-SHIRT TO ENTER THE SITE]</h3>
                    <a href="https://www.travspresents.tv/">
                        <img className="invert-on-hover" src={TRAVSPRESENTS5} style={{mixBlendMode: 'exclusion', width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '30px'}}></img>
                    </a>

                    <div style={{width: '350px', textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '380px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            The visual direction of our events platform including videography of our events and radio shows
                            <br></br>
                            {/* <span style={{color: 'white', fontSize: '12px'}}>[ COMMISIONED PROJECT ]</span> */}
                        </p>
                        </div>
                        <img src={BASEMENT1} width={350}></img>
                        <p>[Camby for The Basement Mag Issue #3, 2023]</p>
                        <h3 style={{color: 'white', marginTop: '30px'}}>SET ARCHIVE [2023]</h3>
                        <div style={{display: 'block', marginTop: '10px', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_1} width={170}></img>
                                    {/* <p>Travs Presents: KIBO + Friends</p> */}
                                {/* </div> */}
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_6} width={170}></img>
                                    {/* <p>General Courts + Friends (Featuring Duppy, Kruz Leone, Razor, Renz + More)</p> */}
                                {/* </div> */}
                                </div>

                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_5} width={170}></img>
                                    {/* <p>1st Birthday Set (Featuring Sbk, Duppy, Shakes, Rolla, Logan + More)</p> */}
                                {/* </div> */}
                            
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_3} width={170}></img>
                                    {/* <p>End of Year Set (2022) w/ Renz, Jawnino, JPntn, Kibo, Micofcourse + More</p> */}
                                {/* </div> */}
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_4} width={170}></img>
                                    {/* <p>M.I.C, Duppy, Melvillous, Logan, Jafro, Namesbliss + More</p> */}
                                {/* </div> */}

                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_2} width={170}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                            </div>
                        </div>

                        <h3 style={{color: 'white', marginTop: '30px'}}>SET ARCHIVE [2024]</h3>

                        <div style={{marginTop: '10px', display: 'block', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '10px'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_7} width={170}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_8} width={170}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '10px'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_9} width={170}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                            
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_13} width={170}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '10px'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_10} width={170}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_11} width={170}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '10px'}}>
                                {/* <div style={{width: '30%'}}> */}
                                    <img src={tp_12} width={170}></img>
                                    {/* <p>Duppy + Friends (Featuring Mez, Kruz Leone, Jammz + More)</p> */}
                                {/* </div> */}
                            </div>
                        </div>

                        <h3 style={{color: 'white', marginTop: '40px'}}>PUBLICATIONS</h3>
                        
                        <a href="https://www.complex.com/music/a/naz-hamdi/travs-presents-interview">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>COMPLEX UK - WITH TRAVSPRESENTS AT HELM, GRIME 3.0 IS IN SAFE HANDS</p>
                        </a>
                        <a href="https://www.linkedin.com/in/david-c-0244ba140/overlay/1705249159523/single-media-viewer?type=LINK&profileId=ACoAACI-7pwBHiKNNCTJNYQ3u8TlOvhSselsOOw&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BMYBjRvaUTMm%2BgVuFviqe4w%3D%3D">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>BASEMENT APPROVED ISSUE 03 - BAR FOR BAR</p>
                        </a>
                        <a href="https://guap.co/travs-presents-is-the-heartbeat-of-a-grime-resurgence-travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>GUAP.CO - TRAVSPRESENTS IS THE HEARTBEAT OF A GRIME RESURGENCE</p>
                        </a>
                        {/* <a href="https://documenteverything.substack.com/p/travs-presents-is-reinvigorating">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>DOCUMENT EVERYTHING - TRAVSPRESENTS IS REINVIGORATING GRIME THROUGH PURE INSTINCT</p>
                        </a> */}

                        <h3 style={{color: 'white', marginTop: '20px'}}>ONLINE PRESENCE</h3>
                        <a href="https://www.nts.live/shows/travs-presents">
                            <p style={{fontWeight: 'bold'}}>TRAVSPRESENTS ON NTS</p>
                        </a>
                        <a href="https://rinse.fm/shows/travs-presents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON RINSE.FM</p>
                        </a>
                        <a href="https://kindredeverything.com/TRAVS-PRESENTS-26-7-22">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON KINDRED LDN</p>
                        </a>
                        <a href="https://www.youtube.com/@travspresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON YOUTUBE</p>
                        </a>
                        <a href="https://twitter.com/TravsPresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON X</p>
                        </a>
                        <a href="https://www.instagram.com/travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON INSTAGRAM</p>
                        </a>
                        <a href="https://www.instagram.com/travspresents/">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON INSTAGRAM</p>
                        </a>
                        <a href="https://www.tiktok.com/@travspresents">
                            <p style={{fontWeight: 'bold', marginTop: '0px'}}>TRAVSPRESENTS ON TIK TOK</p>
                        </a>
                        
                        {/* <img src={MAG_1} width={'500'} style={{marginTop: '20px'}}></img> */}
                    </div>
                </div>
            </div>
            </MediaQuery>
        </section>
    );
}

export default TRVPRNTS;