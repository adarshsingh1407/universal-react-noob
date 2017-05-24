import React, { Component } from 'react';
import { fetchProfile, updateProfile } from '../actions/ProfileActions';
import { connect } from 'react-redux'

class CollectorProfile extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
    this.onServer = false;
    if (props.staticContext !== undefined && props.staticContext.onServer !== undefined) {
      this.onServer = props.staticContext.onServer;
    }
    this.socialImg = decodeURIComponent(this.props.collector.socialImageUrl);
    if (this.onServer) {
      this.collectorImage = <img src={this.socialImg} alt="Adarsh"></img>;
    } else {
      this.collectorImage = <img src={this.socialImg} alt="Singh"></img>;
    }
    console.log('onServer : ' + this.onServer);
  }
  componentDidMount() {
    if (this.props.componentPath !== this.props.ssrPath) {
      this.props.fetchProfile();
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
            {this.collectorImage}
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
  fetchProfile: () => {
    return dispatch(fetchProfile(parseInt(ownProps.match.params.actorId, 10)))
  },
  updateProfile: () => {
    return dispatch(updateProfile());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectorProfile)
