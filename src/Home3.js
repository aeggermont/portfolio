import React,  { useState }  from 'react';
import Navbar from './component/Navbar/Navbar';
import ParticlesBanner from './component/Banner/ParticlesBanner';
import About from './component/About';

//import Skills from './component/About';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'


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
 TOAST EXAMPLE
 <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
*/
/*
import Service from './component/Service';
<Service wClass="work_area_two" jhonData={jhonData}/>
      
import Clientslogo from './component/Clientslogo';
<Clientslogo/>
<Skill cClass="bg_w"/>
 <Testimonial/>
 <MapContainer/>
 <Portfolio pClass="bg_color"/>

  <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <h1 className="header">Some Stuff </h1>
  </Jumbotron>
*/



const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
}

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


