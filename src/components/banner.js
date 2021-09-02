import { AiOutlineSearch } from 'react-icons/ai';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import '../styles/banner.scss';

function Banner() {
  return (
    <div className="App-Banner">
      <div className='Container'>
        <InputGroup>
          <Input placeholder="Search" color='#A15318' id="search" className='searchInput' type='search' />
          <InputGroupAddon addonType="append"><Button className='searchBtn'> <AiOutlineSearch size='1.6em'/> </Button></InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

export default Banner;
