import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Testmonial from './components/Testmonial';
import Blog from './components/Blog';
import Experience from './components/Experience';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
    <Service />
    <Skills />
    <Experience />
    {/* <Testmonial /> */}
    <Blogg />
    <Contact />
    <Footer />
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
