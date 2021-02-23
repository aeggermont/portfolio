import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

/*
<Reveal effect="fadeInRight" duration={1500}><img src={require('../image/apporoach_man_img.png')} alt=""/></Reveal>
*/

class ProjectTimeline extends Component {
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
                                    <br></br>
                                    <h2 className="t_color">Project Timeline</h2>
                                    <br></br>
                                    <h4>Key Findings</h4>
                                    <br></br>
                                    <div className="culture_theory_img">
                                        <Reveal effect="fadeInRight" duration={1500}><img src={require('../../../image/MexicoVirtualAssistants/project-time-line.png')} alt=""/></Reveal>
                                    </div>
                                    
                                

                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ProjectTimeline;
