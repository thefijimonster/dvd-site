import MediaQuery from 'react-responsive'

const WORKSHOP_landscape = () => {
    return(
    <section>
            {/* <Background></Background> */}
            <MediaQuery minWidth={501}>
            <div id="contentDiv" style={{backgroundColor: 'black'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-10px', marginBottom: '-50px',  paddingRight: '8px', paddingLeft: '8px'}}>
                    <h1 style={{color: 'white', fontSize: '30px'}}>[ LANDSCAPE ]</h1>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div id="contentDiv" style={{backgroundColor: 'black'}}>
                <div style={{display: 'flex', fleLANDSCAPExDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-10px',  paddingRight: '8px', paddingLeft: '8px'}}>
                    <h1 style={{color: 'white', fontSize: '30px'}}>[ LANDSCAPE ]</h1>
                </div>
            </div>
            </MediaQuery>
        </section>
    );
};

export default WORKSHOP_landscape;