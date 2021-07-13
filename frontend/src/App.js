
import './App.css';
import Footer from './COMPONENTS/footer/Footer';
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import Container__for_Card from './COMPONENTS/proffessions/card_for_profession/Container__for_Card';
import Home from './COMPONENTS/home__page/Home';
import Navbar from './COMPONENTS/header/Header__for__others/Navbar';
import Profession__details from './COMPONENTS/proffessions/profession__details/Profession__details';
import Sign__In from './COMPONENTS/signIn/Sign__In';
import Sign__Up from './COMPONENTS/signUp/Sign__Up';
import About from './COMPONENTS/about/About';
import Watch__List from './COMPONENTS/watch__list/Watch__List';
import Admin from './COMPONENTS/ADMIN/Admin';

function App() {

  return (
    
      <Router>
      <Switch>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/category/teacher/id">
            <Profession__details/>
          </Route>
          <Route path="/category/teacher">
              <Navbar/>
             <Container__for_Card/>
          </Route>
          <Route path="/signIn">
            <Sign__In/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/watchList">
            <Watch__List/>
          </Route>
          <Route path="/signup">
            <Sign__Up/>
          </Route>
          <Route path="/" component={Home}/>
      </Switch>
        <Footer/>
      </Router>
    
  );
}

export default App;
