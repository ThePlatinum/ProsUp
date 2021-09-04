import { useEffect, useState } from 'react';
import '../styles/recents.scss';

function Recents() {

  const [recents, setRecents] = useState([]);

  useEffect(()=>{
    fetch('http://localhost/prosup/recents.php')
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
              <div className='listElement'>
                <div className='listTitle'>   <a href='/'>{list.title}</a> </div>
                <div className='listAuthor'>  {list.author} ( {list.year} ) </div>
                <div className='listExcerpt'> {list.excerpt} </div>
              </div>
            );
          })}
        </div>
        <div >
          <a href='/' className='loadMore'>load more</a>
        </div>
      </div>
    </div>
  );
}

export default Recents;
