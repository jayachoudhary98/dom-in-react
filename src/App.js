import logo from './logo.svg';
import './App.css';
import Login from './login/Login';
import { Navbar } from './header/Navbar';

import { Product } from './product/Product';
import { Slider } from './slider/Slider';
import { Footer } from './footer/Footer';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/Product" component={Product} />       
          <Route exact path="/Slider" component={Slider} />       
          <Route exact path="/Login" component={Login} />       
        </Switch>
      </div>
    </Router>
    </>
  )
}

/*

function App() {
  return (
    <div >
     
    <Navbar/>

    <Slider/>
    <Product/>
    <Footer/>
    <Login/>
   
  
    </div>
  );
}
*/
export default App;
