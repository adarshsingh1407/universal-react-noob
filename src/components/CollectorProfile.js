import React, { Component } from 'react';
import { fetchProfile, updateProfile } from '../actions/ProfileActions';
import { connect } from 'react-redux'

class CollectorProfile extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
    this.isServer = false;
    if (props.staticContext !== undefined && props.staticContext.isServer !== undefined) {
      this.isServer = props.staticContext.isServer;
    }
    // console.log('isServer : ' + this.isServer);
  }
  componentDidMount() {
    if (this.props.componentPath !== this.props.ssrPath) {
      var actorId = parseInt(this.props.match.params.actorId, 10);
      this.props.fetchProfile(actorId);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.actorId !== this.props.match.params.actorId) {
      var actorId = parseInt(this.props.match.params.actorId, 10);
      this.props.fetchProfile(actorId);
    }
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
            {/* {this.collectorImage} */}
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
  const ssrPath = decodeURIComponent(state.ssr.path);
  const componentPath = '/collector/' + ownProps.match.params.actorId;
  return {
    collector: state.profile.collector,
    updateBusy: state.profile.updateBusy,
    ssrPath: ssrPath,
    componentPath: componentPath,
    isBusy: (componentPath !== ssrPath) ? state.profile.isBusy : (componentPath !== ssrPath)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProfile: (id) => {
    return dispatch(fetchProfile(id));
  },
  updateProfile: () => {
    return dispatch(updateProfile());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectorProfile)
