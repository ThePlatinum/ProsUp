import './App.scss';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner';
import Recents from './components/recent';
import Submission from './components/submission';
import Mission from './components/mission';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Recents />
      <Submission />
      <Mission />
      <Services />
    </div>
  );
}

export default App;
