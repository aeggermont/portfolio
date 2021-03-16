import React from 'react';

import MexicoPassportTypeBanner from './components/TypeBanner';

import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import aaeData from '../../component/aaeData';
import projectData from './projectData';

import Navbar from './components/Navbar';
import About from './components/About';
import TheTeam from './components/TheTeam';
import Research from './components/Research';
import ProjectTimeline from './components/ProjectTimeline';
import Ideation from './components/Ideation';
import Prototyping from './components/Prototyping';
import Design from './components/Design';
import Limitations from './components/Limitations';

/*
  <Prototyping></Prototyping>
  <Design></Design>
*/

export const MexicoVirtualAssistantsHome = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
      <MexicoPassportTypeBanner aaeData={aaeData}/>

      <About aClass='about_area bg_color' projectData={projectData}/>
      <Research projectData={projectData}></Research>
      <Ideation></Ideation>
      <Design></Design>
      
      <br></br>
      <br></br>
      <Limitations></Limitations>
      

      <Contact aaeData={aaeData}/>
      <Footer aaeData={aaeData}/>
  </div>
)