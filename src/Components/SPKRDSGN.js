import '../App.css'
import Background from './Background';
import Back from './Back';
import HorizontalScrollContainer from './HorizontalScrollContainer';

import PAGE1 from '../Assets/PAGE_1.png'
import PAGE2 from '../Assets/PAGE_2.png'
import PAGE3 from '../Assets/PAGE_3.png'
import PAGE4 from '../Assets/PAGE_4.png'
import PAGE5 from '../Assets/PAGE_5.png'
import PAGE6 from '../Assets/PAGE_6.png'
import PAGE7 from '../Assets/PAGE_7.png'
import PAGE8 from '../Assets/PAGE_8.png'
import PAGE9 from '../Assets/PAGE_9.png'
import PAGE10 from '../Assets/PAGE_10.png'
import PAGE11 from '../Assets/PAGE_11.png'
import PAGE12 from '../Assets/PAGE_12.png'
import PAGE13 from '../Assets/PAGE_13.png'
import PAGE14 from '../Assets/PAGE_14.png'
import PAGE15 from '../Assets/PAGE_15.png'
import PAGE16 from '../Assets/PAGE_16.png'
// import PAGE17 from '../Assets/PAGE_17.png'
import PAGE17 from '../Assets/PAGE_18.png'
import PAGE18 from '../Assets/PAGE_19.png'
import PAGE19 from '../Assets/PAGE_20.png'

import SPEAKER2 from '../Assets/SPEAKER2.gif'
import SPEAKER3 from '../Assets/SPEAKER3.png'
import SPEAKER4 from '../Assets/SPEAKER4.png'
import SPEAKER5 from '../Assets/SPEAKER5.png'
import SPEAKER6 from '../Assets/SPEAKER6.png'
import SPEAKER7 from '../Assets/SPEAKER7.png'
import SPEAKER8 from '../Assets/SPEAKER8.png'
import SPEAKER9 from '../Assets/SPEAKER9.png'
import SPEAKER10 from '../Assets/SPEAKER10.png'
import SPEAKER11 from '../Assets/SPEAKER11.png'
import SPEAKER12 from '../Assets/SPEAKER12.png'
import SPEAKER13 from '../Assets/SPEAKER13.png'
import SPEAKER14 from '../Assets/SPEAKER14.png'
import HorizontalScrollable from './HorizontalScrollable';

import SPKR0011 from '../Assets/SPKR0011.jpg'
import SPKR0012 from '../Assets/SPKR0012.jpg'
import SPKR0013 from '../Assets/SPKR0013.jpg'
import SPKR0014 from '../Assets/SPKR0014.jpg'
import SPKR0015 from '../Assets/SPKR0015.jpg'
import SPKR0016 from '../Assets/SPKR0016.jpg'
import SPKR0017 from '../Assets/SPKR0017.jpg'

import SPKR1 from '../Assets/SPKR1.jpg'
import SPKR2 from '../Assets/SPKR2.jpg'
import SPKR3 from '../Assets/SPKR3.jpg'
import SPKR4 from '../Assets/SPKR4.jpg'
import SPKR5 from '../Assets/SPKR5.jpg'
import SPKR6 from '../Assets/SPKR6.jpg'
import SPKR7 from '../Assets/SPKR7.jpg'
import SPKR8 from '../Assets/SPKR8.jpg'
import SPKR9 from '../Assets/SPKR9.jpg'

import SPKR0021 from '../Assets/SPKR0021.jpg'
import SPKR0022 from '../Assets/SPKR0022.jpg'
import SPKR0023 from '../Assets/SPKR0023.jpg'
import SPKR0024 from '../Assets/SPKR0024.jpg'
import SPKR0025 from '../Assets/SPKR0025.jpg'

import FLOOR1 from '../Assets/FLOOR1.gif'

const SPKRDSGN = () => {

    return(
        <section>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px', marginBottom: '40px'}}>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px', marginBottom: '30px'}}>4-POINT SPEAKER SYSTEM</h4> */}
                    {/* <img className='invert' style={{mixBlendMode: 'exclusion', width: '700px', height: 'auto', marginTop: '-30px'}} src={SPEAKER14}></img>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // marginTop: '-45px',
                        // border: '1px solid green'
                    }}>
                        <h4 className='revealLabel' style={{fontSize: '14px', marginTop: '-15px', backgroundColor: 'red'}}>[SEE SYSTEM IN USE]</h4>
                        <img className='hoverImage' style={{width: '500px', height: 'auto', mixBlendMode: 'lighten', marginTop: '40px'}} src={FLOOR1}></img>
                    </div> */}
                    {/* <span style={{border: '0.5px solid white', width: '600px'}}></span> */}
                    {/* <p style={{fontSize: '14px', fontWeight: 'bolder', marginTop: '-14px', marginBottom: '25px', backgroundColor: 'white', color: 'red', padding: '2px', paddingLeft: '4px', paddingRight: '4px'}}>[SPEAKER DOCUMENTATION BELOW]</p> */}
                    
                    {/* <p style={{width: '500px', textAlign: 'center', marginTop: '10px'}}>
                        GROWING UP IN A HOUSEHOLD WITH NO MUSIC, I ENSURED THAT THE REST OF MY LIFE WOULD BE FILLED WITH IT.
                        <br></br>
                        <br></br>
                    </p> */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '10px',  paddingRight: '8px', paddingLeft: '8px'}}>
                        <p style={{width: '600px', textAlign: 'center', color: 'red', fontWeight: 'bolder', fontSize: '20px', lineHeight: '24px'}}>
                            AN EXPLORATION INTO APPLYING MY INTER-DISCIPLINARY PRACTISE WITH ART [MUSIC] TO CREATE A FOUR-POINT LOUDSPEAKER SYSTEM
                            <br></br>
                            <span style={{color: 'white', fontSize: '14px'}}>[ SELF-LED PROJECT ]</span>
                        </p>
                    </div>
                    <a href="https://dvd-folio.s3.eu-west-2.amazonaws.com/SPKRDSGN001.pdf">
                        <img className="galleryImg" style={{width: '340px', mixBlendMode: 'normal'}} src={require('../Assets/PAGE_ONE.png')}></img>
                    </a>

                    {/* <h6 style={{fontSize: '30px', marginTop: '-235px', backgroundColor: 'white', marginBottom: '235px', mixBlendMode: 'normal'}}>[CLICK TO <span style={{width: '100px'}}></span> VIEW DOCUMENT]</h6> */}

                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', color: 'black', marginTop: '10px'}}>
                        <p style={{width: '400px'}}>TWO-WAY BOOKSHELF LOUDSPEAKER CONSISTING OF 6.5" DS175 WOOFER PAIRED WITH DC28F-8 DOME TWEETER IN BASS-REFLEX DESIGN WITH FRONT-FIRING TUNED PORT</p>
                        {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>FREQUENCY RESPONSE</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>50Hz-20kHz</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>IMPEDANCE</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>8 Ohms</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>SENSITIVITY</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>88 dB</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>CROSSOVER FREQUENCY</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>1.0 kHz</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '300px', textAlign: 'right', marginLeft: '50px'}}>LOW/MID-FREQUENCY TRANSDUCER</p><p style={{paddingLeft: '20px', width: '300px', textAlign: 'left'}}>6.5-INCH COATED PAPER CONE WOOFER</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '300px', textAlign: 'right', marginLeft: '50px'}}>MID/HIGH-FREQUENCY TRANSDUCER</p><p style={{paddingLeft: '20px', width: '300px', textAlign: 'left'}}>1-1/8-INCH TREATED SILK DOME </p>
                        </div> */}
                    </div>
                    <br></br>
                    <div style={{display: 'flex', width: '500px', alignItems: 'center', justifyContent: 'center', color: 'black', marginTop: '-30px'}}>
                        <img className='invert' style={{mixBlendMode: 'exclusion', width: '104px', height: 'auto', marginTop: '10px'}} src={SPEAKER4}></img>
                        <img className='invert' style={{mixBlendMode: 'exclusion', width: '120px', height: 'auto', marginTop: '10px'}} src={SPEAKER5}></img>
                        <img className='invert' style={{mixBlendMode: 'exclusion', width: '110px', height: 'auto', marginTop: '10px'}} src={SPEAKER3}></img>
                    </div>
                    <div style={{marginLeft: '-40px', marginBottom: '40px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>FREQUENCY RESPONSE</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>50Hz-20kHz</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>IMPEDANCE</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>8 Ohms</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>SENSITIVITY</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>88 dB</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>CROSSOVER FREQUENCY</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>1.0 kHz</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '300px', textAlign: 'right', marginLeft: '50px'}}>LOW/MID-FREQUENCY TRANSDUCER</p><p style={{paddingLeft: '20px', width: '300px', textAlign: 'left'}}>6.5-INCH COATED PAPER CONE WOOFER</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '600px'}}>
                            <p style={{width: '300px', textAlign: 'right', marginLeft: '50px'}}>MID/HIGH-FREQUENCY TRANSDUCER</p><p style={{paddingLeft: '20px', width: '300px', textAlign: 'left'}}>1-1/8-INCH TREATED SILK DOME </p>
                        </div>
                    </div>
                    <p style={{display: 'none', fontSize: '14px', fontWeight: 'bolder'}}>PHOTO GALLERY</p>
                    <div style={{display: 'none', flexDirection: 'row', alignItems: 'center', gap: '14px', marginTop: '-30px'}}>
                        <div>
                        <p className='galleryLabel'>[1]</p>
                        <img className='galleryImage' src={SPKR1}></img>
                        </div>
                        <div>
                        <p className='galleryLabel'>[2]</p>
                        <img className='galleryImage' src={SPKR2}></img>
                        </div>
                        <div>
                        <p className='galleryLabel'>[3]</p>
                        <img className='galleryImage' src={SPKR3}></img>
                        </div>
                        <div>
                        <p className='galleryLabel'>[4]</p>
                        <img className='galleryImage' src={SPKR4}></img>
                        </div>
                        <div>
                        <p className='galleryLabel'>[5]</p>
                        <img className='galleryImage' src={SPKR5}></img>
                        </div>
                        {/* <div>
                        <p className='galleryLabel'>[6]</p>
                        <img className='galleryImage' src={SPKR0016}></img>
                        </div>
                        <div>
                        <p className='galleryLabel'>[7]</p>
                        <img className='galleryImage' src={SPKR0017}></img>
                        </div>
                        <div>
                        <p className='galleryLabel'>[8]</p>
                        <img className='galleryImage' src={SPKR0011}></img>
                        </div> */}
                    </div>
                    {/* <p style={{width: '500px', textAlign: 'center', marginTop: '-5px'}}><span class="highlight">Scroll left to view the document below</span> [authored by me] that comprehnsively logged the process of creating this speaker system.</p> */}
                    <div style={{overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', marginTop: '10px', marginBottom: '10px'}}>
                    {/* <HorizontalScrollable/> */}
                        {/* <img className='speaker-pdf' src={PAGE1}></img>
                        <img className='speaker-pdf' src={PAGE2}></img>
                        <img className='speaker-pdf' src={PAGE3}></img>
                        <img className='speaker-pdf' src={PAGE4}></img>
                        <img className='speaker-pdf' src={PAGE5}></img>
                        <img className='speaker-pdf' src={PAGE6}></img>
                        <img className='speaker-pdf' src={PAGE7}></img> */}
                        {/* <img className='speaker-pdf' src={PAGE8}></img>
                        <img className='speaker-pdf' src={PAGE9}></img>
                        <img className='speaker-pdf' src={PAGE10}></img>
                        <img className='speaker-pdf' src={PAGE11}></img>
                        <img className='speaker-pdf' src={PAGE12}></img> */}
                        <img className='speaker-pdf' style={{width: '1280px'}} src={SPKR1}></img>
                        <img className='speaker-pdf' style={{width: '1280px'}} src={SPKR4}></img>
                        {/* <img className='speaker-pdf' style={{width: '680px'}} src={SPKR3}></img> */}
                        <img className='speaker-pdf' style={{width: '1280px'}} src={SPKR2}></img>
                        <img className='speaker-pdf' style={{width: '1280px'}} src={SPKR6}></img>
                        <img className='speaker-pdf' style={{width: '1280px'}} src={SPKR5}></img>
                        <img className='speaker-pdf' style={{width: '1280px'}} src={SPKR7}></img>
                        <img className='speaker-pdf' style={{width: '1280px'}} src={SPKR8}></img>
                        {/* <img className='speaker-pdf' style={{width: '680px'}} src={SPKR9}></img> */}
                        {/* <img className='speaker-pdf' src={PAGE18}></img> */}
                        {/* <img className='speaker-pdf' src={PAGE19}></img> */}
                    </div>
                    {/* <a href="https://dvd-folio.s3.eu-west-2.amazonaws.com/SPKRDSGN001.pdf">
                        <p style={{textAlign: 'center', backgroundColor: 'red', color: 'white', fontWeight: 'bold', fontSize: '12px', padding: '4px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px'}}>[CLICK TO VIEW THE DOCUMENTATION BOOKLET]</p>
                    </a> */}
                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                        <p style={{width: '400px'}}>VINTAGE-STYLED DESIGN OF TWO-WAY LOUDSPEAKER WITH A 8" FOSTEX FF225WK FULL RANGE AND ALUMINIUM BEYMA DOME TWEETER IN BASS-REFLEX DESIGN WITH FRONT-FIRING TUNED PORT</p>
                        {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>FREQUENCY RESPONSE</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>40Hz-20kHz</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>IMPEDANCE</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>8 Ohms</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>SENSITIVITY</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>93 dB</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>CROSSOVER FREQUENCY</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>900 Hz</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '400px', textAlign: 'right', marginLeft: '50px'}}>LOW/MID-FREQUENCY TRANSDUCER</p><p style={{paddingLeft: '20px', width: '400px', textAlign: 'left'}}>8-INCH DOUBLE LAYER PAPER CONE FULL RANGE</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '300px', textAlign: 'right', marginLeft: '50px'}}>MID/HIGH-FREQUENCY TRANSDUCER</p><p style={{paddingLeft: '20px', width: '300px', textAlign: 'left'}}>1.25-INCH ALUMINIUM DOME TWEETER </p>
                        </div> */}
                    </div>
                    {/* <img style={{mixBlendMode: 'exclusion', width: '350px', marginTop: '10px'}} src={SPEAKER2}></img> */}
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px', marginTop: '30px'}}>SPKRDSGN002</h4> */}
                    <div style={{display: 'flex', width: '500px', alignItems: 'center', justifyContent: 'center'}}>
                        <img className='invert' style={{mixBlendMode: 'exclusion', width: '106px', height: 'auto', marginTop: '10px'}} src={SPEAKER8}></img>
                        <img className='invert' style={{mixBlendMode: 'exclusion', width: '110px', height: 'auto', marginTop: '10px'}} src={SPEAKER7}></img>
                        <img className='invert' style={{mixBlendMode: 'exclusion', width: '120px', height: 'auto', marginTop: '10px'}} src={SPEAKER6}></img>
                    </div>
                    <div style={{marginLeft: '-40px', marginBottom: '40px'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>FREQUENCY RESPONSE</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>40Hz-20kHz</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>IMPEDANCE</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>8 Ohms</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>SENSITIVITY</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>93 dB</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '200px', textAlign: 'right', marginLeft: '50px'}}>CROSSOVER FREQUENCY</p><p style={{paddingLeft: '20px', width: '200px', textAlign: 'left'}}>900 Hz</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '400px', textAlign: 'right', marginLeft: '50px'}}>LOW/MID-FREQUENCY TRANSDUCER</p><p style={{paddingLeft: '20px', width: '400px', textAlign: 'left'}}>8-INCH DOUBLE LAYER PAPER CONE FULL RANGE</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '20px', width: '800px'}}>
                            <p style={{width: '300px', textAlign: 'right', marginLeft: '50px'}}>MID/HIGH-FREQUENCY TRANSDUCER</p><p style={{paddingLeft: '20px', width: '300px', textAlign: 'left'}}>1.25-INCH ALUMINIUM DOME TWEETER </p>
                        </div>
                    </div>
                    {/* <div style={{overflowX: 'scroll', width: '500px', whiteSpace: 'nowrap', alignItems: 'center'}}>
                        <img className='speaker-pdf' src={SPKR0021}></img>
                        <img className='speaker-pdf' src={SPKR0022}></img>
                        <img className='speaker-pdf' src={SPKR0023}></img>
                        <img className='speaker-pdf' src={SPKR0024}></img>
                        <img className='speaker-pdf' src={SPKR0025}></img>
                    </div> */}
                    <p style={{width: '500px', textAlign: 'center'}}>DOCUMENTATION BOOKLET STILL TO BE CREATED.</p>
                    <img className='bw-image' style={{width: '450px', height: 'auto'}} src={SPEAKER10}></img>
                    {/* <h4 style={{backgroundColor: 'red', fontSize: '30px', marginBottom: '30px'}}>4-POINT SPEAKER SYSTEM</h4> */}
                    {/* <img className='invert' style={{mixBlendMode: 'exclusion', width: '700px', height: 'auto', marginTop: '-10px'}} src={SPEAKER14}></img> */}
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // marginTop: '-15px',
                        // border: '1px solid green'
                    }}>
                        {/* <h4 className='revealLabel' style={{fontSize: '14px', marginTop: '-15px', backgroundColor: 'red'}}>[SEE SYSTEM IN USE]</h4> */}
                        <img style={{width: '800px', height: 'auto', mixBlendMode: 'lighten', marginTop: '40px'}} src={FLOOR1}></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SPKRDSGN;