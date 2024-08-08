import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import About from './components/About';
// import Service from './components/Service';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Testmonial from './components/Testmonial';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Footer from './components/Footer';


import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
    {/* <Service />
    <Skills />
    <Experience />
    <Testmonial />
    <Blog />
    <Contact />
    <Footer /> */}
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
