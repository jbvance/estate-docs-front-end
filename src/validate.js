const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  if (!values.city) {
    errors.city = 'Required';
  }

  if (!values.state) {
    errors.state = 'Required';
  }

  if (!values.zip) {
    errors.zip = 'Required';
  }

  
  // Validate that at least one agent is selected
  if (!values.agents || !values.agents.length) {
    errors.agents = { _error: 'At least one agent must be entered' }
  } else { //validate fields for each agent
    const agentsArrayErrors = []
    values.agents.forEach((agent, agentIndex) => {
      const agentErrors = {}
      if (!agent || !agent.firstName) {
        agentErrors.firstName = 'Required'
        agentsArrayErrors[agentIndex] = agentErrors
      }
      if (!agent || !agent.lastName) {
        agentErrors.lastName = 'Required'
        agentsArrayErrors[agentIndex] = agentErrors
      }    
      if (!agent || !agent.address) {
        agentErrors.address = 'Required'
        agentsArrayErrors[agentIndex] = agentErrors
      }  
      if (!agent || !agent.city) {
        agentErrors.city = 'Required'
        agentsArrayErrors[agentIndex] = agentErrors
      } 
      if (!agent || !agent.state) {
        agentErrors.state = 'Required'
        agentsArrayErrors[agentIndex] = agentErrors
      } 
      if (!agent || !agent.zip) {
        agentErrors.zip= 'Required'
        agentsArrayErrors[agentIndex] = agentErrors
      } 
    })
    if (agentsArrayErrors.length) {
      errors.agents = agentsArrayErrors
    }
  }
  
  return errors;
};

export default validate;
