import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <h3>Should this form become effectively immediatley?</h3>
    </div>
     <div>        
        <p>If you check the box below, the power of attorney will become effective immediately and your agent
          will be able to use it without certifying that you have become incapacitated. Additionally, the document will not cease 
          to be effective if you later become incapacitated. If you do NOT check the box below, your agent will be required to obtain
          evidence of your incapacity in writing from your physician before the agent will be allowed to act on your behalf.
        </p>
      </div>  
      <div>
        <label htmlFor="effectiveNow">Make document effective immediately:</label>
        <div>
                 
          <Field
            name="effectiveNow"
            id="effectiveNow"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
    
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
