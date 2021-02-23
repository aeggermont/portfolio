import React, { Component } from "react";
import {Fade ,Reveal} from "react-reveal/Reveal/";

import Sectiontitle from '../../../component/Banner/Sectiontitle';


class TheTeam extends Component {
  render() {
    let aaeData = this.props.aaeData;
    let projectData = this.props.projectData; 

    return (
      <section className="contact-area" id="contact">
      <div className="container">
            <div className="about_content">
                <h2 className="t_color">The Team </h2>
                <br></br>
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-center">Anqi Cao</div>
                  <div className="col-lg-4 d-flex align-items-center">Antonio Aranda Eggermont</div>
                  <div className="col-lg-4 d-flex align-items-center">Patriya Wiesmann</div>
                </div>
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-center">Mojin YU</div>
                  <div className="col-lg-4 d-flex align-items-center">Stephanie Blucker</div>
                </div>
            </div>
         
  
        </div>

    </section>

    );
  }
}
export default TheTeam;