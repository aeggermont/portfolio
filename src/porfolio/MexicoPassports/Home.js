import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import MexicoPassportTypeBanner from './components/TypeBanner';

import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import aaeData from '../../component/aaeData';
import projectData from './projectData';

import About from './components/About';

export const MexicoVirtualAssistantsHome = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
      <MexicoPassportTypeBanner aaeData={aaeData}/>

      <About aClass='about_area bg_color' projectData={projectData}/>

      <Contact aaeData={aaeData}/>
      <Footer aaeData={aaeData}/>
  </div>
)