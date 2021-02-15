import React from 'react';
import Navbar from './component/Navbar/Navbar';
import ParticlesBanner from './component/Banner/ParticlesBanner';
import About from './component/About';

//import Skills from './component/About';




import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';

import Blog from './component/Blog/Blog';
import MapContainer from './component/Map';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import jhonData from './component/jhonData';
import aaeData from './component/aaeData';


/*
import Service from './component/Service';
<Service wClass="work_area_two" jhonData={jhonData}/>
      
import Clientslogo from './component/Clientslogo';
<Clientslogo/>
<Skill cClass="bg_w"/>
 <Testimonial/>
 <MapContainer/>
 <Portfolio pClass="bg_color"/>
*/

export const Home3 = () => (
  <div className="body_wrapper">
      <Navbar mClass="dark_menu" mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
      <ParticlesBanner aaeData={aaeData}/>
      <About aClass='about_area bg_color' aaeData={aaeData}/>
      <Blog/>
      
      
      <Contact aaeData={aaeData}/>
      <Footer aaeData={aaeData}/>
  </div>
)


