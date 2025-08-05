import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <div className='logo'>My Projects</div>
        </header>
        <section>
          <div className='card'>
            <img src='/1.jpeg' alt='' />
            <label>Project One</label>
          </div>
          <div className='card'>
            <img src='/2.jpeg' alt='' />
            <label>Project Two</label>
          </div>
          <div className='card'>
            <img src='/3.jpeg' alt='' />
            <label>Project Three</label>
          </div>
          <div className='card'>
            <img src='/4.jpeg' alt='' />
            <label>Project Four</label>
          </div>
          <div className='card'>
            <img src='/5.jpeg' alt='' />
            <label>Project Five</label>
          </div>
          <div className='card'>
            <img src='/6.jpeg' alt='' />
            <label>Project Six</label>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
