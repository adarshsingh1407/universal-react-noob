import React, {Component} from 'react';
import './App.css';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRating: this.props.currentRating,
            showText: true,
            ratingText: ''
        };
    }
    getRatingText(rating) {
        var text = '';
        switch (parseInt(rating, 10)) {
            case 1:
                text = 'Poor';
                break;
            case 2:
                text = 'Bad';
                break;
            case 3:
                text = 'Average';
                break;
            case 4:
                text = 'Good';
                break;
            case 5:
                text = 'Excellant';
                break;
            default:
                text = '';
        }
        return text;
    }
    setRating(e) {
        var newRating = e.target.value;
        this.setState(() => {//Can take params : prevState, props
          return {
            currentRating: newRating,
            ratingText: this.getRatingText(newRating),
            showText: newRating > 0 && newRating < 6
          };
        }, () => {//successCallback for state change
          // console.log('New State achieved!!');
        });
    }
    componentWillMount() {
      this.setState({ratingText: this.getRatingText(this.props.currentRating)})
      // console.log({msg:'componentWillMount', data: this});
    }
    componentDidMount() {
      // console.log({msg:'componentDidMount', data: this});
    }
    componentDidUpdate() {
      // console.log({msg:'componentDidUpdate', data: this});
    }
    render() {
        return (
            <div>
                <p className="App-intro">
                    Hello{this.state.showText
                        ? ', Rating'
                        : ''}!
                </p>
                <input type="text" onChange={this.setRating.bind(this)} value={this.state.currentRating}/>
                {this.state.showText
                    ? <p>At {this.state.currentRating} stars, rating is considered to be "{this.state.ratingText}".</p>
                    : null
                }
            </div>
        );
    }
}

export default Rating;
