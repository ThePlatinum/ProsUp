import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Archive from './routes/Archive';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ Home }/>
            <Route path='/archive' exact component={ Archive }/>
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
