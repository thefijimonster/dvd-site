import '../App.css'
import Background from './Background';
import Back from './Back';

import MediaQuery from 'react-responsive';

const ArchiveComp = (props) => {
    return(
        <section>
            <MediaQuery minWidth={600}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', marginLeft: '160px', width: '100%', height: '30px'}}>
                <p>{props.date}</p>
                <p style={{width: '400px', textAlign: 'left'}}>{props.title}</p>
                <p style={{width: '400px', height: '20px', textAlign: 'left'}}>{props.category}</p>
                <p style={{width: '100px', height: '20px', textAlign: 'left'}}>{props.resources}</p>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={500} maxWidth={600}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', width: '500px', height: '60px'}}>
                <p>{props.date}</p>
                <p style={{width: '200px', textAlign: 'left'}}>{props.title}</p>
                <p style={{width: '200px', height: '20px', textAlign: 'left'}}>{props.category}</p>
                <p style={{width: '40px', height: '20px', textAlign: 'left'}}>{props.resources}</p>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', width: '350px', height: '70px'}}>
                <p>{props.date}</p>
                <p style={{width: '200px', textAlign: 'left'}}>{props.title}</p>
                <p style={{width: '200px', height: '20px', textAlign: 'left'}}>{props.category}</p>
                <p style={{width: '40px', height: '20px', textAlign: 'left'}}>{props.resources}</p>
            </div>
            </MediaQuery>
        </section>
    );
}

export default ArchiveComp;