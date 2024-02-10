import { useState } from 'react';
import BaristaForm from './Components/BaristaForm';
import './App.css';

function App() {


  return (
    <>
      <div className="title-container">
        <img src="https://quiet-macaron-ca013a.netlify.app/assets/omg-logo.79cdfddd.png" alt="Your alt text" />

        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <h2>Hi, I'd like to order a:</h2>

      <BaristaForm />

    </>
  );
}

export default App;