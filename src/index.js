import React from 'react';
import ReactDOM from 'react-dom/client';
import fruits from './foods';
import { choice, remove } from './helpers';

const App = () => {
  const fruit = choice(fruits);
  console.log(`I'll like one ${fruit}, please!`);
  console.log(`Here you go: ${fruit}`)
  console.log(`Delicious! May I have another?`);
  remove(fruits, fruit);
  console.log(`I’m sorry, we’re all out. We have ${fruits.length} left.`)
  return (
    <div>
      <p>I'll like one {fruit}, please!</p>
      <p>Here you go:: {fruit}</p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {fruits.length} left.</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);