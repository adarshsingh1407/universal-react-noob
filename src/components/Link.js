import React from 'react';
import PropTypes from 'prop-types';

/*
 * Presentational Component : Link
 */
class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {active, children, onClick} = this.props;
    return (
        <button
          disabled={active}
          onClick={e => {
            e.preventDefault();onClick();
          }}>
          {children}
        </button>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
