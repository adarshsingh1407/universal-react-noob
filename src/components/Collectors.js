import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CollectorProfile from './CollectorProfile';
import ReactiveX from '../ReactiveX';

class Collectors extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    return(
      <div>
        <Switch>
          <Route path="/collector/:actorId" text="CollectorList" component={CollectorProfile}/>
          <Route path="/collector" text="CollectorProfile" component={ReactiveX}/>
        </Switch>
      </div>
    );
  }
}

export default Collectors
