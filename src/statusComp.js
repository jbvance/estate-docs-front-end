import React from 'react';

const StatusComp = (props) => {
        return (
            <div className="status">
                {props.status}
                {props.filename
                ? <div>
                    <a href={`https://estate-docs-api.herokuapp.com/download/${props.filename}`}>Click here to download your document</a>
                  </div>
                : ''}
            </div>
        );
};

export default StatusComp;

