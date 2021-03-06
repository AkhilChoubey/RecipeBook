import React from 'react';
import Login from './Auth/Login';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Auth/Register';
import Home from './Home';
import FinalHome from './FinalHome';
import Top from './Top';
import { withRouter } from 'react-router';
import Healthy from './Healthy';
import Search from './Search';

import Contact from './Contact';

import MealSearch from './MealSearch';
import ResetPass from './Auth/ResetPass';
import NewPass from './Auth/NewPass';
import Contact2 from './Contact2';


const App = () => {

    return <div>
    <Router>
        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/home" exact component={FinalHome} />

         <Route path="/signup" component={withRouter(Register)}/>
         <Route path="/login" component={withRouter(Login)}/>
         <Route path="/reset" component={withRouter(ResetPass)}/>
         <Route path="/resetpassword" component={withRouter(NewPass)} />

         <Route path="/top" component={withRouter(Top)}/>
         <Route path="/healthy" component={withRouter(Healthy)}/>
         <Route path="/search" component={withRouter(Search)}/>
         {/* <Route path="/about" component={withRouter(About)}/> */}
         <Route path="/contact" component={withRouter(Contact)}/>
         <Route path="/contact2" component={withRouter(Contact2)}/>
         <Route path="/meal" component={withRouter(MealSearch)}/>
        </Switch>
    </Router>     
    </div>
}

export default App;