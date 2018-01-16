import React from 'react';
import statesList from './statesList';

const renderStates = () => {
    const states = statesList
    return(
        states.map((state, index) => {
            return <option key={index} value={state.abbreviation}>{state.name}</option>
        })
    );
    
  }

export default renderStates;

