import React from 'react';

function Main(props) {
  return (
    <main>
      <h1 className='main--text'>Fun facts about React</h1>
      <div className='main--ul'>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <div class='react'>
        <div class='react-ellipse center'></div>
        <div class='react-ellipse left'></div>
        <div class='react-ellipse right'></div>
      </div>
    </main>
  );
}

export default Main;
