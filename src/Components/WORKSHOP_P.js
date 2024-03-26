import MediaQuery from 'react-responsive'
import WORKSHOP1 from '../Assets/ORBIT_SPEAKER_CROPPED.gif';
import '../Fonts/PTMono-Regular.ttf'
import BEAUS1 from '../Assets/BEAUS2.jpg'
import BEAUS4 from '../Assets/BEAUS4.jpg'
import BEAUS5 from '../Assets/BEAUS5.jpg'
import BEAUS6 from '../Assets/BEAUS6.jpg'
import DVD from '../Assets/dvd_logo_white.png'
import DVD2 from '../Assets/dvd_new_logo.png'
import WORKSHOP2 from '../Assets/WORKSHOP_1.jpg'

const WORKSHOP_portrait = () => {
    return(
    <section>
            {/* <Background></Background> */}
            <MediaQuery minWidth={501}>
            {/* <div id="contentDiv" style={{backgroundColor: 'rgb(238 237 238)'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '-50px',  paddingRight: '8px', paddingLeft: '8px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '450px', marginTop: '-30px'}}>
                        <h style={{textAlign: 'center', textTransform: 'uppercase', color: 'white', fontWeight: 'bold', fontSize: '35px', lineHeight: '30px'}}>
                            Upcoming Loudspeaker Building Workshop
                        </h>
                        <p style={{textAlign: 'center', textTransform: 'uppercase', color: 'white', fontWeight: 'lighter', fontSize: '14px', lineHeight: '14px'}}>
                            Workshop date TBC [end of May]<br></br>
                            Hosted @BeauBeau's Cafe, 4 Gravel Ln, London E1 7AA<br></br><br></br>
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-80px'}}>
                        <img src={WORKSHOP1} style={{mixBlendMode: 'exclusion', width: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                    </div>
                    <p style={{textAlign: 'center', width: '500px', textTransform: 'none', color: 'white', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px', marginTop: '-4px'}}>
                        Participants will learn how to build <span style={{fontWeight: 'bolder', color: 'white'}}>A PAIR</span> of passive speakers<span style={{fontSize: '15px'}}>*</span> designed by me [shown orbiting here] and keep them<br></br><br></br>
                    </p>
                    <p style={{textAlign: 'center', width: '500px', textTransform: 'none', color: 'white', fontWeight: 'lighter', fontSize: '13px', marginTop: '-20px'}}>
                        <span style={{fontSize: '15px'}}>*</span><span style={{fontWeight: 'lighter'}}>Passive speakers require an amplifier</span> - this can be added for a total price of £315
                    </p>
                    <a href="https://buy.stripe.com/14kcON3mz5c26WIcMP">
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '2px'}}><h1 className="projectName" style={{color: 'red'}}>[ RESERVE £265 ]</h1><p className="wordTag">[ RESERVE £265 ]</p></div>
                    </a>
                    {/* <p style={{textAlign: 'center', width: '500px', textTransform: 'none', color: 'white', fontWeight: 'lighter', fontSize: '13px'}}>
                        Passive speakers require an amplifier - this can be added for a total price of £315
                    </p>
                    <a href="https://book.stripe.com/3cs6qp6yL5c294Q8wy">
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '10px'}}><h1 className="projectName" style={{color: 'red'}}>[ RESERVE W/ AMPLIFIER £315 ]</h1><p className="wordTag">[ RESERVE W/ AMPLIFIER £315 ]</p></div>
                    </a>
                </div>
            </div> */}

            <div id="contentDiv" style={{backgroundColor: 'rgb(238 237 238)', display: 'flex', flexDirection: 'column', overflow: 'scroll'}}>
                {/* <div style={{display: 'flex', overflowY: 'scroll', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px',  paddingRight: '8px', paddingLeft: '8px', color: 'rgb(22 22 22)'}}> */}
                    {/* <div style={{display: 'flex', flexDirection: 'column', width: '95%'}}> */}
                    <img src={DVD} style={{mixBlendMode: 'exclusion', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', marginBottom: '14px'}}></img>
                        <h style={{textAlign: 'center', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '12vw', lineHeight: '10vw', paddingTop: '0px'}}>
                            {/* Upcoming Loudspeaker Building Workshop */}
                            COMMUNAL <br></br>
                            CONSTRUCTION
                        </h>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'normal', fontStyle: 'italic', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            SPEAKER BUILDING WORKSHOP HOSTED BY DVD
                        </p>
                        {/* <p style={{textAlign: 'center', marginTop: '10px', fontFamily: 'PT Mono', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'NORMAL', fontSize: '20px', lineHeight: '14px'}}>
                            LOUDSPEAKER BUILDING WORKSHOP
                        </p>
                        <p style={{textAlign: 'center', marginTop: '0px', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '16px', lineHeight: '14px'}}>
                            DATE
                        </p>
                        <p style={{textAlign: 'center', marginTop: '-10px', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px'}}>
                            Workshop date TBC [end of May]<br></br>
                        </p>
                        <p style={{textAlign: 'center', marginTop: '10px', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '16px', lineHeight: '14px'}}>
                            LOCATION
                        </p>
                        <p style={{textAlign: 'center', marginTop: '-10px', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px'}}>
                            Hosted @ BeauBeau's Cafe<br></br>
                            4 Gravel Ln, London E1 7AA<br></br><br></br>
                        </p> */}
                    {/* </div> */}
                    
                    {/* <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        SPEAKER-BUILDING WORKSHOP
                    </p> */}

                    {/* <p style={{textAlign: 'center', width: '95%', textTransform: 'none', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        although music itself is greatly accessible, the way we experience it can be exclusive.
                    </p> */}
                    

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        DIY CULTURE HAS BEEN UNDENIABLY IMPORTANT IN UNDERGROUND MUSIC SCENES AND YOUTH CULTURE.
                    </p>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px', marginTop: '0px'}}>
                        Many publications, such as ‘DIY Cultures and Underground Music Scenes’ by Paula Guerra and Andy Bennet, reference the undeniable importance of DIY culture in underground music scenes.
                        <br></br><br></br>
                        Embracing a DIY culture is inherently beneficial for youth culture as it fosters resourcefulness. It encourages young individuals to step outside the confines of conventional consumerism and instills a valuable sense of accomplishment and resilience - this ethos not only develops practical skills but also nurtures an innovative mindset.
                        <br></br><br></br>
                        Pre-fabricated objects often deviate from fundamental design principles, such as DFA [design for assembly/disassembly], and lack environmental visibility due to their non-modular nature. But as designers, our natural inclination is to question established norms - prompting me to reflect on the acceptance of non-modular products. The proposed loudspeaker aims to challenge this by being designed for assembly/disassembly, which, in turn, will encourage others to adopt a DIY culture.
                        <br></br><br></br>
                        There has been a surge in mainstream DIY culture to some extent. The resurgence of vinyl in a digital age reinforces the notion that people inherently appreciate tangible experiences when given the choice. And we are seeing more examples of modular design in consumer products, including the audio design engineering space.
                    </p>

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontStyle: 'italic', fontSize: '4vw', lineHeight: '4vw', marginTop: '30px'}}>
                        SPEAKERS HOLD A UNIQUE AND INDISPENSABLE ROLE IN OUR LIVES AS THE GATEWAY TO MUSIC.
                    </p>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        ...AND IN CURRENT CONTEXT?
                    </p>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px', marginTop: '0px'}}>
                        INCREASED PREVALENCE OF HI-FI LISTENING BARS<br></br><br></br>
                        +<br></br><br></br>
                        A GROWING CONNECTION WITH ANALOGUE TECHNOLOGIES<br></br><br></br>
                        =<br></br><br></br>
                        INCREASED AWARENESS AND INTEREST SURROUNDING HI-FI LOUDSPEAKER SYSTEMS AND SOUND REPLICATION<br></br>
                    </p>

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        SO... EXPLAIN
                    </p>

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px', marginTop: '0px'}}>
                        Alternatives to club nights are becoming more prevalent as people are looking for a more intimate, relaxed and connected alternative to ‘traditional’ nightlife where they can socialise and connect outside of a smoking area. The growth of hybrid hi-fi listening environments has been catalysed further by a decline of live venues and clubs in the UK. This has naturally resulted in an increased exposure to high-fidelity loudspeaker systems.
                        <br></br><br></br>
                        Furthermore, with the growing trend of ‘nostalgia-core’ (where millennials find themselves wishing to relive childhood memories, creating a sense of collective generational nostalgia) paired with a longing for an age where mass consumerism was not seen to have much of a widespread affect, we have seen the rise of innocent analogue technologies such as film photography and vinyls. These mediums offer a warm alternative to the more cutting-edge clinical alternatives of .mp3s and .jpgs. To see this affect quantitively, the sale of vinyls has reached its highest point since 1988 [Recording Industry Association of America, 2022].
                        <br></br><br></br>
                        Both these factors can be seen to converge towards an increased interest in audio quality and the high fidelity replication of sound, reinforcing the relevance of this project in regards to music in youth culture.
                    </p>
                    {/* <span style={{height: '400px'}}></span> */}

                    <img src={BEAUS1} style={{mixBlendMode: 'normal', width: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '50px'}}></img>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '12px', lineHeight: '12px', marginTop: '-40px', marginBottom: '50px'}}>
                        Patrick w/ Beau at the BeauBeau's cafe 2023 end of year showcase [December, 2023]
                    </p>

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '5vw', lineHeight: '5vw', marginTop: '10px'}}>
                        although music itself is greatly accessible, the way we experience it can be <span style={{fontStyle: 'italic'}}>exclusive</span>.
                    </p>
                    
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px', marginTop: '0px'}}>
                        Amidst my ongoing studies in design engineering, I began to look for ways to marry this skillset with my passion for music. I began to build loudspeaker systems to better understand an everyday object that enables the differences in sound pressure, which we then understand as music.
                        <br></br><br></br>
                        Being self-taught in this field, I found that learning speaker engineering online was a convoluted process. For those without engineering backgrounds, navigating this landscape must be even more difficult. This realisation prompted me to explore ways to democratise and lower the barrier to entry to creating hi-fi speaker systems.
                        <br></br><br></br>
                        Arguably, music is closest to it’s artist’s true intent when translated through high fidelity speakers. But experiencing this should not be confined by high price tags or a lack of expertise.
                        <br></br><br></br>
                        The aim of this project is to provide an affordable educational solution that enables more to enjoy and experience high-fidelity sound.
                    </p>
                    <span style={{height: '400px'}}></span>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        IN AN AIM TO DEMOCRATISE 'THIS'...
                    </p>
                    <span style={{height: '400px'}}></span>
                    {/* <span style={{height: '400px'}}> */}
                        
                    {/* </span> */}
                    <div style={{width: '100vw', display: 'flex', backgroundColor: 'rgb(255 0 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '30px'}}>
                        <p style={{textAlign: 'center', backgroundColor: 'red', width: '100%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '30px', lineHeight: '30px', paddingTop: '20px', marginTop: '0px'}}>
                            I AM HOSTING MY FIRST AFFORDABLE AND ACCESSIBLE HIGH-FIDELITY
                            {/* I<br></br>
                            AM<br></br>HOSTING<br></br>MY<br></br>FIRST<br></br><span style={{fontWeight: 'bolder', fontStyle: 'italic', fontSize: '4vw'}}>AFFORDABLE</span><br></br>AND<br></br><span style={{fontWeight: 'bolder', fontStyle: 'italic', fontSize: '4vw'}}>ACCESSIBLE</span><br></br>HIGH-FIDELITY */}
                        </p>
                        <p style={{textAlign: 'center', backgroundColor: 'red', width: '100%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bolder', fontSize: '12vw', lineHeight: '10vw', marginTop: '0px'}}>
                            LOUDSPEAKER WORKSHOP
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px'}}>
                            This will be my first workshop in a series called "Communal Construction".
                            Participants will build a pair of passive speakers fully designed by me (a one-of-one two-way loudspeaker with a modular tweeter mound) and learn about the basics of speaker engineering.
                        </p>
                        {/* <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                            <img src={WORKSHOP1} style={{mixBlendMode: 'lighten', width: '130%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div> */}
                        
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '60px'}}>
                                ONLY £265 FOR EVERYTHING?? INCLUDING THE WORKSHOP + THE PAIR OF SPEAKERS?
                            </p>
                            <div style={{display: 'flex', flexDirection: 'column', width: '50vw', marginLeft: '-50vw', justifyContent: 'left', alignItems: 'left'}}>
                                <div style={{width: '50vw', backgroundColor: 'black', marginLeft: '0'}}>
                                    <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'white', fontWeight: 'bolder', fontSize: '20px', lineHeight: '20px', marginTop: '40px'}}>
                                        WHY SHOULD I TRUST YOU WIV MY MONEY
                                    </p>
                                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'white', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px', marginTop: '0px'}}>
                                        This pair of speakers are 1-of-1 designed by me. You'll get to keep them, and on top of that, you're gonna learn how to build them. My time and designs will be worth a lot more in the future tm.<br></br><br></br>If you wanna spend the same amount of money for some creps you'll only wear once... on u g
                                    </p>
                                
                                <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'white', fontWeight: 'bold', fontSize: '2vw', lineHeight: '2vw', marginTop: '10px'}}>
                                    ALRIGHT THEN... LET'S SEE 'EM
                                </p>
                                <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-100px'}}>
                                    <img src={WORKSHOP1} style={{mixBlendMode: 'lighten', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                                </div>
                                </div>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', width: '50vw', marginLeft: '50vw', justifyContent: 'left', alignItems: 'left'}}>
                        
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'white', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                                YEAH I'M SOLD... WHERE DO I PAY?
                            </p>

                            {/* <div style={{width: '100vw', backgroundColor: 'red', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mixBlendMode: 'normal'}}> */}
                                <a style={{textDecoration: 'none', mixBlendMode: 'normal'}} href="https://buy.stripe.com/14kcON3mz5c26WIcMP">
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '0px', paddingTop: '2px', paddingBottom: '2px', backgroundColor: 'white', border: '1px solid black', width: '50vw'}}><h1 style={{color: 'red'}}> RESERVE £265 </h1><p className="wordTag">RESERVE £265</p></div>
                                </a>
                                <a style={{textDecoration: 'none', mixBlendMode: 'normal'}} href="https://book.stripe.com/3cs6qp6yL5c294Q8wy">
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '10px', paddingTop: '2px', paddingBottom: '2px', backgroundColor: 'white', border: '1px solid black'}}><h1 style={{color: 'red'}}> RESERVE W/ AMPLIFIER £315 </h1><p className="wordTag">RESERVE W/ AMPLIFIER £315</p></div>
                                </a>
                            {/* </div> */}
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'white', fontWeight: 'normal', fontSize: '12px', lineHeight: '12px', marginTop: '5px'}}>
                                Passive speakers require an amplifier - this can be added for a total price of £315. If you have an amplifier already, select the first option.
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '20px', lineHeight: '20px', marginTop: '10px'}}>
                                FULL PRICE SHOWN, NO ADDITIONAL COSTS
                            </p>
                        </div>
                        <span style={{height: '100px'}}></span>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            MORE FAQS BELOW
                        </p>
                        <div style={{display: 'flex', flexDirection: 'column', width: '50vw', marginLeft: '-50vw', justifyContent: 'left', alignItems: 'left'}}>
                            <span style={{height: '100px'}}></span>

                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                                WHAT'S THAT THING ON THE TOP
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '12px', lineHeight: '12px', marginTop: '0px'}}>
                                Due to the directional nature of dome tweeter drivers, its response is best received when ear-level. This height changes throughout your activity, whether you are sitting down or standing up.

    My intuition was to look at similar examples we use/experience day to day.

    A desk lamp offers a directional beam of light that can be easily adjusted depending on where the viewer has directed their general view. The design was AL-'READY-MADE' (an idea of Duchampe's to bring pre-fabricated objects into a new light). I decided to experiment with the idea of constant spring tension made famous by the iconic Anglepoise design. This resulted in the first iteration of a flexible and easily adjustable tweeter mount mechanism.
                            </p>
                            <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                                <img src={WORKSHOP2} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                            </div>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                                WHAT'S THE WORKSHOP LAYOUT
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '12px', lineHeight: '12px', marginTop: '0px'}}>
                                This is my first workshop of this series – I am aiming to host up to ten participants. They will be given the material and tools required to build them. The workshop should take around 5 hours, and the attendees will build the speakers step-by-step with me.
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                                ARE THEY GOING TO BE PERSONALISED
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '12px', lineHeight: '12px', marginTop: '0px'}}>
                                Each speaker kit will come with a laser-engraved plate with your name, which you can attach onto your pair of speakers.
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                                DO THEY SOUND GOOD
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '12px', lineHeight: '12px', marginTop: '0px'}}>
                                They sound very natural and crisp. The modular nature of the tweeter mount ensures a high quality response from any elevation, whether you're standing up or sitting down. Being front-firing bass-reflex ported speakers, they reach a low end of 45Hz so for a speaker of this size, they deliver an impressive low-end response.
                            </p>
                            
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                                WHERE
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '12px', lineHeight: '12px', marginTop: '0px'}}>
                                BEAUBEAU'S CAFE, 4 GRAVEL LANE, LONDON E1 7AA
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                                WHEN
                            </p>
                            <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '12px', lineHeight: '12px', marginTop: '0px'}}>
                                End of May, the date will be confirmed ASAP. I will be posting about this on socials so watch that @david.chen02 on instagram.
                            </p>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', width: '50vw', marginLeft: '50vw', justifyContent: 'left', alignItems: 'left'}}>

                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-30px'}}>
                            <img src={BEAUS4} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                            <img src={BEAUS5} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                            <img src={BEAUS6} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>
                        <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <p className='blink' style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'red', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            RESERVE YOUR SPOT NOW
                        </p>
                        
                        <a style={{textDecoration: 'none', mixBlendMode: 'normal'}} href="https://buy.stripe.com/14kcON3mz5c26WIcMP">
                                <div style={{display: 'flex', width: '50vw', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '0px', paddingTop: '2px', paddingBottom: '2px', backgroundColor: 'white', border: '1px solid black'}}><h1 style={{color: 'red'}}> RESERVE £265 </h1><p className="wordTag">RESERVE £265</p></div>
                            </a>
                            <a style={{textDecoration: 'none', mixBlendMode: 'normal'}} href="https://book.stripe.com/3cs6qp6yL5c294Q8wy">
                                <div style={{display: 'flex', width: '50vw', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '10px', paddingTop: '2px', paddingBottom: '2px', backgroundColor: 'white', border: '1px solid black'}}><h1 style={{color: 'red'}}> RESERVE W/ AMPLIFIER £315 </h1><p className="wordTag">RESERVE W/ AMPLIFIER £315</p></div>
                            </a>
                        </div>
                        </div>
                        
                        <img src={DVD2} style={{mixBlendMode: 'normal', width: '15%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', marginBottom: '0px'}}></img>
                    </div>
                {/* </div> */}
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div id="contentDiv" style={{backgroundColor: 'rgb(238 237 238)', display: 'flex', flexDirection: 'column', overflow: 'scroll'}}>
                {/* <div style={{display: 'flex', overflowY: 'scroll', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px',  paddingRight: '8px', paddingLeft: '8px', color: 'rgb(22 22 22)'}}> */}
                    {/* <div style={{display: 'flex', flexDirection: 'column', width: '95%'}}> */}
                    <img src={DVD} style={{mixBlendMode: 'exclusion', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', marginBottom: '14px'}}></img>
                        <h style={{textAlign: 'center', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '12vw', lineHeight: '10vw', paddingTop: '0px'}}>
                            {/* Upcoming Loudspeaker Building Workshop */}
                            COMMUNAL <br></br>
                            CONSTRUCTION
                        </h>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'normal', fontStyle: 'italic', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            SPEAKER BUILDING WORKSHOP HOSTED BY DVD
                        </p>
                        {/* <p style={{textAlign: 'center', marginTop: '10px', fontFamily: 'PT Mono', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'NORMAL', fontSize: '20px', lineHeight: '14px'}}>
                            LOUDSPEAKER BUILDING WORKSHOP
                        </p>
                        <p style={{textAlign: 'center', marginTop: '0px', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '16px', lineHeight: '14px'}}>
                            DATE
                        </p>
                        <p style={{textAlign: 'center', marginTop: '-10px', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px'}}>
                            Workshop date TBC [end of May]<br></br>
                        </p>
                        <p style={{textAlign: 'center', marginTop: '10px', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '16px', lineHeight: '14px'}}>
                            LOCATION
                        </p>
                        <p style={{textAlign: 'center', marginTop: '-10px', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '14px', lineHeight: '14px'}}>
                            Hosted @ BeauBeau's Cafe<br></br>
                            4 Gravel Ln, London E1 7AA<br></br><br></br>
                        </p> */}
                    {/* </div> */}
                    
                    {/* <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        SPEAKER-BUILDING WORKSHOP
                    </p> */}

                    {/* <p style={{textAlign: 'center', width: '95%', textTransform: 'none', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        although music itself is greatly accessible, the way we experience it can be exclusive.
                    </p> */}
                    

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        DIY CULTURE HAS BEEN UNDENIABLY IMPORTANT IN UNDERGROUND MUSIC SCENES AND YOUTH CULTURE.
                    </p>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                        Many publications, such as ‘DIY Cultures and Underground Music Scenes’ by Paula Guerra and Andy Bennet, reference the undeniable importance of DIY culture in underground music scenes.
                        <br></br><br></br>
                        Embracing a DIY culture is inherently beneficial for youth culture as it fosters resourcefulness. It encourages young individuals to step outside the confines of conventional consumerism and instills a valuable sense of accomplishment and resilience - this ethos not only develops practical skills but also nurtures an innovative mindset.
                        <br></br><br></br>
                        Pre-fabricated objects often deviate from fundamental design principles, such as DFA [design for assembly/disassembly], and lack environmental visibility due to their non-modular nature. But as designers, our natural inclination is to question established norms - prompting me to reflect on the acceptance of non-modular products. The proposed loudspeaker aims to challenge this by being designed for assembly/disassembly, which, in turn, will encourage others to adopt a DIY culture.
                        <br></br><br></br>
                        There has been a surge in mainstream DIY culture to some extent. The resurgence of vinyl in a digital age reinforces the notion that people inherently appreciate tangible experiences when given the choice. And we are seeing more examples of modular design in consumer products, including the audio design engineering space.
                    </p>

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontStyle: 'italic', fontSize: '4vw', lineHeight: '4vw', marginTop: '20px'}}>
                        SPEAKERS HOLD A UNIQUE AND INDISPENSABLE ROLE IN OUR LIVES AS THE GATEWAY TO MUSIC.
                    </p>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        ...AND IN CURRENT CONTEXT?
                    </p>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                        INCREASED PREVALENCE OF HI-FI LISTENING BARS<br></br><br></br>
                        +<br></br><br></br>
                        A GROWING CONNECTION WITH ANALOGUE TECHNOLOGIES<br></br><br></br>
                        =<br></br><br></br>
                        INCREASED AWARENESS AND INTEREST SURROUNDING HI-FI LOUDSPEAKER SYSTEMS AND SOUND REPLICATION<br></br>
                    </p>

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        SO... EXPLAIN
                    </p>

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                        Alternatives to club nights are becoming more prevalent as people are looking for a more intimate, relaxed and connected alternative to ‘traditional’ nightlife where they can socialise and connect outside of a smoking area. The growth of hybrid hi-fi listening environments has been catalysed further by a decline of live venues and clubs in the UK. This has naturally resulted in an increased exposure to high-fidelity loudspeaker systems.
                        <br></br><br></br>
                        Furthermore, with the growing trend of ‘nostalgia-core’ (where millennials find themselves wishing to relive childhood memories, creating a sense of collective generational nostalgia) paired with a longing for an age where mass consumerism was not seen to have much of a widespread affect, we have seen the rise of innocent analogue technologies such as film photography and vinyls. These mediums offer a warm alternative to the more cutting-edge clinical alternatives of .mp3s and .jpgs. To see this affect quantitively, the sale of vinyls has reached its highest point since 1988 [Recording Industry Association of America, 2022].
                        <br></br><br></br>
                        Both these factors can be seen to converge towards an increased interest in audio quality and the high fidelity replication of sound, reinforcing the relevance of this project in regards to music in youth culture.
                    </p>
                    {/* <span style={{height: '400px'}}></span> */}

                    <img src={BEAUS1} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '50px'}}></img>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '-40px', marginBottom: '50px'}}>
                        Patrick w/ Beau at the BeauBeau's cafe 2023 end of year showcase [December, 2023]
                    </p>

                    <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '5vw', lineHeight: '5vw', marginTop: '10px'}}>
                        although music itself is greatly accessible, the way we experience it can be <span style={{fontStyle: 'italic'}}>exclusive</span>.
                    </p>
                    
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                        Amidst my ongoing studies in design engineering, I began to look for ways to marry this skillset with my passion for music. I began to build loudspeaker systems to better understand an everyday object that enables the differences in sound pressure, which we then understand as music.
                        <br></br><br></br>
                        Being self-taught in this field, I found that learning speaker engineering online was a convoluted process. For those without engineering backgrounds, navigating this landscape must be even more difficult. This realisation prompted me to explore ways to democratise and lower the barrier to entry to creating hi-fi speaker systems.
                        <br></br><br></br>
                        Arguably, music is closest to it’s artist’s true intent when translated through high fidelity speakers. But experiencing this should not be confined by high price tags or a lack of expertise.
                        <br></br><br></br>
                        The aim of this project is to provide an affordable educational solution that enables more to enjoy and experience high-fidelity sound.
                    </p>
                    <span style={{height: '400px'}}></span>
                    <p style={{textAlign: 'center', width: '95%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                        IN AN AIM TO DEMOCRATISE 'THIS'...
                    </p>
                    <span style={{height: '400px'}}></span>
                    {/* <span style={{height: '400px'}}> */}
                        
                    {/* </span> */}
                    <div style={{width: '100vw', display: 'flex', backgroundColor: 'rgb(255 0 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '30px'}}>
                        <p style={{textAlign: 'center', backgroundColor: 'red', width: '100%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '8vw', paddingTop: '20px', marginTop: '0px'}}>
                            I AM HOSTING MY FIRST AFFORDABLE AND ACCESSIBLE HIGH-FIDELITY
                            {/* I<br></br>
                            AM<br></br>HOSTING<br></br>MY<br></br>FIRST<br></br><span style={{fontWeight: 'bolder', fontStyle: 'italic', fontSize: '4vw'}}>AFFORDABLE</span><br></br>AND<br></br><span style={{fontWeight: 'bolder', fontStyle: 'italic', fontSize: '4vw'}}>ACCESSIBLE</span><br></br>HIGH-FIDELITY */}
                        </p>
                        <p style={{textAlign: 'center', backgroundColor: 'red', width: '100%', textTransform: 'none', color: 'rgb(22 22 22)', fontWeight: 'bolder', fontSize: '12vw', lineHeight: '10vw', marginTop: '0px'}}>
                            LOUDSPEAKER WORKSHOP
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '-20px'}}>
                            This will be my first workshop in a series called "Communal Construction".
                            Participants will build a pair of passive speakers fully designed by me (a one-of-one two-way loudspeaker with a modular tweeter mound) and learn about the basics of speaker engineering.
                        </p>
                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                            <img src={WORKSHOP1} style={{mixBlendMode: 'lighten', width: '130%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '5vw', lineHeight: '5vw', marginTop: '10px'}}>
                            ONLY £265 FOR EVERYTHING?? INCLUDING THE WORKSHOP + THE PAIR OF SPEAKERS?
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            yeah!
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '5vw', lineHeight: '5vw', marginTop: '10px'}}>
                            AND WHY SHOULD I TRUST YOU WIV MY MONEY
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            This pair of speakers are 1-of-1 designed by me. You'll get to keep them, and on top of that, you're gonna learn how to build them. My time and designs will be worth a lot more in the future tm.<br></br><br></br>If you wanna spend the same amount of money for some creps you'll only wear once... on u g
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '5vw', lineHeight: '5vw', marginTop: '10px'}}>
                            WHAT DO THEY LOOK LIKE
                        </p>
                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                            <img src={WORKSHOP1} style={{mixBlendMode: 'lighten', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>
                        
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'white', fontWeight: 'bold', fontSize: '5vw', lineHeight: '5vw', marginTop: '10px'}}>
                            YEAH I'M SOLD... WHERE DO I PAY?
                        </p>

                        {/* <div style={{width: '100vw', backgroundColor: 'red', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mixBlendMode: 'normal'}}> */}
                            <a style={{textDecoration: 'none', mixBlendMode: 'normal'}} href="https://buy.stripe.com/14kcON3mz5c26WIcMP">
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '0px', paddingTop: '2px', paddingBottom: '2px', backgroundColor: 'white', border: '1px solid black'}}><h1 style={{color: 'red'}}> RESERVE £265 </h1><p className="wordTag">RESERVE £265</p></div>
                            </a>
                            <a style={{textDecoration: 'none', mixBlendMode: 'normal'}} href="https://book.stripe.com/3cs6qp6yL5c294Q8wy">
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '10px', paddingTop: '2px', paddingBottom: '2px', backgroundColor: 'white', border: '1px solid black'}}><h1 style={{color: 'red'}}> RESERVE W/ AMPLIFIER £315 </h1><p className="wordTag">RESERVE W/ AMPLIFIER £315</p></div>
                            </a>
                        {/* </div> */}
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'white', fontWeight: 'normal', fontSize: '2.8vw', lineHeight: '3vw', marginTop: '5px'}}>
                            Passive speakers require an amplifier - this can be added for a total price of £315. If you have an amplifier already, select the first option.
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '3vw', lineHeight: '3vw', marginTop: '10px'}}>
                            FULL PRICE SHOWN, NO ADDITIONAL COSTS
                        </p>
                        <span style={{height: '100px'}}></span>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            MORE FAQS BELOW
                        </p>
                        <span style={{height: '100px'}}></span>

                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            WHAT'S THAT THING ON THE TOP
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            Due to the directional nature of dome tweeter drivers, its response is best received when ear-level. This height changes throughout your activity, whether you are sitting down or standing up.

My intuition was to look at similar examples we use/experience day to day.

A desk lamp offers a directional beam of light that can be easily adjusted depending on where the viewer has directed their general view. The design was AL-'READY-MADE' (an idea of Duchampe's to bring pre-fabricated objects into a new light). I decided to experiment with the idea of constant spring tension made famous by the iconic Anglepoise design. This resulted in the first iteration of a flexible and easily adjustable tweeter mount mechanism.
                        </p>
                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                            <img src={WORKSHOP2} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            WHAT'S THE WORKSHOP LAYOUT
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            This is my first workshop of this series – I am aiming to host up to ten participants. They will be given the material and tools required to build them. The workshop should take around 5 hours, and the attendees will build the speakers step-by-step with me.
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            ARE THEY GOING TO BE PERSONALISED
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            Each speaker kit will come with a laser-engraved plate with your name, which you can attach onto your pair of speakers.
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            DO THEY SOUND GOOD
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            They sound very natural and crisp. The modular nature of the tweeter mount ensures a high quality response from any elevation, whether you're standing up or sitting down. Being front-firing bass-reflex ported speakers, they reach a low end of 45Hz so for a speaker of this size, they deliver an impressive low-end response.
                        </p>
                        
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            WHERE
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            BEAUBEAU'S CAFE, 4 GRAVEL LANE, LONDON E1 7AA
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'rgb(22 22 22)', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            WHEN
                        </p>
                        <p style={{textAlign: 'center', width: '95%', textTransform: 'none', fontFamily: 'PTMono', color: 'rgb(22 22 22)', fontWeight: 'normal', fontSize: '3vw', lineHeight: '3vw', marginTop: '0px'}}>
                            End of May, the date will be confirmed ASAP. I will be posting about this on socials so watch that @david.chen02 on instagram.
                        </p>

                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-30px'}}>
                            <img src={BEAUS4} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                            <img src={BEAUS5} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', overflow: 'none', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '-50px'}}>
                            <img src={BEAUS6} style={{mixBlendMode: 'normal', width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '10px'}}></img>
                        </div>

                        <p style={{textAlign: 'center', width: '95%', textTransform: 'uppercase', color: 'white', fontWeight: 'bold', fontSize: '4vw', lineHeight: '4vw', marginTop: '10px'}}>
                            RESERVE YOUR SPOT NOW
                        </p>
                        <a style={{textDecoration: 'none', mixBlendMode: 'normal'}} href="https://buy.stripe.com/14kcON3mz5c26WIcMP">
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '0px', paddingTop: '2px', paddingBottom: '2px', backgroundColor: 'white', border: '1px solid black'}}><h1 style={{color: 'red'}}> RESERVE £265 </h1><p className="wordTag">RESERVE £265</p></div>
                            </a>
                            <a style={{textDecoration: 'none', mixBlendMode: 'normal'}} href="https://book.stripe.com/3cs6qp6yL5c294Q8wy">
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'justify', marginTop: '10px', paddingTop: '2px', paddingBottom: '2px', backgroundColor: 'white', border: '1px solid black'}}><h1 style={{color: 'red'}}> RESERVE W/ AMPLIFIER £315 </h1><p className="wordTag">RESERVE W/ AMPLIFIER £315</p></div>
                            </a>
                        
                        
                        <img src={DVD2} style={{mixBlendMode: 'normal', width: '15%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', marginBottom: '0px'}}></img>
                    </div>
                {/* </div> */}
            </div>
            </MediaQuery>
        </section>
    );
};

export default WORKSHOP_portrait;