import React from 'react';

// function googleyEyes() {
//   const shiftX = Math.random()*20;
//   const shiftY = Math.random()*20;
//
//   // document.querySelectorAll(".left-pupil, .right-pupil").velocity(
//   //   {
//   //     translateX: shiftX,
//   //     translateY: shiftY
//   //   },
//   //   1000
//   // ) //speed of animation
// }

function Monkey() {
  // window.setInterval(() => {
  //   googleyEyes();
  // }, 1000);
  return(
    <svg className="svg">
      <g>
        <circle cx="75" cy="120" r="60" fill="#F8DBBE"/>
        <circle cx="330" cy="120" r="60" fill="#F8DBBE"/>
        <circle cx="200" cy="160" r="140" fill="#5B2E01"/>
        <circle cx="150" cy="130" r="40" fill="#FFFFFF" stroke = "#000000" strokeWidth="4"/>
        <circle cx="250" cy="130" r="40" fill="#FFFFFF" stroke = "#000000" strokeWidth="4"/>
        <circle className="left-pupil" cx="150" cy="130" r="20" fill="#000000"/>
        <circle className="right-pupil" cx="250" cy="130" r="20" fill="#000000"/>
        <ellipse cx="200" cy="220" rx="150" ry="80" fill="#F8DBBE" />
        <rect x="100" y="220" width="200" height="8" fill="#E4B17E"/>
      </g>
    </svg>
  );
}

export default Monkey;
