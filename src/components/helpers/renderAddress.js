import React from 'react';
import renderField from './renderField';
import { Field } from 'redux-form';

const renderAddress = (props, entity) => {
    console.log(entity);
    return (
        <div>
            <Field
                name={`${entity}.address`}
                type="text"
                component={renderField}
                label="Address"
            />            

            <Field
                name={`${entity}.city`}
                type="text"
                component={renderField}
                label="City"
            />
        </div>

    );
};

export default renderAddress;