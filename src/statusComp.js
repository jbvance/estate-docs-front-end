import React from 'react';

const StatusComp = (props) => {
        return (
            <div className="status">
                {props.status}
                {props.filename
                ? <div>
                   
                    <a href={`${process.env.REACT_APP_API_URL}/download/${props.filename}`}>Click here to download your document</a>
                  </div>
                : ''}
            </div>
        );
};

export default StatusComp;

