import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import '../styles/banner.scss';

function Banner() {

  const history = useHistory()
  const [s, setS] = useState('')

  const searches = () => {
    history.push( '/archive', {searchKey : s} )
  }

  return (
    <div className="App-Banner">
      <div className='Container'>
        <InputGroup>
          <Input placeholder="Search" color='#A15318' id="search" className='searchInput' type='search' onSubmit={searches} onChange={(e)=> setS(e.target.value)} />
          <InputGroupAddon addonType="append"><Button className='searchBtn' onClick={searches}> <AiOutlineSearch size='1.6em'/> </Button></InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

export default Banner;
