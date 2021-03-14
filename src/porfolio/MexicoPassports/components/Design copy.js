import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

class Design extends Component {
    render(){
        let projectData = this.props.projectData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <h3> Design</h3>
                    <div className="row">
                        <div className="col-sm-8 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">

                                   <h4>Design text aksjdhka askjdhka askdhasd klhjasd </h4>
                                
                                
                                </div>
                            </Fade>
                        </div>
                        <div className="col-sm-4">
                            <Reveal effect="fadeInRight" duration={1500}> 
                                <h5 className="t_color">Project Type </h5>
                                <p>Group research project focusing on international UX with Stephanie Blucker, Anqi Cao, Patriya Wiesmann and Mojin Yu </p>

                                <h5 className="t_color">Project Aspects </h5>
                                <p>Research, Internation UX, Civic Tehcnologies, Ideation, Design and Digital Prototype  </p>

                                <h5 className="t_color">My Role </h5>
                                <p>Research and interviews, interaction design, and prototypes</p>

                                <h5 >Timeline </h5>
                                <p>May - Nov 2020 (7 Months)</p>

                                <h5 className="t_color">Sponsor </h5>
                                <p> Mexico's Ministry of Foreign Affairs </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Design;
