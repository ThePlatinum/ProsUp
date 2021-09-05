import { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import { Button } from 'reactstrap';
import '../styles/view.scss';

function View() {
    let { which } = useParams();
    var api = 'http://localhost/prosup/api/ones?s=' + which
    const [document, setDocument] = useState([]);
    useEffect(()=>{
        fetch(api) //https://prosup-backend.000webhostapp.com
        .then(response => response.json())
        .then(data => {
            setDocument(data)
        });
    },[api]);

    return (
        <div className="App-Viewer">
            <div className='Container row'>
                <div className='name col-md-4'>
                    <h3>{document.title}</h3>
                    <h6>{document.author}</h6>

                    <div>
                        <Button>Donate</Button>
                    </div>
                </div>
                <div className='file col-md-8'> <embed src={`http://localhost/prosup/${document.file}`} title='Viewer' height='100%' width='100%'></embed> </div>
            </div>
        </div>
    )
}

export default View;