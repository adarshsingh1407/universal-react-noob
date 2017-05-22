import React from 'react';
import PropTypes from 'prop-types';
import { getSubstanceState } from '../utils/SubstanceUtils';

class Substance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {onClickIncrease, onClickDecrease, onChangeStep, substance} = this.props;
    return (
      <div>
        {substance.id}. {substance.name} ({getSubstanceState(substance.currentTemp)})
        <br/>
        Current Temperature : {substance.currentTemp}°C
        <br/>
        <button onClick={() => onClickIncrease(substance.id, parseInt(substance.step, 10))}>Increase Temperature</button>
        &nbsp;
        <input
        onChange={e => {onChangeStep(substance.id, e.target.value)}}
        placeholder="Increment/Decrement"
        value={substance.step}
        />
        &nbsp;
        <button onClick={() => onClickDecrease(substance.id, parseInt(substance.step, 10))}>Decrease Temperature</button>
      </div>
    );
  }
}

Substance.propTypes = {
  onClickIncrease: PropTypes.func.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
  onChangeStep: PropTypes.func.isRequired,
  substance: PropTypes.any.isRequired
}

export default Substance
