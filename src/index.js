// Import React as a JS module
import React from 'react';
import ReactDOM from 'react-dom';
// Create component to produce some HTML

// const is ES6 syntax - declaring a variable that is not going to be reassigned (constant)
// JSX = looks like HTML but is JS
const App = () => {
  return <div>Hi!</div>;
}

// Put component's generated HTML in the DOM (on the page)
// Target DOM node 
ReactDOM.render(<App />, document.querySelector('.container'));
