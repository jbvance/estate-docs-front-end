import React from 'react';
import renderField from './renderField';
import { Field } from 'redux-form';
import renderStates from './renderStates';

const renderAgents = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Agent
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((agent, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Agent"
          onClick={() => fields.remove(index)}
        />
        <h4>Agent #{index + 1}</h4>
        <Field
          name={`${agent}.firstName`}
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name={`${agent}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field
          name={`${agent}.address`}
          type="text"
          component={renderField}
          label="Address"
        />

        <Field
          name={`${agent}.city`}
          type="text"
          component={renderField}
          label="City"
        />
        <div>
          <label>State</label>
          <div>
            <Field name={`${agent}.state`} component="select">
              {renderStates()}
            </Field>
          </div>
        </div>

        <Field
          name={`${agent}.zip`}
          type="text"
          component={renderField}
          label="Zip"
        />
      </li>
    ))}
  </ul>
)

export default renderAgents;