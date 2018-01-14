import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import StatusComp from './statusComp';
import { updateStatus, updateFilename}  from './actions';
import axios from 'axios';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.state = {
      page: 1,
      status: ''
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  onSubmitForm(values) {
   //this.props.onSubmit(values)
    console.log(values);    
    //axios.post('http://localhost:7777/makedoc', {
    axios.post('https://estate-docs-api.herokuapp.com/makedoc', {
      body: values
    })
    .then( (response) => {
      //this.setState({status: response.data.message});
      this.props.updateStatus(response.data.message)
      this.props.updateFilename(response.data.filename)
      console.log(response.data.message);     
    })
    .catch((error) => {
      this.props.updateStatus(error.message)
      //this.setState({status: error.mapDispatchToProps})
      console.log(error);     
    });
  }

  render() {
    const  onSubmit  = (values) => this.onSubmitForm(values);
    const { page } = this.state;
    return (
      <div>
        {this.props.status && <StatusComp status={this.props.status} filename={this.props.filename} />}
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    status: state.status,
    filename: state.filename
  };
};

const mapDispatchToProps = (dispatch) => {  
  return bindActionCreators({
    updateStatus,
    updateFilename
  }, dispatch);
};

//export default WizardForm;
export default connect(mapStateToProps, mapDispatchToProps)(WizardForm);
