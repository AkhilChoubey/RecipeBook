import React from 'react';
import Login from './Auth/Login';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import Register from './Auth/Register';
import Home from './Home';
import FinalHome from './FinalHome';
import Top from './Top';
import { withRouter } from 'react-router';
import Healthy from './Healthy';

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
        </Switch>
    </Router>     
    </div>
}

export default App;