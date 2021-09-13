import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { Button } from 'reactstrap';
import '../styles/footer.scss';

function Footer() {

  return (
    <div className="App-Footer">
      <div className='Container'>
        <div> 
          &copy; ProsUp 2021 | built by <a href='https://platinum-innovations.business.site' rel="noreferrer" target='_blank'>Platinum Innovations</a><br />
          <a href='/prosup-privacypolicies'className='privacy'>privacy policies</a> | <a href='/prosup-termsofservice'className='privacy'>terms of service</a><br />
          <Button color='' className='contacts' onClick={()=> document.location.href = "mailto:platinumemirate@gmail.com"} > <AiOutlineMail size='1.5em'/> </Button>
          <Button color='' className='contacts' onClick={()=> document.location.href = "tel:+2347014293952"}> <AiOutlinePhone size='1.5em'/> </Button>
          <Button color='' className='contacts' onClick={()=> document.location.href = "https://wa.me/message/FSG3YR7TOGKEI1"} > <AiOutlineWhatsApp size='1.5em'/> </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
