
import './App.css';
import Footer from './COMPONENTS/FOOTER/Footer';
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
import PlacedOrders from './COMPONENTS/User__Account/COMPONENTS/PlacedOrders';
import AccountDetails from './COMPONENTS/User__Account/COMPONENTS/AccountDetails';
<<<<<<< HEAD
import AddAddress from './COMPONENTS/User__Account/COMPONENTS/ADDRESS/AddAddress'
=======
>>>>>>> 90b42c30698e16f84214d397117b7a50acba4e7f
import ViewAddress from './COMPONENTS/User__Account/COMPONENTS/ADDRESS/ViewAddress'
function App() {

  return (
        <Router>
      <Switch>
          <Route path="/admin">
            <Admin/>
          </Route>
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
          <Route path="/watchList">
            <Watch__List/>
          </Route>
          <Route path="/signup">
            <Sign__Up/>
          </Route>
          <Route path="/signup">
            <Sign__Up/>
          </Route>
          <Route path="/account">
          <AccountDetails/>
<<<<<<< HEAD
          </Route>
          <Route path="/expertsetting">
            <AdminPanelForExpert/>
          </Route>
          <Route path="/addexpert">
            <AddExpert/>
          </Route>
          <Route path="/addservice">
            <AddService/>
          </Route>
          <Route path="/addcontact">
            <Addcontact/>
          </Route>
          <Route path="/addeducation">
            <AddEducation/>
          </Route>
          <Route path="/addexperience">
            <Addexperience/>
          </Route>
          <Route path="/addphoto">
            <Addphotogallery/>
          </Route>
          <Route path="/addpin">
            <AddpinAvailable/>
          </Route>
          <Route path="/addplace">
            <AddAvailablePlace/>
          </Route>
          <Route path="/addaddress">
            <AddAddress/>
=======
>>>>>>> 90b42c30698e16f84214d397117b7a50acba4e7f
          </Route>
          

    

          <Route path="/accountdetail">
            <AccountDetails/>
          </Route>
          <Route path="/placeorder">
            <PlacedOrders/>
          </Route>
          <Route path="/viewAddress">
            <ViewAddress/>
          </Route>
          <Route path="/" component={Home}/>
      </Switch>
      </Router>
  );
}

export default App;
