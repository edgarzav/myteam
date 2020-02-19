import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './assets/styles/global.scss';
import Section1 from './cmps/Section1';
import Section2 from './cmps/Section2';
import Section3 from './cmps/Section3';
import Section4 from './cmps/Section4';
import Footer from './cmps/Footer';

function App() {
  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
