import { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import '../styles/view.scss';
import ContributeBtn from './contribute';
import Loader from './Loader';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/* import PDFViewer from 'pdf-viewer-reactjs' */
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

    const [scale, setScale] = useState(1.0);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setIsLoading(false);
    }

    return (
        <div className="App-Viewer">
            <div className='Container row'>
                <div className='name col-md-4'>
                    <h4>{document.title}</h4>
                    <h5>{document.author}</h5>

                    <div className='cont'>
                        <p>
                            Has ProsUp been helpful? You can help keep it free
                        </p>
                        < ContributeBtn styleClass='contribute'/>
                    </div>

                    <div className='adsBanner'>
                    <iframe title='ads1' src="//a.exdynsrv.com/iframe.php?idzone=4418364&size=300x250" width="300" height="250" scrolling="no" marginWidth="0" marginHeight="0" frameBorder="0"></iframe>
                    </div>
                </div>
                <div className='file col-md-7'>
                    <Loader isLoading={isLoading} />
                    <section
                        id="pdf-section"
                        className="d-flex flex-column align-items-center w-100"
                    >
                        <ControlPanel
                        scale={scale}
                        setScale={setScale}
                        numPages={numPages}
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber}
                        file={`${origin}/${document.file}`}
                        />
                        <Document
                        file={`${origin}/${document.file}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                        >
                        <Page pageNumber={pageNumber} scale={scale} />
                        </Document>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default View;