import React, {Component} from 'react';
import './App.css';
import Rating from './Rating';

class Liquid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTemp: this.props.temp.currentTemp,
            appName: this.props.appName,
            tempArr: this.props.temp.tempArr,
            currentRating: 4
        };
    }
    setTemperature = (e) => {
        // e.target.value is the text from our input
        this.setState({currentTemp: e.target.value});
    }
    getState = (temperature) => {
      // If temp is on/below freezing, it's a solid
      if (temperature <= 0) {
          return 'Solid';

          // if temp is on/above boiling, it's a gas
      } else if (temperature >= 100) {
          return 'Gas';

          // otherwise it's just a liquid
      } else {
          return 'Liquid';
      }
    }
    render = () => {
        return (
            <div>
                <p className="App-intro">
                    Hello, Celsius!
                </p>
                <input type="text" onChange={this.setTemperature.bind(this)} value={this.state.currentTemp}/>
                <p>At {this.state.currentTemp}°C, water is considered to be a "{this.getState(this.state.currentTemp)}" state of matter.</p>
                <p>Also, Water at {this.state.tempArr[0]}°C is {this.getState(this.state.tempArr[0])}!</p>
                <div>
                    <ul>
                        {this.state.tempArr.map(function(temp, index) {
                            return <li key={index}>Water at {temp}°C : {this.getState(temp)}</li>;
                        }, this)}
                    </ul>
                </div>
                {/* On each render, Rating is remounted. But it's state remains intact, magically!! */}
                <Rating currentRating={this.state.currentRating}/>
            </div>
        );
    }
}

export default Liquid;
