import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const BASEURL = import.meta.env.BASE_URL;
    return (
      <>
        <header>
          <div className='logo'>My Projects</div>
        </header>
        <section>
          <div className='card'>
            <img src={`${BASEURL}1.jpeg`} alt='' />
            <label>Project 01</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}2.jpeg`} alt='' />
            <label>Project 02</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}3.jpeg`} alt='' />
            <label>Project 03</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}4.jpeg`} alt='' />
            <label>Project 04</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}5.jpeg`} alt='' />
            <label>Project 05</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}6.jpeg`} alt='' />
            <label>Project 06</label>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
