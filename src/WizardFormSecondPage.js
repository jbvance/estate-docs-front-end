import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import renderAgents from './renderAgents'
import renderStates from './renderStates';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;
  
const WizardFormSecondPage = props => {
  const { handleSubmit, pristine, reset, submitting, previousPage } = props;
  return (

    <form onSubmit={handleSubmit}>          
      <FieldArray name="agents" component={renderAgents} />      
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
