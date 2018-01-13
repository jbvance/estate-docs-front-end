import axios from 'axios';

export default function sendDoc(values) {
  console.log(values);
  let responseStatus = 'None yet';
  axios.post('https://estate-docs-api.herokuapp.com/makedoc', {
    body: values
  })
  .then(function (response) {
    //console.log(response.data.message);
    responseStatus = response.data.message;
  })
  .catch(function (error) {
    //console.log(error);
    responseStatus = error.message;
  });
  //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};