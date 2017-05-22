import React from 'react';
import { connect } from 'react-redux';
import { addSubstance } from '../actions/SubstanceActions';

/*
 * Mixed Component
 */
let AddSubstance = ({ dispatch }) => {
  let substance = {
    name: '',
    currentTemp: 0
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!substance.name.value.trim()) {
          return
        }
        dispatch(addSubstance(substance.name.value, parseInt(substance.currentTemp.value, 10)))
        substance.name.value = ''
        substance.currentTemp.value = ''
      }}>
        <input ref={node => {
          substance.name = node
        }} placeholder="Substance Name" />
        &nbsp;
        <input ref={node => {
          substance.currentTemp = node
        }} placeholder="Temperature"/>
        <button type="submit">
          Add Substance
        </button>
      </form>
    </div>
  )
}
AddSubstance = connect()(AddSubstance)

export default AddSubstance
