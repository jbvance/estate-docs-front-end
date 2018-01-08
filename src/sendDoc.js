import axios from 'axios';

export default function sendDoc(values) {
  console.log(values);
  axios.post('http://localhost:7777/makedoc', {
    body: values
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};