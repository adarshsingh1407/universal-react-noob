import React from 'react'
import PropTypes from 'prop-types'
import Substance from './Substance'

class SubstanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {substances, onClickIncrease, onClickDecrease, onChangeStep} = this.props;
    return (
      <div>
        {substances.map(substance =>
          <Substance
            key={substance.id}
            substance={substance}
            onClickIncrease={onClickIncrease}
            onClickDecrease={onClickDecrease}
            onChangeStep={onChangeStep}
          />)
        }
      </div>
    );
  }
}

SubstanceList.propTypes = {
  substances: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        currentTemp: PropTypes.number.isRequired
      }
    ).isRequired
  ).isRequired,
  onClickIncrease: PropTypes.func.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
  onChangeStep: PropTypes.func.isRequired
}

export default SubstanceList
