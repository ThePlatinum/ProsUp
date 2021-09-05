import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { Button } from 'reactstrap';
import '../styles/footer.scss';

function Footer() {

  return (
    <div className="App-Footer">
      <div className='Container'>
        <div> 
          ProsUp 2021 | prowered by <a href='/'>Platinum Innovations</a><br />
          <Button color='' className='contacts' onClick={()=> document.location.href = "tel:+2347014293952"}> <AiOutlinePhone size='1.5em'/> </Button>
          <Button color='' className='contacts' > <AiOutlineWhatsApp size='1.5em'/> </Button>
          <Button color='' className='contacts' > <AiOutlineMail size='1.5em'/> </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
