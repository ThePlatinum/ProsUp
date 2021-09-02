import { Button } from 'reactstrap';
import '../styles/services.scss';
import freeTemplate from '../resources/free-template.svg'

function Services() {

  return (
    <div className="App-Services">
      <div className='Container'>
       <h4>Other Services</h4>
       <div className='sub row'>
         <div className='rt col-md-8'>
            <h5>Go fro Beginner to Pro by Learning the Standards of Creating awesome documents in</h5> 
            <p><em className='ems'>Latex</em> or <em className='ems'>MS Word</em > <br/></p>
            <Button className='enrollBtn' > Enroll </Button>
         </div>
         <div className='lt col-md-4'>
            <div className='white'>
                <img src={freeTemplate} alt='Free Template'/> <br />
                <strong>Free</strong> 'Latex' Undergraduate Project Template <br/> <br/>
                <Button className='downloadBtn'> Get Now</Button>
            </div>
         </div>
       </div>
      </div>
    </div>
  );
}

export default Services;
