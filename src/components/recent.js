import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../styles/recents.scss';

function Recents() {

  const [recents, setRecents] = useState([]);
  const history = useHistory()

  useEffect(()=>{
    var origin = 'http://localhost/prosup'
    //var origin = 'https://prosup-backend.000webhostapp.com'
    var api = origin + '/api/recents'
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setRecents(data)
      });
  },[]);

  return (
    <div className="App-Recents">
      <div className='Container'>
        <h4>Recently Added</h4>
        <div>
          {recents.map((list, i) => {
            return(
              <div className='listElement' key={i}>
                <div className='listTitle'>   <a href={`/view-doc/${list.id}`}>{list.title}</a> </div>
                <div className='listAuthor'>  {list.author} ( {list.year} ) </div>
                <div className='listExcerpt'> {list.excerpt} </div>
              </div>
            );
          })}
        </div>
        <div >
          <Button color='' onClick={()=>{history.push( '/archive', {searchKey : ''} )}} className='loadMore'>load more</Button>
        </div>
      </div>
    </div>
  );
}

export default Recents;
