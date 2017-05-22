import React, {Component} from 'react';
import './App.css';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: props.switch
        };
    };
    handleClick = (event, data) => {
      console.log({msg:'event', event: event, data:data});
      this.setState({switch: !data});
    };
    render = () => {
        return (
            <div>
                {/* <button onClick={this.handleClick.bind(this, this.state.switch)}>
                    {this.state.switch ? 'ON' : 'OFF'}
                </button> */}
                <button onClick={(e) => this.handleClick(e, this.state.switch)}>
                    {this.state.switch ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    };
}
Toggle.defaultProps = {
  switch: false
};

export default Toggle;
