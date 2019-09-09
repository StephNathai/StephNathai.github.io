import React from 'react';
import Card from './Card';
import Monkey from './Monkey';
import './portfolio.scss';

const portfolioObj = [
  {
    title: "trainTrack",
    description: "An interactive subway map that shows you where the NYC 1,2,3,4,5,6, and shuttle lines currently are in their route sequence using the MTA API to pull real-time data",
    href: "http://trainTracknyc.com",
    compilation: "Node.js, Socket.io, Express, JavaScript, MTA API, and Google Maps API",
    media: "trainTrack is currently featured on the NYC MTA's website in their App Gallery under the Web/Mobile Category. Click on the image below to check it out!",
    imgSrcArray: ["trainTrack1.png", "trainTrack2.png"],
    alt: "trainTrack",
  },
  {
    title: "Group Away",
    description: "Group project @ TNooz Hackathon: Discover, plan, and share trips with friends",
    href: "http://groupaway.mybluemix.net",
    compilation: "Node.js, Socket.io, JavaScript, jQuery, HTML, CSS, SabreDevStudio API, Priceline API, IBM Bluemix",
    media: "Group Away won the IBM Challenge for best Bluemix Creation at the Tnooz Hackathon. Read more about it in the article below!",
    imgSrcArray: ["groupaway1.png", "groupaway2.png"],
    alt: "groupaway",
  },
  {
    title: "LIC Wiki",
    description: "A fullstack application designed for users to interact via their LIC-themed articles in which they can create and edit",
    href: "https://licwiki.herokuapp.com",
    compilation: "Ruby, Ruby on Rails, HTML, CSS, JavaScript, and jQuery",
    imgSrcArray: ["licwiki.png"],
    alt: "LIC wiki",
  },
  {
    title: "SVG Fun",
    description: "Just a quick little homemade SVG",
    compilation: "SVG, jQuery, CSS, and HTML",
    template: Monkey,
    alt: "homemade SVG",
  },
];

function Portfolio() {
  return(
    <div className="portfolio-card-container">
      {
        portfolioObj.map((item) => (
          <Card cardContent={item}  key={item.title}/>
        ))
      }
    </div>
  )
}

export default Portfolio;
