import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import renderStates from './renderStates';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field
        name="address"
        type="text"
        component={renderField}
        label="Address"
      />
      <Field
        name="city"
        type="text"
        component={renderField}
        label="City"
      />

      <div>
        <label>State</label>
        <div>
          <Field name="state" component="select">
            {renderStates()}
          </Field>
        </div>
      </div>

      <Field
        name="zip"
        type="text"
        component={renderField}
        label="Zip"
      />

      <div>
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
})(WizardFormFirstPage);
