import React from 'react';
import Sales from '../components/Sales';

const Home = () => {
  return (
    <div className="homePage">
        <div className="pageHeader">
            <div className="pageTitle"><img src="/assets/home.svg" alt="Home" /><p>Home</p></div>
        </div>
        
        <Sales />
    </div>
  )
}

export default Home