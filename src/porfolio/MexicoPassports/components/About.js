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
                        <div className="col-lg-12 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">The Problem </h2>
                                    <br></br>
                                    <p>{projectData.problemStatement[0]}</p>
                                    <p>{projectData.problemStatement[1]}</p>
                                    <p></p>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-1">
                            <div className="about_img"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
