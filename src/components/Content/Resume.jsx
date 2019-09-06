import React from 'react';
import './resume.scss';

function Resume() {
  return(
    <embed className="resume" src={require('../../assets/Nathai-Cueter resume.pdf')}></embed>
  )
}

export default Resume;
