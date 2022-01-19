import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

// //jquery rendering is working. But not react
// $(document).ready(function() {
//   $('body').append('<h1>hi there</h1>');
// })
