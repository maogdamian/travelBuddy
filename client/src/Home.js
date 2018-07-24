import React, { Component } from 'react';
import HowItWorks from './planning/HowItWorks.js';


class Home extends Component {
  render(){
    return (
      <div className="Home">
        <HowItWorks />
        <About />
      </div>
    );
  }
}

export default Home;
