import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../styles/recents.scss';

function Archives() {

  const [recents, setRecents] = useState([]);
  const [page, setPage] = useState(1)
  const [perPage] = useState(15) //setperPage
  var totalPages = ''
  var paginateNums = []
  var isSearch = ''

  const location = useLocation()
  const search = location.state.searchKey
  //var origin = 'http://localhost/prosup'
  var origin = 'https://prosup-backend.000webhostapp.com'
  var api = origin + '/api/gets?s=' + search
  if(search !== ''){
    isSearch = <div> Showing {recents.length} search result '{search}' </div>
    /* if ( == 0){
      isSearch = <div> Showing search result '{search}' </div>
    } */
  }

  useEffect(()=>{
    fetch(api) 
      .then(response => response.json())
      .then(data => {
        setRecents(data)
      });
  },[api]);

  const paginate = (items) => {
    const offset = perPage * (page - 1);
    totalPages = Math.ceil(items.length / perPage);
    const paginatedItems = items.slice(offset, perPage * page);
    
    return {
        previousPage: page - 1 ? page - 1 : null,
        nextPage: (totalPages > page) ? page + 1 : null,
        total: items.length,
        items: paginatedItems
    };
  };

  const disp = () => {
    for (let index = 1; index <= totalPages; index++) {
      paginateNums.push(<Button color='' onClick={()=>{setPage(index)}} key={index}>{index}</Button>)
    }
  }

  return (
    <div className="App-Recents">
      <div className='Container'>
        <div>
          { isSearch }
        </div>
        <div>
          {paginate(recents).items.map((list, i) => {
            return(
              <div className='listElement' key={i}>
                <div className='listTitle'>   <a href={`/view-doc/${list.id}`}>{list.title}</a> </div>
                <div className='listAuthor'>  {list.author} ( {list.year} ) </div>
                <div className='listExcerpt'> {list.excerpt} </div>
              </div>
            );
          })}
        </div>
        <div className='pagenation'>
          <Button onClick={()=>{if (page !== 1) {setPage(page-1) }}} color=''> &lt; </Button>
          {disp()}
          {paginateNums}
          <Button onClick={()=>{if (page !== totalPages) {setPage(page+1) }}} color=''> &gt; </Button>
        </div>
      </div>
    </div>
  );
}

export default Archives;
