import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

/*
<Reveal effect="fadeInRight" duration={1500}><img src={require('../image/apporoach_man_img.png')} alt=""/></Reveal>
*/

class About extends Component {
    render(){
        let projectData = this.props.projectData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">

                                    <h2 className="t_color">The Problem </h2>
                                    <br></br>
                                    <p>{projectData.problemStatement[0]}</p>
                                    
                                    <h2 className="t_color">The Challenge</h2>
                                    <p>{projectData.problemStatement[1]}</p>
                                
                                
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
export default About;
