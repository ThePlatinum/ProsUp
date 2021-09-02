import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { Button } from 'reactstrap';
import '../styles/footer.scss';

function Footer() {

  return (
    <div className="App-Footer">
      <div className='Container'>
        <div> 
          ProsUp 2021 | Platinum Innovations<br />
          <Button color='' className='contacts' > <AiOutlinePhone size='1.5em'/> </Button>
          <Button color='' className='contacts' > <AiOutlineWhatsApp size='1.5em'/> </Button>
          <Button color='' className='contacts' > <AiOutlineMail size='1.5em'/> </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
