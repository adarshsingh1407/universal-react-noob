import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VISIBILITY_FILTERS } from '../actions/SubstanceActions';
import { getVisibilityFilterLabel } from '../utils/SubstanceUtils';

/*
 * Presentational Component : Footer
 */
class Footer extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    var filterLinks = [];
    Object.keys(VISIBILITY_FILTERS).forEach((key, index) => {
      filterLinks.push(
        <FilterLink key={index}
          filter={VISIBILITY_FILTERS[key]}>
          {getVisibilityFilterLabel(VISIBILITY_FILTERS[key])}
        </FilterLink>);
    })
    return(
      <div>
        <hr/>
        Filter:
        {filterLinks}
        <hr/>
      </div>
    )
  }
}

export default Footer
