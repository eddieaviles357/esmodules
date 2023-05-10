import React from 'react';
import ReactDOM from 'react-dom/client';
import fruits from './foods';
import { choice, remove } from './helpers';

const App = () => {
  const fruit = choice(fruits);
  remove(fruits, fruit);
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