import { Link } from 'react-router-dom';
import '../App.css'
import Back from './Back';
import Background from './Background';

const MSCVIDS = () => {
    return(
        <section>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // rowGap: '10px'
                }}>
                    {/* <h1 style={{marginBottom: '10px'}}>RENZ - PULLUPINADINGER</h1> */}
                    <a href="https://www.youtube.com/watch?v=NQRSO8owtgM">
                    <img className="invert-on-hover" width={220} src={require('../Assets/RENZ1.png')}></img>
                    </a>
                    {/* <h1 style={{marginBottom: '10px'}}>SQUINTZ - FEEL GOOD</h1> */}
                    <a href="https://www.youtube.com/watch?v=PVKp6gsR43o">
                    <img className="invert-on-hover" width={220} src={require('../Assets/SQUINTZ1.png')}></img>
                    </a>
                    {/* <h1 style={{marginBottom: '10px'}}>RENZ - LOOSE</h1> */}
                    <a href="https://www.youtube.com/watch?v=bp2wd4aw6nc">
                    <img className="invert-on-hover" width={220} src={require('../Assets/RENZ2.png')}></img>
                    </a>
                    {/* <h1 style={{marginBottom: '10px'}}>OBLIGATED RECORDS 002 [MERKY ACE - LOCKSTOCK]</h1> */}
                    {/* <a href="https://www.youtube.com/watch?v=1WFVIDFY-3A"> */}
                    <Link to="/OBGTRCDS">
                        <img className="invert-on-hover" width={220} src={require('../Assets/MERKY1.png')}></img>
                    </Link>
                    {/* </a> */}
                    {/* <h2>WIP</h2>
                    <h1>OBLIGATED RECORDS 003 [SKEE MASK & MJK FT. RIKO DAN - PATCHWORKS VOL. 1]</h1>
                    <h1>SOUTH LONDON SPACE AGENCY [CARRETA FREESTYLE - GRANDMIXXER]</h1> */}
                </div>
            </div>
        </section>
    );
}

export default MSCVIDS;