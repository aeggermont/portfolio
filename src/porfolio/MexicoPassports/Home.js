import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import MexicoPassportTypeBanner from './components/TypeBanner';

import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import aaeData from '../../component/aaeData';


export const MexicoVirtualAssistantsHome = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
      <MexicoPassportTypeBanner aaeData={aaeData}/>

      
      <Contact aaeData={aaeData}/>
      <Footer aaeData={aaeData}/>
  </div>
)