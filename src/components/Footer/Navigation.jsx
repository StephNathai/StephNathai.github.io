import React from 'react';

function Navigation ({links}) {
  return(
    <div className='footer-links-container'>
      {Object.keys(links).map((link) => (
        <a href={links[link]} key={link}><img className={link} src={require(`../../assets/${link}.svg`)} alt={link} /></a>
      ))}
    </div>
  )
}

export default Navigation;
