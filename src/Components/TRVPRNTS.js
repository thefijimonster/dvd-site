import Background from "./Background";
import '../App.css'
import Back from "./Back";
import TRAVSPRESENTS1 from '../Assets/TRAVSPRESENTS1.gif'
import TRAVSPRESENTS2 from '../Assets/TRAVSPRESENTS2.png'
import TRAVSPRESENTS3 from '../Assets/TRAVSPRESENTS3.png'
import TRAVSPRESENTS4 from '../Assets/TRAVSPRESENTS4.png'
import TRAVSPRESENTS5 from '../Assets/TRAVSPRESENTS5.png'
import MediaQuery from "react-responsive";

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
                    <h3>[CLICK THE T-SHIRT TO ENTER STORE]</h3>
                    <a href="https://www.travspresents.tv/store">
                        <img className="invert-on-hover" src={TRAVSPRESENTS5} style={{mixBlendMode: 'exclusion', width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '30px'}}></img>
                    </a>
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
                </div>
            </div>
            </MediaQuery>
        </section>
    );
}

export default TRVPRNTS;