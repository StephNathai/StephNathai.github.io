import React from 'react';
import './home.scss';

function LeftContent() {
  return(
    <div className="left-content">
      <h3>Hi, I'm Steph</h3>
      <h4>Welcome to my page! I love programming, playing games, and going on new adventures. Contact me below for more info. Enjoy!</h4>
    </div>
  );
}

function RightContent() {
  return(
    <div className="right-content">
      <img className="home-image" src={require('../../assets/main.jpg')} alt='Steph' />
    </div>
  );
}

function Home() {
  return(
    <div className="container">
      <LeftContent />
      <RightContent />
    </div>
  );
}

export default Home;
