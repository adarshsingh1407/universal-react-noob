import React, { Component } from 'react';
import { fetchProfile, updateProfile } from '../actions/ProfileActions';
import { connect } from 'react-redux'

class CollectorProfile extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
    console.log(props.ssr);
    if ('CollectorProfile' !== props.ssr.path) {
      this.props.fetchProfile();
    }
    this.socialImg = decodeURIComponent(this.props.collector.socialImageUrl);
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  render(){
    const { collector = {}, isBusy = true, updateBusy = false, updateProfile } = this.props;
    return(
      <div>
        {isBusy ?
          <div>
            Loading...
          </div>
          :
          <div>
            <h1>{collector.collectorName}</h1>
            <br />
            <img src={this.socialImg} alt={collector.collectorName}></img>
            <br />
            <p>({collector.description})</p>
            <br />
            <button disabled={updateBusy} onClick={updateProfile}>
              UPDATE
            </button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    collector: state.profile.collector,
    updateBusy: state.profile.updateBusy,
    ssr: state.ssr,
    isBusy: ('CollectorProfile' !== state.ssr.path) ? state.profile.isBusy : ('CollectorProfile' !== state.ssr.path)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProfile: () => {
    return dispatch(fetchProfile(parseInt(ownProps.match.params.actorId, 10)))
  },
  updateProfile: () => {
    return dispatch(updateProfile());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectorProfile)
