import '../App.scss';
import Services from '../components/services';
import Submit from '../components/submit';

function PutUp() {
  return (
    <div className="App">
      <div className='top'>
          Put Projects Up &nbsp; &gt; &nbsp; ProsUp
      </div>
      <Submit />
      <Services />
    </div>
  );
}

export default PutUp;
