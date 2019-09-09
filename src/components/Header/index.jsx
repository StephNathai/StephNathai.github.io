import React from 'react';
import Name from './Name';
import Navigation from './Navigation';
import './header.scss';

const links = ['Home', 'Resume', 'Portfolio'];

function Header({updateContent}) {
  return (
    <div className='header'>
      <Name name='Stephanie Nathai-Cueter'/>
      <hr />
      <Navigation links={links} updateContent={updateContent}/>
    </div>
  );
}

export default Header;
