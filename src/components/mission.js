import { Button } from 'reactstrap';
import '../styles/mission.scss';
import dot from '../resources/selection.svg'
import ContributeBtn from './contribute';

function Mission() {

  return (
    <div className="App-Mission">
      <div className='Container'>
       <h4>Our Mission</h4>
       <div className='sub row'>
         <div className='list col-lg-6'>
           <img src={dot} alt="Missions List" /> To give value to undergraduate projects and make them available beyond locker room<br /><br />
           <img src={dot} alt="Missions List" /> Making the right resources available to get you started<br /><br />
           <img src={dot} alt="Missions List" /> Publish your idea and make the mark!<br /><br />
         </div>
         <div className='noteBtn col-lg-6'>
           Want to be a part of these value creation? 
           <div className='btns' >
           <Button className='mail' onClick={()=> document.location.href = "mailto:platinumemirate@gmail.com"} >Mail Us</Button>
            < ContributeBtn styleClass='contribute'/>
           </div>
         </div>
       </div>
      </div>
    </div>
  );
}

export default Mission;
