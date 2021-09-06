import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { Button } from 'reactstrap';
import '../styles/footer.scss';

function Footer() {

  return (
    <div className="App-Footer">
      <div className='Container'>
        <div> 
          ProsUp 2021 | <a href='/'className='privacy'>privacy policies</a><br />
          built by <a href='/'>Platinum Innovations</a><br />
          <Button color='' className='contacts' onClick={()=> document.location.href = "mailto:platinumemirate@gmail.com"} > <AiOutlineMail size='1.5em'/> </Button>
          <Button color='' className='contacts' onClick={()=> document.location.href = "tel:+2347014293952"}> <AiOutlinePhone size='1.5em'/> </Button>
          <Button color='' className='contacts' onClick={()=> document.location.href = "https://wa.me/message/FSG3YR7TOGKEI1"} > <AiOutlineWhatsApp size='1.5em'/> </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
