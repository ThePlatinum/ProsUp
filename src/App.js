import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Archive from './routes/Archive';
import Viewing from './routes/Viewing';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ Home }/>
            <Route path='/archive' exact component={ Archive }/>
            <Route path='/view-doc/:which' exact component={ Viewing }/>
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
