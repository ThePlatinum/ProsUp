import { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import '../styles/view.scss';
import ContributeBtn from './contribute';

function View() {
    let { which } = useParams();
    //var origin = 'http://localhost/prosup'
    var origin = 'https://prosup-backend.000webhostapp.com'
    var api = origin + '/api/ones?s=' + which
    const [document, setDocument] = useState([]);
    useEffect(()=>{
        fetch(api)
        .then(response => response.json())
        .then(data => {
            setDocument(data)
        });
    },[api]);

    return (
        <div className="App-Viewer">
            <div className='Container row'>
                <div className='name col-md-5'>
                    <h3>{document.title}</h3>
                    <h5>{document.author}</h5>

                    <div className='cont'>
                        <p>
                            Has ProsUp been helpful? You can help keep it free
                        </p>
                        < ContributeBtn styleClass='contribute'/>
                    </div>

                    <div className='adsBanner'>
                    <iframe src="//a.exdynsrv.com/iframe.php?idzone=4418364&size=300x250" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
                    </div>
                    <div className='adsBanner'>
                    <iframe src="//a.exdynsrv.com/iframe.php?idzone=4418374&size=300x250" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
                    </div>
                    
                </div>
                <div className='file col-md-7'> <embed src={`${origin}/${document.file}`} title='Viewer' height='100%' width='100%'></embed> </div>
            </div>
        </div>
    )
}

export default View;