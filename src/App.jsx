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
            <img src={`${import.meta.env.BASE_URL}1.jpeg`} alt='' />
            <label>Project One</label>
          </div>
          <div className='card'>
            <img src={`${import.meta.env.BASE_URL}2.jpeg`} alt='' />
            <label>Project Two</label>
          </div>
          <div className='card'>
            <img src={`${import.meta.env.BASE_URL}3.jpeg`} alt='' />
            <label>Project Three</label>
          </div>
          <div className='card'>
            <img src={`${import.meta.env.BASE_URL}4.jpeg`} alt='' />
            <label>Project Four</label>
          </div>
          <div className='card'>
            <img src={`${import.meta.env.BASE_URL}5.jpeg`} alt='' />
            <label>Project Five</label>
          </div>
          <div className='card'>
            <img src={`${import.meta.env.BASE_URL}6.jpeg`} alt='' />
            <label>Project Six</label>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
