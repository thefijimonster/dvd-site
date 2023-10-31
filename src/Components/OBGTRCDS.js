import '../App.css'
import Background from './Background';
import Back from './Back';
import LOCKSTOCK6 from '../Assets/LOCKSTOCK6.gif'
import LOCKSTOCK4 from '../Assets/LOCKSTOCK4.png'
import LOCKSTOCK7 from '../Assets/LOCKSTOCK7.gif'

const OBGTRCDS = () => {
    return(
         <section>
            {/* <Background></Background> */}
            <div id="contentDiv">
                <Back></Back>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '30px'}}>
                    <h4 style={{backgroundColor: 'red', fontSize: '30px'}}>OBLIGATED RECORDS</h4>
                    <p style={{width: '500px', textAlign: 'center', marginTop: '-30px'}}>Commissioned as part of a creative direction role for the release of Merky ACE - Lockstock on Obligated Records. This idea was conceptualised, shot and edited by me. The project had a very tight deadline: I was fitting in shoots and discussions with Oblig in between his international tour.</p>
                    <img src={LOCKSTOCK6} style={{mixBlendMode: 'exclusion', width: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}></img>
                    <a href="https://www.youtube.com/watch?v=1WFVIDFY-3A">
                        <h3 style={{marginTop: '-5px'}}>[CLICK HERE TO WATCH THE VIDEO]</h3>
                    </a>
                    {/* <img src={LOCKSTOCK7} style={{width: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}></img> */}
                    <p style={{width: '500px', textAlign: 'center', marginTop: '-10px'}}>The concept consisted of Merky ACE being a part of a hitmen-for-hire platform and his verses corresponding to 'past jobs' that were viewable on his profile page.</p>
                    <p style={{width: '500px', textAlign: 'center', marginTop: '-10px'}}>A mock-up was created using Adobe Illustrator and animated using Davinci Resolve. The footage was edited in and the final video was 'screen recorded' using a VX2100.</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}><img src={LOCKSTOCK4} style={{width: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px'}}></img>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    );
}

export default OBGTRCDS;