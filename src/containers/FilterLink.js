import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/SubstanceActions'
import Link from '../components/Link'

/*
 * Provides props from
 * state + props provided in template
 */
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

/*
 * Provides all dispatch actions
 * Required by Attached Component:Link
 * to props
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

/*
 * Container Component : FilterLink
 * Connect Link(Presentational Component) with Props
 */
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
