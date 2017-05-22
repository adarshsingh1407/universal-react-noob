import React, { Component } from 'react';
import { fetchProfile, updateProfile } from '../actions/ProfileActions';
import { connect } from 'react-redux'

class CollectorProfile extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
    this.props.fetchProfile();
    console.log('construct');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  render(){
    const { collector = {}, isBusy = true, updateBusy = false, updateProfile } = this.props;
    // let updatedCollector = {...collector}
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
  return {
    collector: state.profile.collector,
    isBusy: state.profile.isBusy,
    updateBusy: state.profile.updateBusy
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
