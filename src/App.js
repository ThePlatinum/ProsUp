import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Archive from './routes/Archive';
import Viewing from './routes/Viewing';
import PutUp from './routes/PutUp';
import Privacy from './routes/privacy';
import Catalogue from './routes/Catalogue';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ Home }/>
            <Route path='/archive' exact component={ Archive }/>
            <Route path='/view-doc/:which' exact component={ Viewing }/>
            <Route path='/putprosup' exact component={ PutUp }/>
            <Route path='/prosup-privacypolicies' exact component={ Privacy }/>
            <Route path='/catalogues' exact component={ Catalogue }/>
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
