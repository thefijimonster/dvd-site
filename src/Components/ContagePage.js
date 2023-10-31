import '../App.css'
import Background from './Background';
import Back from './Back';

const ContactPage = () => {
    return(
        <section>
            <Background></Background>
            <div id="contentDiv">
                <Back></Back>
                <div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', gap: '12px', marginTop: '-10px', marginLeft: '140px', width: '400px'}}>
                    {/* <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', width: '400px', border: '1px solid red'}}> */}
                        <div style={{display: 'flex', flexDirection: 'row', height: '20px'}}>
                            <p style={{width: '100px'}}>EMAIL</p><p style={{paddingLeft: '20px'}}>DAVIDCHEN02@ICLOUD.COM</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', height: '20px'}}>
                            <p style={{width: '100px'}}>INSTAGRAM</p><p style={{paddingLeft: '20px'}}>@DAVID.CHEN02</p>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}

export default ContactPage;