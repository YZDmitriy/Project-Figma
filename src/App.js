import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div className='container'>
      <Navbar />
      <Main />
    </div>
      <Footer/>
    </>
  );
}

export default App;
