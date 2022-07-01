import React from 'react';

function Footer(props) {
  return (
    <footer className='footer'>
      <div className='contacts'>
        Контакты для связи:
        <span className='teleg'>
          {' '}
         <span><img src='./image/free-icon-telegram-2111646.png' alt='qwertyu' /></span> 
          <a href='https://t.me/dmitri_yz'>https://t.me/dmitri_yz</a>
        </span>
        <span className='phone'>
        <span><img src='./image/telephone.png' alt='qwertyu' /></span> 
          +7 926 384 82 87</span>
      </div>
    </footer>
  );
}

export default Footer;
