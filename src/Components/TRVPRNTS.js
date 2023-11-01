import Background from "./Background";
import '../App.css'
import Back from "./Back";
import TRAVSPRESENTS1 from '../Assets/TRAVSPRESENTS1.gif'
import TRAVSPRESENTS2 from '../Assets/TRAVSPRESENTS2.png'
import TRAVSPRESENTS3 from '../Assets/TRAVSPRESENTS3.png'
import TRAVSPRESENTS4 from '../Assets/TRAVSPRESENTS4.png'
import TRAVSPRESENTS5 from '../Assets/TRAVSPRESENTS5.png'

const TRVPRNTS = () => {
    return(
        <section>
            {/* <Background></Background> */}
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>TRAVSPRESENTS.TV</h4> */}
                    <a href="https://www.travspresents.tv/">
                        <img src={TRAVSPRESENTS1} style={{mixBlendMode: 'exclusion', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-25px'}}></img>
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
        </section>
    );
}

export default TRVPRNTS;