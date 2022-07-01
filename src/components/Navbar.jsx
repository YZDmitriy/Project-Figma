import React from 'react';

function Navbar() {
  return (
    <div>
      <nav>
        <img className='nav--icon' src='./image/react.png' alt='react' />
        <h3 className='nav--logo_text'>ReactFacts</h3>
        <a className='nav--title' href='https://github.com/YZDmitriy'>My Projects</a>
      </nav>
    </div>
  );
}

export default Navbar;
