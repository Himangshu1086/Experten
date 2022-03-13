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
import ProtectedRoutes from './COMPONENTS/OTHERS/ProtectedRoutes';
import UserAccount from './ADMIN/3__USER ACCOUNT/UserAccount';

function App() {

  const [user , setUser] = useState(true);
  const [expert , setExpert] = useState(true);
  const [admin , setAAdmin] = useState(true);
  const [loading , setLoading] = useState(true);
 

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
    

          <ProtectedRoutes path="/watchList" component={Watch__List} auth={user} />
          <ProtectedRoutes path="/account" component={UserAccount} auth={user} />
          <ProtectedRoutes path="/admin/expertAdmin" component={Admin} auth={expert} />
          <ProtectedRoutes path="/admin/superAdmin" component={Admin}  auth={admin}  />
          <Route path="/" component={Home} exact={true}/>
          <Route path="*" exact={true} >
              <PageNotFound/>
            </Route>
      </Switch>
      </Router>
  );
}

export default App;
