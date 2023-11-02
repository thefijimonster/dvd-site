import '../App.css'
import Background from './Background';
import Back from './Back';

const ArchiveComp = (props) => {
    return(
        <section>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', marginLeft: '160px', width: '1000px', height: '30px'}}>
                <p>{props.date}</p>
                <p style={{width: '400px', textAlign: 'left'}}>{props.title}</p>
                <p style={{width: '400px', height: '20px', textAlign: 'left'}}>{props.category}</p>
                <p style={{width: '100px', height: '20px', textAlign: 'left'}}>{props.resources}</p>
            </div>
        </section>
    );
}

export default ArchiveComp;