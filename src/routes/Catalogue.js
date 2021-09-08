import '../App.scss';
import Products from '../components/products';
import Submission from '../components/submission';

function Catalogue() {
  return (
    <div className="App">
    <div className='top'>
      ProsUp Products and Services
    </div>
    <Products/>
    <Submission />
    </div>
  );
}

export default Catalogue;
