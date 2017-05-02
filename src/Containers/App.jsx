import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Demo from '../Components/Demo/Demo';
import { Home, Test } from './Containers';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello from component'
        };
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/test/">Test</Link></li>
                    <li><Link to="/test/wat">Test Route Attribute</Link></li>
                </ul>
                <Demo message={this.state.message} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/test/" component={Test} />
                    <Route path="/test/:message" component={Test} />
                </Switch>
            </div>
        );
    }
}
