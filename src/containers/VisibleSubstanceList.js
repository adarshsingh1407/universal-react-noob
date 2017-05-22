import { connect } from 'react-redux'
import { incTemp, decTemp, changeStep } from '../actions/SubstanceActions'
import SubstanceList from '../components/SubstanceList';
import { getVisibleSubstances } from '../utils/SubstanceUtils';

const mapStateToProps = (state) => ({
  substances: getVisibleSubstances(state.substances, state.visibilityFilter)
})

const mapDispatchToProps = {
  onClickIncrease: incTemp,
  onClickDecrease: decTemp,
  onChangeStep: changeStep
}

const VisibleSubstanceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubstanceList)

export default VisibleSubstanceList
