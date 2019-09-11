import React from 'react';
import { updatePrice } from '../actions/index';
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  const addCost = e => {
    e.stopPropagation();
    props.updatePrice(currentPrice);
  };

  const currentPrice = props.feature;

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addCost}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { updatePrice }
)(AdditionalFeature);
