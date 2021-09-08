import React from 'react';
import Login from './Auth/Login';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import Register from './Auth/Register';
import Home from './Home';
import FinalHome from './FinalHome';
import Top from './Top';
import { withRouter } from 'react-router';
import Healthy from './Healthy';
import Search from './Search';
import About from './About';
import Contact from './Contact';
import MealPlaner from './MealPlaner';

const App = () => {

    return <div>
    <Router>
        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/home" exact component={FinalHome} />
         <Route path="/signup" component={withRouter(Register)}/>
         <Route path="/login" component={withRouter(Login)}/>
         <Route path="/top" component={withRouter(Top)}/>
         <Route path="/healthy" component={withRouter(Healthy)}/>
         <Route path="/search" component={withRouter(Search)}/>
         {/* <Route path="/about" component={withRouter(About)}/> */}
         <Route path="/contact" component={withRouter(Contact)}/>
         <Route path="/meal" component={withRouter(MealPlaner)}/>
        </Switch>
    </Router>     
    </div>
}

export default App;