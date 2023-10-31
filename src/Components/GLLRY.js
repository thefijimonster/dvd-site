import '../App.css'
import Background from './Background';
import Back from './Back';

const GLLRY = () => {
    return(
        <section>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '40px', marginBottom: '35px'}}>
                    <h4 className='titleHover'>STEM - KANO PC CAMPAIGN</h4>
                    <div className='hiddenDescription'><h1>SHOT AND VISUALLY DIRECTED CAMPAIGN FOR KANO PC [STEM]</h1></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap', // Allow images to wrap to the next row on smaller screens
                        justifyContent: 'center', // Center the images horizontally
                        rowGap: '20px',
                        marginTop: '-20px'
                    }}>
                        <img className="galleryImg"  src={require('../Assets/KANOPC1.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/KANOPC2.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/KANOPC3.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/KANOPC4.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/KANOPC5.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/KANOPC6.png')}></img>
                    </div>
                    {/* <p>During my time as a junior design engineer intern at STEM, I was asked to visually direct a campaign for a modular PC they had built.</p> */}
                    <h4 className='titleHover'>MERKY ACE - LOCKSTOCK</h4>
                    <div className='hiddenDescription'><h1>SHOT AND VISUALLY DIRECTED CAMPAIGN FOR KANO PC [STEM]</h1></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap', // Allow images to wrap to the next row on smaller screens
                        justifyContent: 'center', // Center the images horizontally
                        gap: '20px',
                        marginTop: '-20px'
                    }}>
                        {/* <img style={{border: '0.7px solid white'}} className="galleryImg"  src={require('../Assets/LOCKSTOCK5.png')}></img> */}
                        <img className="galleryImg"  src={require('../Assets/LOCKSTOCK2.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/LOCKSTOCK1.png')}></img>
                        {/* <img className="galleryImg"  src={require('../Assets/LOCKSTOCK4.png')}></img> */}
                        <img className="galleryImg"  src={require('../Assets/LOCKSTOCK3.png')}></img>
                    </div>
                    {/* <p>Commissioned by Obligated Records to direct the release of 002 (Lockstock - Merky ACE). Oblig and I have been closely working for a while - he previously commissioned me to direct his label’s first release 001 (Mercy - Novelist prod. Sustrapperazzi).</p> */}
                    <h4 className='titleHover'>SPKRDSGN001</h4>
                    <div className='hiddenDescription'><h1>SHOT AND VISUALLY DIRECTED CAMPAIGN FOR KANO PC [STEM]</h1></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap', // Allow images to wrap to the next row on smaller screens
                        justifyContent: 'center', // Center the images horizontally
                        gap: '20px',
                        marginTop: '-20px'
                    }}>
                        {/* <img style={{border: '0.7px solid white'}} className="galleryImg"  src={require('../Assets/LOCKSTOCK5.png')}></img> */}
                        <img className="galleryImg"  src={require('../Assets/SPKR1.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/SPKR2.png')}></img>
                        {/* <img className="galleryImg"  src={require('../Assets/LOCKSTOCK4.png')}></img> */}
                        <img className="galleryImg"  src={require('../Assets/SPKR3.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/SPKR4.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/SPKR5.png')}></img>
                    </div>
                    <h4 className='titleHover'>SANDSCAPE</h4>
                    <div className='hiddenDescription'><h1>SHOT AND VISUALLY DIRECTED CAMPAIGN FOR KANO PC [STEM]</h1></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap', // Allow images to wrap to the next row on smaller screens
                        justifyContent: 'center', // Center the images horizontally
                        gap: '20px',
                        marginTop: '-20px'
                    }}>
                        {/* <img style={{border: '0.7px solid white'}} className="galleryImg"  src={require('../Assets/LOCKSTOCK5.png')}></img> */}
                        <img className="galleryImg"  src={require('../Assets/SANDSCAPE6.png')}></img>
                        <img className="galleryImg"  src={require('../Assets/SANDSCAPE7.png')}></img>
                        {/* <img className="galleryImg"  src={require('../Assets/LOCKSTOCK4.png')}></img> */}
                        <img className="galleryImg"  src={require('../Assets/SANDSCAPE8.png')}></img>
                    </div>
                    <h4 className='titleHover'>RENZ - PULLUPINADINGER</h4>
                    <div className='hiddenDescription'><h1>SHOT AND VISUALLY DIRECTED CAMPAIGN FOR KANO PC [STEM]</h1></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap', // Allow images to wrap to the next row on smaller screens
                        justifyContent: 'center', // Center the images horizontally
                        gap: '20px',
                        marginTop: '-20px'
                    }}>
                        {/* <img style={{border: '0.7px solid white'}} className="galleryImg"  src={require('../Assets/LOCKSTOCK5.png')}></img> */}
                        <img className="galleryImg"  style={{filter: 'contrast(120%)'}}  src={require('../Assets/RNZ2.png')}></img>
                        <img className="galleryImg"  style={{filter: 'contrast(110%)'}}  src={require('../Assets/RNZ5.png')}></img>
                        <img className="galleryImg"  style={{filter: 'contrast(120%)'}}  src={require('../Assets/RNZ3.png')}></img>
                    </div>
                    <h4 className='titleHover'>QUASI-STELLAR RADIO</h4>
                    <div className='hiddenDescription'><h1>SHOT AND VISUALLY DIRECTED CAMPAIGN FOR KANO PC [STEM]</h1></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap', // Allow images to wrap to the next row on smaller screens
                        justifyContent: 'center', // Center the images horizontally
                        gap: '20px',
                        marginTop: '-20px'
                    }}>
                        {/* <img style={{border: '0.7px solid white'}} className="galleryImg"  src={require('../Assets/LOCKSTOCK5.png')}></img> */}
                        <img className="galleryImg"  style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO1.png')}></img>
                        <img className="galleryImg" width={160} style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO3.png')}></img>
                        <img className="galleryImg"  style={{filter: 'invert(100%', mixBlendMode: 'exclusion'}}  src={require('../Assets/RADIO2.png')}></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GLLRY;