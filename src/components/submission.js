import { Button } from 'reactstrap';
import '../styles/submission.scss';
import submissionImg from '../resources/submission.png'
import { useHistory } from 'react-router-dom';

function Submission() {

  const history = useHistory()

  return (
    <div className="App-Submission">
      <div className='Container'>
       <h4>Submission</h4>
       <div className='sub row'>
           <img src={submissionImg} alt='Submission' className=' col-md-6'/>
           <div className='leftTxt col-md-6'>
               <h5>Have you got a cool project you'd like to put up?<br /> <br /></h5> 
               <Button className='contact' onClick={()=>{history.push( '/putprosup#ss' )}}>Send Submission</Button>
           </div>
       </div>
      </div>
    </div>
  );
}

export default Submission;
