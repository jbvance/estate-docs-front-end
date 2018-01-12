import React, { Component } from 'react';
import { connect } from 'react-redux';

class statusComp extends Component {
    render() {
        return (
            <div className="status">{this.props.status}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { status: state.status };
}

export default connect(mapStateToProps)(statusComp);
