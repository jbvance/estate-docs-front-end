import React from 'react';

const renderStatus = (props) => {   
    if (!props.text || props.text.trim().length === 0){
        return <div></div>;
    }
    return (
        <div className="status">
            {props.text}
        </div>
    );
}

export default renderStatus