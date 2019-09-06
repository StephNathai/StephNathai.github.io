import React from 'react';
import Navigation from './Navigation';
import './footer.scss';

const links = {
  'linkedin': 'www.linkedin.com',
  'github': 'www.github.com',
  'email': 'mailto:contact@stephnathai.com'
};

function Footer() {
  return(
    <div className='footer'>
      <Navigation links={links}/>
    </div>
  );
}

export default Footer;
