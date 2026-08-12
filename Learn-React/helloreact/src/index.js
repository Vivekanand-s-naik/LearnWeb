import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// let ReactElement = ()=> {
//   return  <a href='https://www.google.com/' target='_self'>Click Here To Visit Google</a>

// }
let ReactElement = React.createElement(
  'a',
  {
    href :'https://www.google.com/',
    target: '_self' 
  },
  'Click Me To Visit Google'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  ReactElement
);
