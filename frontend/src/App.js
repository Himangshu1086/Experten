import react , {useState , useEffect} from 'react'
import './App.css';
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import Container__for_Card from './COMPONENTS/proffessions/card_for_profession/Container__for_Card';
import Home from './COMPONENTS/home__page/Home';
import Navbar from './COMPONENTS/header/Header__for__others/Navbar';
import Profession__details from './COMPONENTS/proffessions/profession__details/Profession__details';
import Sign__In from './COMPONENTS/signIn/Sign__In';
import Sign__Up from './COMPONENTS/signUp/Sign__Up';
import About from './COMPONENTS/ABOUT/About';
import Watch__List from './COMPONENTS/watch__list/Watch__List';
import Admin from './ADMIN/Admin';
import PageNotFound from './PagenotFound'
import UserAccount from './ADMIN/3__USER ACCOUNT/UserAccount';

function App() {


  return (
        <Router>
      <Switch>
          <Route path="/category/:others_profession/:id">
            <Profession__details/>
          </Route> 
          <Route path="/category/:profession">
              <Navbar/>
             <Container__for_Card/>
          </Route>
          <Route path="/signIn">
            <Sign__In/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
         
          <Route path="/signup">
            <Sign__Up/>
          </Route>
    

          <Route path="/watchList" component={Watch__List} />
          <Route path="/account" component={UserAccount} />
          <Route path="/admin/expertAdmin" component={Admin} />
          <Route path="/admin/superAdmin" component={Admin}   />
          <Route path="/" component={Home} exact={true}/>
          <Route path="*" exact={true} >
              <PageNotFound/>
            </Route>
      </Switch>
      </Router>
  );
}

export default App;
