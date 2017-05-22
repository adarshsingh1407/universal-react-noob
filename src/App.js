import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Collectors from './components/Collectors';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        console.info('DCW INIT');
    }
    componentDidMount = () => {
        // API calls here
    }
    render() {
        return (
            <div className="App">
              <Header />
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/collector" component={Collectors}/>
              </Switch>
            </div>
        );
    }
}

export default App;

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test --env=jsdom",
//   "eject": "react-scripts eject"
// }


// "start": "nodemon lib/index.js --exec babel-node --presets es2015,stage-2",
// "build": "babel lib -d dist --presets es2015,stage-2",
// "test": "react-scripts test --env=jsdom",
// "eject": "react-scripts eject",
// "serve": "node dist/index.js"
