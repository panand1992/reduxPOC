import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import asyncComponent from './asyncComponent';

const Home = asyncComponent(() =>
    import('./components/home.jsx').then(module => module.default)
)

class Customrouter extends Component {
   	render() {
      	return (
         	<Router>               
               	<Switch>
                  	<Route exact path='/' component={Home} />
               	</Switch>
         	</Router>
      	);
   	}
}
export default Customrouter;