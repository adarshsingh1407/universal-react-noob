import React, {Component} from 'react';
import AddSubstance from './containers/AddSubstance';
import VisibleSubstanceList from './containers/VisibleSubstanceList';
import Footer from './components/Footer';

class Main extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    return(
      <div>
        <AddSubstance />
        <Footer />
        <VisibleSubstanceList />
      </div>
    );
  }
}

export default Main
